import { test, expect } from '@playwright/test';
import { createEarlyAccessEntry, validateToken } from '../src/lib/notion';
import { nanoid } from 'nanoid';

test.describe('Early Access Integration Test', () => {
  test('should submit form and validate token successfully', async ({ page }) => {
    // Mock the Notion API calls at the network level
    await page.route('**/api/submit-early-access', async (route) => {
      const request = route.request();
      const postData = JSON.parse(request.postData() || '{}');

      // Verify we got the form data
      expect(postData.firstName).toBeTruthy();
      expect(postData.email).toContain('@');

      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          token: 'test-token-abc123',
        }),
      });
    });

    await page.route('**/api/validate-token*', async (route) => {
      const url = new URL(route.request().url());
      const token = url.searchParams.get('token');

      // Verify token is passed correctly
      expect(token).toBe('test-token-abc123');

      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          valid: true,
        }),
      });
    });

    // Navigate to early access page
    await page.goto('/early-access');
    await page.waitForLoadState('networkidle');

    // Fill out the form
    await page.locator('input[id="firstName"]').fill('John');
    await page.locator('input[id="lastName"]').fill('Doe');
    await page.locator('input[id="email"]').fill('john.doe@example.com');

    // Select city
    await page.locator('[role="combobox"]').first().click();
    await page.locator('[role="option"]').filter({ hasText: 'Amsterdam' }).click();

    // Fill move date
    await page.locator('input[id="moveDate"]').fill('2026-03-15');

    // Submit the form
    await page.locator('button[type="submit"]').click();

    // Should redirect to join page with token
    await page.waitForURL('**/join/test-token-abc123', { timeout: 10000 });

    // Verify we're on the success page
    await expect(page.locator('text=/Welcome.*In/i')).toBeVisible({ timeout: 10000 });

    // WhatsApp button should be visible
    const whatsappButton = page.locator('button', { hasText: /whatsapp/i });
    await expect(whatsappButton).toBeVisible();
  });

  test('should show invalid token page when token is not valid', async ({ page }) => {
    // Mock invalid token response
    await page.route('**/api/validate-token*', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          valid: false,
        }),
      });
    });

    // Navigate directly to a join page with invalid token
    await page.goto('/join/invalid-token-xyz');
    await page.waitForLoadState('networkidle');

    // Should show invalid link message
    await expect(page.locator('text=/Invalid Link/i')).toBeVisible({ timeout: 5000 });

    // Should have return to form button
    const returnButton = page.locator('button', { hasText: /return.*form/i });
    await expect(returnButton).toBeVisible();
  });

  test.describe('Notion API Integration', () => {
    test('should create entry and validate token via Notion API', async () => {
      if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
        test.skip();
      }

      const testToken = `test-${nanoid(16)}`;
      const testData = {
        firstName: 'Test',
        lastName: 'User',
        email: `test-${nanoid(8)}@example.com`,
        city: 'Amsterdam',
        moveDate: '2026-06-01',
        token: testToken,
      };

      await createEarlyAccessEntry(testData);

      await new Promise(resolve => setTimeout(resolve, 3000));

      const isValid = await validateToken(testToken);
      expect(isValid).toBe(true);
    });

    test('should return false for non-existent token', async () => {
      if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
        test.skip();
      }

      const fakeToken = `fake-${nanoid(16)}`;
      const isValid = await validateToken(fakeToken);
      expect(isValid).toBe(false);
    });
  });
});
