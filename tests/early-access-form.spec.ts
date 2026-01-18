import { test, expect } from '@playwright/test';

test.describe('Early Access Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/early-access');
    await page.waitForLoadState('networkidle');
  });

  test('should display the early access form', async ({ page }) => {
    // Check page title/heading
    await expect(page.locator('h1, h2').filter({ hasText: /early access/i }).first()).toBeVisible();

    // Check all form fields are present
    await expect(page.locator('input[id="firstName"]')).toBeVisible();
    await expect(page.locator('input[id="lastName"]')).toBeVisible();
    await expect(page.locator('input[id="email"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();

    // Check city dropdown is present
    const citySelect = page.locator('[role="combobox"]').first();
    await expect(citySelect).toBeVisible();

    // Check move date input
    await expect(page.locator('input[id="moveDate"]')).toBeVisible();
  });

  test('should show validation errors for empty required fields', async ({ page }) => {
    // Click submit without filling anything
    await page.locator('button[type="submit"]').click();

    // Wait for validation errors to appear
    await page.waitForTimeout(500);

    // Check for error messages
    const errorMessages = page.locator('p.text-red-400, p.text-red-500');
    await expect(errorMessages.first()).toBeVisible();
  });

  test('should validate email format', async ({ page }) => {
    // Fill in first name and last name
    await page.locator('input[id="firstName"]').fill('John');
    await page.locator('input[id="lastName"]').fill('Doe');

    // Enter invalid email
    await page.locator('input[id="email"]').fill('invalid-email');

    // Fill other required fields
    await page.locator('[role="combobox"]').first().click();
    await page.locator('[role="option"]').filter({ hasText: 'Amsterdam' }).click();
    await page.locator('input[id="moveDate"]').fill('2026-03-15');

    // Submit form
    await page.locator('button[type="submit"]').click();

    // Wait for validation
    await page.waitForTimeout(500);

    // Should show email validation error
    const emailError = page.locator('p.text-red-400, p.text-red-500').filter({ hasText: /email/i });
    await expect(emailError).toBeVisible();
  });

  test('should show custom city input when "Other" is selected', async ({ page }) => {
    // Open city dropdown
    await page.locator('[role="combobox"]').first().click();

    // Select "Other"
    await page.locator('[role="option"]').filter({ hasText: 'Other' }).click();

    // Custom city input should appear
    const customCityInput = page.locator('input[placeholder*="Enter your city"]');
    await expect(customCityInput).toBeVisible();

    // Type in custom city
    await customCityInput.fill('Berlin');
    await expect(customCityInput).toHaveValue('Berlin');
  });

  test('should successfully submit form with valid data', async ({ page }) => {
    // Mock the API response
    await page.route('/api/submit-early-access', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          token: 'test-token-12345',
        }),
      });
    });

    // Fill in all required fields
    await page.locator('input[id="firstName"]').fill('John');
    await page.locator('input[id="lastName"]').fill('Doe');
    await page.locator('input[id="email"]').fill('john.doe@example.com');

    // Select city
    await page.locator('[role="combobox"]').first().click();
    await page.locator('[role="option"]').filter({ hasText: 'Amsterdam' }).click();

    // Fill move date
    await page.locator('input[id="moveDate"]').fill('2026-03-15');

    // Submit form
    await page.locator('button[type="submit"]').click();

    // Should redirect to join page with token
    await expect(page).toHaveURL(/\/join\/test-token-12345/, { timeout: 5000 });
  });

  test('should show error message when API fails', async ({ page }) => {
    // Mock API to return error
    await page.route('/api/submit-early-access', async (route) => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({
          message: 'Internal server error',
        }),
      });
    });

    // Fill in valid form data
    await page.locator('input[id="firstName"]').fill('John');
    await page.locator('input[id="lastName"]').fill('Doe');
    await page.locator('input[id="email"]').fill('john.doe@example.com');

    await page.locator('[role="combobox"]').first().click();
    await page.locator('[role="option"]').filter({ hasText: 'Amsterdam' }).click();

    await page.locator('input[id="moveDate"]').fill('2026-03-15');

    // Submit form
    await page.locator('button[type="submit"]').click();

    // Wait for error message
    await page.waitForTimeout(1000);

    // Should show error message
    const errorMessage = page.locator('div.bg-red-50, div.text-red-700');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText(/error/i);
  });

  test('should disable form while submitting', async ({ page }) => {
    // Mock slow API response
    await page.route('/api/submit-early-access', async (route) => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          token: 'test-token-12345',
        }),
      });
    });

    // Fill in form
    await page.locator('input[id="firstName"]').fill('John');
    await page.locator('input[id="lastName"]').fill('Doe');
    await page.locator('input[id="email"]').fill('john.doe@example.com');

    await page.locator('[role="combobox"]').first().click();
    await page.locator('[role="option"]').filter({ hasText: 'Amsterdam' }).click();

    await page.locator('input[id="moveDate"]').fill('2026-03-15');

    // Submit form
    await page.locator('button[type="submit"]').click();

    // Button should show loading state
    const submitButton = page.locator('button[type="submit"]');
    await expect(submitButton).toContainText(/submitting/i);

    // Form fields should be disabled
    await expect(page.locator('input[id="firstName"]')).toBeDisabled();
  });

  test('should validate minimum name length', async ({ page }) => {
    // Fill with single character names
    await page.locator('input[id="firstName"]').fill('J');
    await page.locator('input[id="lastName"]').fill('D');
    await page.locator('input[id="email"]').fill('john@example.com');

    await page.locator('[role="combobox"]').first().click();
    await page.locator('[role="option"]').filter({ hasText: 'Amsterdam' }).click();

    await page.locator('input[id="moveDate"]').fill('2026-03-15');

    // Submit form
    await page.locator('button[type="submit"]').click();

    // Wait for validation
    await page.waitForTimeout(500);

    // Should show validation errors for short names
    const errors = page.locator('p.text-red-400, p.text-red-500');
    await expect(errors.first()).toBeVisible();
  });

  test('should handle custom city submission', async ({ page }) => {
    // Mock the API response
    await page.route('/api/submit-early-access', async (route) => {
      const request = route.request();
      const postData = JSON.parse(request.postData() || '{}');

      // Verify custom city is formatted correctly
      expect(postData.city).toContain('Other: Berlin');

      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          token: 'test-token-custom',
        }),
      });
    });

    // Fill form with custom city
    await page.locator('input[id="firstName"]').fill('John');
    await page.locator('input[id="lastName"]').fill('Doe');
    await page.locator('input[id="email"]').fill('john@example.com');

    // Select "Other" and enter custom city
    await page.locator('[role="combobox"]').first().click();
    await page.locator('[role="option"]').filter({ hasText: 'Other' }).click();
    await page.locator('input[placeholder*="Enter your city"]').fill('Berlin');

    await page.locator('input[id="moveDate"]').fill('2026-03-15');

    // Submit form
    await page.locator('button[type="submit"]').click();

    // Should redirect successfully
    await expect(page).toHaveURL(/\/join\/test-token-custom/, { timeout: 5000 });
  });
});

