import { test, expect } from '@playwright/test';

const COOKIE_CONSENT_KEY = 'cookie-consent';
const GA_MEASUREMENT_ID = 'G-56C4LSSHES';

test.describe('Cookie Consent', () => {
  test.beforeEach(async ({ page, context }) => {
    // Clear localStorage and cookies before each test
    await context.clearCookies();
    await page.goto('/');
    // Wait for page to load
    await page.waitForLoadState('networkidle');
  });

  test('should display cookie consent banner on first visit', async ({ page }) => {
    // Banner should be visible
    const banner = page.getByTestId('cookie-consent-banner');
    await expect(banner).toBeVisible({ timeout: 2000 });
    
    // Should have Accept and Reject buttons
    await expect(page.getByTestId('cookie-consent-accept')).toBeVisible();
    await expect(page.getByTestId('cookie-consent-reject')).toBeVisible();
    
    // Should have privacy policy link
    const privacyLink = banner.locator('a[href="/privacy"]');
    await expect(privacyLink).toBeVisible();
    await expect(privacyLink).toHaveText('Learn more');
  });

  test('should accept cookies and load Google Analytics', async ({ page }) => {
    // Accept cookies
    await page.getByTestId('cookie-consent-accept').click();
    
    // Banner should disappear
    await expect(page.getByTestId('cookie-consent-banner')).not.toBeVisible();
    
    // Wait a bit for scripts to load
    await page.waitForTimeout(1000);
    
    // Check that Google Analytics script is loaded
    const gaScript = page.locator(`script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`);
    await expect(gaScript).toHaveCount(1);
    
    // Check that gtag function exists
    const gtagExists = await page.evaluate(() => {
      return typeof (window as any).gtag === 'function';
    });
    expect(gtagExists).toBe(true);
    
    // Check that dataLayer exists
    const dataLayerExists = await page.evaluate(() => {
      return Array.isArray((window as any).dataLayer);
    });
    expect(dataLayerExists).toBe(true);
    
    // Check localStorage
    const consentData = await page.evaluate((key) => {
      return localStorage.getItem(key);
    }, COOKIE_CONSENT_KEY);
    
    expect(consentData).toBeTruthy();
    const parsed = JSON.parse(consentData!);
    expect(parsed.status).toBe('accepted');
    expect(parsed.version).toBe('1.0');
  });

  test('should reject cookies and not load Google Analytics', async ({ page }) => {
    // Reject cookies
    await page.getByTestId('cookie-consent-reject').click();
    
    // Banner should disappear
    await expect(page.getByTestId('cookie-consent-banner')).not.toBeVisible();
    
    // Wait a bit to ensure scripts don't load
    await page.waitForTimeout(1000);
    
    // Check that Google Analytics script is NOT loaded
    const gaScript = page.locator(`script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`);
    await expect(gaScript).toHaveCount(0);
    // Check that Google Analytics config was NOT called
    // (gtag function exists for consent mode, but GA config shouldn't be set)
    const gaConfigCalled = await page.evaluate((id) => {
      const dataLayer = (window as any).dataLayer || [];
      return dataLayer.some((item: any[]) => 
        item && item[0] === 'config' && item[1] === id
      );
    }, GA_MEASUREMENT_ID);
    expect(gaConfigCalled).toBe(false);
    
    // Check localStorage
    const consentData = await page.evaluate((key) => {
      return localStorage.getItem(key);
    }, COOKIE_CONSENT_KEY);
    
    expect(consentData).toBeTruthy();
    const parsed = JSON.parse(consentData!);
    expect(parsed.status).toBe('rejected');
    expect(parsed.version).toBe('1.0');
  });

  test('should not show banner again after accepting', async ({ page }) => {
    // Accept cookies
    await page.getByTestId('cookie-consent-accept').click();
    await expect(page.getByTestId('cookie-consent-banner')).not.toBeVisible();
    
    // Reload page
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    // Banner should not appear again
    await expect(page.getByTestId('cookie-consent-banner')).not.toBeVisible({ timeout: 2000 });
    
    // Google Analytics should still be loaded
    const gaScript = page.locator(`script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`);
    await expect(gaScript).toHaveCount(1);
  });

  test('should not show banner again after rejecting', async ({ page }) => {
    // Reject cookies
    await page.getByTestId('cookie-consent-reject').click();
    await expect(page.getByTestId('cookie-consent-banner')).not.toBeVisible();
    
    // Reload page
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    // Banner should not appear again
    await expect(page.getByTestId('cookie-consent-banner')).not.toBeVisible({ timeout: 2000 });
    
    // Google Analytics should NOT be loaded
    const gaScript = page.locator(`script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`);
    await expect(gaScript).toHaveCount(0);
  });

  test('should navigate to privacy policy page', async ({ page }) => {
    const banner = page.getByTestId('cookie-consent-banner');
    await expect(banner).toBeVisible();
    
    // Click privacy link
    await banner.locator('a[href="/privacy"]').click();
    
    // Should navigate to privacy page
    await expect(page).toHaveURL(/.*\/privacy/);
    await expect(page.locator('h1')).toContainText('Privacy Policy');
  });

  test('should persist consent across page navigations', async ({ page }) => {
    // Accept cookies
    await page.getByTestId('cookie-consent-accept').click();
    await expect(page.getByTestId('cookie-consent-banner')).not.toBeVisible();
    
    // Navigate to about page
    await page.goto('/about');
    await page.waitForLoadState('networkidle');
    
    // Banner should not appear
    await expect(page.getByTestId('cookie-consent-banner')).not.toBeVisible({ timeout: 2000 });
    
    // Google Analytics should still be loaded
    const gaScript = page.locator(`script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`);
    await expect(gaScript).toHaveCount(1);
  });

  test('should handle expired consent and re-prompt', async ({ page, context }) => {
    // Set expired consent (older than 365 days)
    const expiredConsent = {
      status: 'accepted',
      timestamp: Date.now() - (366 * 24 * 60 * 60 * 1000), // 366 days ago
      version: '1.0',
    };
    
    await context.addCookies([]);
    await page.evaluate(({ key, data }) => {
      localStorage.setItem(key, JSON.stringify(data));
    }, { key: COOKIE_CONSENT_KEY, data: expiredConsent });
    
    // Reload page
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    // Banner should appear again
    await expect(page.getByTestId('cookie-consent-banner')).toBeVisible({ timeout: 2000 });
  });

  test('should handle version change and re-prompt', async ({ page }) => {
    // Set consent with old version
    const oldConsent = {
      status: 'accepted',
      timestamp: Date.now(),
      version: '0.9', // Old version
    };
    
    await page.evaluate(({ key, data }) => {
      localStorage.setItem(key, JSON.stringify(data));
    }, { key: COOKIE_CONSENT_KEY, data: oldConsent });
    
    // Reload page
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    // Banner should appear again due to version mismatch
    await expect(page.getByTestId('cookie-consent-banner')).toBeVisible({ timeout: 2000 });
  });

  test('should not load Google Analytics if consent was previously rejected', async ({ page }) => {
    // Set rejected consent
    const rejectedConsent = {
      status: 'rejected',
      timestamp: Date.now(),
      version: '1.0',
    };
    
    await page.evaluate(({ key, data }) => {
      localStorage.setItem(key, JSON.stringify(data));
    }, { key: COOKIE_CONSENT_KEY, data: rejectedConsent });
    
    // Reload page
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    // Banner should not appear (consent already given)
    await expect(page.getByTestId('cookie-consent-banner')).not.toBeVisible({ timeout: 2000 });
    
    // Google Analytics should NOT be loaded
    const gaScript = page.locator(`script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`);
    await expect(gaScript).toHaveCount(0);
  });
});