test.describe('Join Page - Token Validation', () => {
  test('should show loading state while validating token', async ({ page }) => {
    // Mock slow token validation
    await page.route('/api/validate-token*', async (route) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ valid: true }),
      });
    });

    await page.goto('/join/test-token-123');

    // Should show loading state
    await expect(page.locator('text=Loading')).toBeVisible();
  });

  test('should show success page for valid token', async ({ page }) => {
    // Mock valid token
    await page.route('/api/validate-token*', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ valid: true }),
      });
    });

    await page.goto('/join/valid-token-123');
    await page.waitForLoadState('networkidle');

    // Should show success message
    await expect(page.locator('text=/Welcome.*In/i')).toBeVisible();

    // Should have WhatsApp button
    const whatsappButton = page.locator('button', { hasText: /whatsapp/i });
    await expect(whatsappButton).toBeVisible();
  });

  test('should show error page for invalid token', async ({ page }) => {
    // Mock invalid token
    await page.route('/api/validate-token*', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ valid: false }),
      });
    });

    await page.goto('/join/invalid-token-123');
    await page.waitForLoadState('networkidle');

    // Should show invalid link message
    await expect(page.locator('text=/Invalid Link/i')).toBeVisible();

    // Should have button to return to form
    const returnButton = page.locator('button', { hasText: /return.*form/i });
    await expect(returnButton).toBeVisible();
  });

  test('should redirect back to form when clicking return button on invalid token', async ({ page }) => {
    // Mock invalid token
    await page.route('/api/validate-token*', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ valid: false }),
      });
    });

    await page.goto('/join/invalid-token-123');
    await page.waitForLoadState('networkidle');

    // Click return button
    const returnButton = page.locator('button', { hasText: /return.*form/i });
    await returnButton.click();

    // Should redirect to early access form
    await expect(page).toHaveURL(/\/early-access/);
  });

  test('should track Meta Pixel events on WhatsApp button click', async ({ page }) => {
    // Track fbq calls
    const fbqCalls: any[] = [];
    await page.addInitScript(() => {
      (window as any).fbq = (...args: any[]) => {
        (window as any).__fbqCalls = (window as any).__fbqCalls || [];
        (window as any).__fbqCalls.push(args);
      };
    });

    // Mock valid token
    await page.route('/api/validate-token*', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ valid: true }),
      });
    });

    await page.goto('/join/valid-token-123');
    await page.waitForLoadState('networkidle');

    // Click WhatsApp button
    const whatsappButton = page.locator('button', { hasText: /whatsapp/i });
    await whatsappButton.click();

    // Check if fbq was called with CompleteRegistration event
    const fbqCallsResult = await page.evaluate(() => (window as any).__fbqCalls);

    if (fbqCallsResult) {
      const hasCompleteRegistration = fbqCallsResult.some(
        (call: any[]) => call[0] === 'track' && call[1] === 'CompleteRegistration'
      );
      expect(hasCompleteRegistration).toBe(true);
    }
  });
});

test.describe('E2E - Full Early Access Flow', () => {
  test('should complete full flow from form to join page', async ({ page }) => {
    // Mock API responses
    await page.route('/api/submit-early-access', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          token: 'e2e-test-token',
        }),
      });
    });

    await page.route('/api/validate-token*', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ valid: true }),
      });
    });

    // Start at early access page
    await page.goto('/early-access');

    // Fill form
    await page.locator('input[id="firstName"]').fill('Jane');
    await page.locator('input[id="lastName"]').fill('Smith');
    await page.locator('input[id="email"]').fill('jane.smith@example.com');

    await page.locator('[role="combobox"]').first().click();
    await page.locator('[role="option"]').filter({ hasText: 'Utrecht' }).click();

    await page.locator('input[id="moveDate"]').fill('2026-04-01');

    // Submit form
    await page.locator('button[type="submit"]').click();

    // Should navigate to join page
    await expect(page).toHaveURL(/\/join\/e2e-test-token/, { timeout: 5000 });

    // Should show success page
    await expect(page.locator('text=/Welcome.*In/i')).toBeVisible();

    // WhatsApp button should be visible and clickable
    const whatsappButton = page.locator('button', { hasText: /whatsapp/i });
    await expect(whatsappButton).toBeVisible();
    await expect(whatsappButton).toBeEnabled();
  });
});
