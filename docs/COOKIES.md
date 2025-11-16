# Cookie Consent & Google Consent Mode Implementation

This document describes how cookie consent and Google Consent Mode v2 are implemented on newcohorts.com.

## Overview

We use **Google Consent Mode v2** to manage cookie consent in compliance with GDPR and EU privacy regulations. Consent Mode allows us to control data collection based on user consent while preserving measurement capabilities.

## What is Google Consent Mode?

Google Consent Mode is a framework that lets you communicate user consent choices to Google services. When consent is denied, Google tags adjust their behavior accordingly, using modeling to preserve measurement accuracy without using cookies.

**Key Benefits:**
- GDPR/ePrivacy Directive compliant
- Preserves measurement data even when consent is denied
- Better privacy controls for EU users
- Works with Google Analytics and future Google Ads integration

**Reference:** [Google Consent Mode Documentation](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced)

## Implementation Architecture

### 1. Default Consent State (layout.tsx)

The default consent state is set **before any Google tags load** in `src/app/layout.tsx`:

```typescript
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('consent', 'default', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'denied',
        'wait_for_update': 500
      });
    `,
  }}
/>
```

**Why this matters:**
- Runs synchronously in `<head>` before React loads
- Sets all consent parameters to `'denied'` by default
- `wait_for_update: 500` gives 500ms for consent updates before tags fire
- Ensures no Google tags collect data without explicit consent

### 2. Cookie Consent Component (CookieConsent.tsx)

The `CookieConsent` component manages user consent interactions:

#### Consent Mode Initialization

```typescript
const initializeConsentMode = () => {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  
  window.gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'wait_for_update': 500
  });
};
```

#### Consent State Updates

When a user accepts or rejects cookies, we update the consent state:

```typescript
const updateConsentState = (status: 'granted' | 'denied') => {
  if (!window.gtag) {
    initializeConsentMode();
  }
  
  if (window.gtag) {
    window.gtag('consent', 'update', {
      'ad_storage': status,
      'ad_user_data': status,
      'ad_personalization': status,
      'analytics_storage': status
    });
  }
};
```

## Consent Parameters

We manage four consent parameters:

| Parameter | Description | Current Usage |
|-----------|-------------|---------------|
| `ad_storage` | Controls advertising cookies | Set to match analytics consent |
| `ad_user_data` | Controls sending user data to Google for advertising | Set to match analytics consent |
| `ad_personalization` | Controls ad personalization | Set to match analytics consent |
| `analytics_storage` | Controls analytics cookies (Google Analytics) | **Primary use case** |

**Note:** Currently we only use Google Analytics, but we set all parameters for future compatibility with Google Ads.

## User Flow

### First Visit (No Consent Given)

1. **Page loads** → Default consent state set to `'denied'` (in layout script)
2. **Component mounts** → Checks localStorage for existing consent
3. **No consent found** → Shows consent banner after 500ms delay
4. **User sees banner** → Can Accept or Reject cookies

### User Accepts Cookies

1. **User clicks "Accept"** → `handleAccept()` called
2. **Consent stored** → Saved to localStorage with timestamp and version
3. **Consent updated** → `gtag('consent', 'update', { ... 'granted' })`
4. **Google Analytics loads** → Scripts injected, tracking begins
5. **Banner disappears** → User can continue browsing

### User Rejects Cookies

1. **User clicks "Reject"** → `handleReject()` called
2. **Consent stored** → Saved to localStorage as `'rejected'`
3. **Consent updated** → `gtag('consent', 'update', { ... 'denied' })`
4. **No Google Analytics** → Scripts not loaded, no tracking
5. **Banner disappears** → User can continue browsing

### Subsequent Visits

1. **Page loads** → Default consent state set to `'denied'`
2. **Component mounts** → Checks localStorage
3. **Consent found** → Updates consent state based on stored preference
4. **No banner shown** → User's previous choice is respected

### Consent Expiry

- Consent expires after **365 days**
- Consent version changes trigger re-prompt
- Users can clear localStorage to reset consent

## Technical Details

### Files Involved

- `src/app/layout.tsx` - Default consent state initialization
- `src/components/CookieConsent.tsx` - Consent UI and state management
- `src/lib/useCookieConsent.ts` - Hook for checking consent status elsewhere

### Storage

Consent preferences are stored in `localStorage` with the key `cookie-consent`:

```typescript
{
  status: "accepted" | "rejected",
  timestamp: number,
  version: "1.0"
}
```

### Google Analytics ID

- **Measurement ID:** `G-56C4LSSHES`
- Loaded conditionally only after user accepts consent
- Configured with IP anonymization enabled

## Privacy Policy

Our privacy policy explains cookie usage in detail:
- **Location:** `/privacy`
- **Covers:** Cookie types, purposes, user rights, GDPR compliance

## Testing

Playwright tests verify the consent flow:
- Banner display on first visit
- Accept/reject functionality
- Google Analytics loading behavior
- Consent persistence across page loads
- Consent expiry handling

**Run tests:**
```bash
npm test
```

## Compliance

This implementation complies with:
- **GDPR** (General Data Protection Regulation)
- **ePrivacy Directive** (EU Cookie Law)
- **Google Consent Mode v2** requirements

### Key Compliance Features

✅ **Unambiguous consent** - Clear Accept/Reject buttons  
✅ **Informed consent** - Clear explanation of cookie usage  
✅ **Easy withdrawal** - Users can clear localStorage to reset  
✅ **No pre-ticked boxes** - Users must actively choose  
✅ **Consent before tracking** - No cookies set before consent  
✅ **Consent documentation** - Stored with timestamp and version  

## Future Enhancements

Potential improvements:
- [ ] Granular consent categories (analytics vs. advertising)
- [ ] Cookie settings page for changing preferences
- [ ] Consent logs for audit purposes
- [ ] Integration with Google Ads (when needed)
- [ ] Multi-language consent banners

## Troubleshooting

### Consent banner not showing
- Check browser localStorage is enabled
- Verify no existing consent stored
- Check browser console for errors

### Google Analytics not loading
- Verify user accepted consent
- Check network tab for script loading
- Ensure consent state was updated correctly

### Consent state not persisting
- Check localStorage is not being cleared
- Verify consent version hasn't changed
- Check consent expiry (365 days)

## References

- [Google Consent Mode Documentation](https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced)
- [GDPR Cookie Consent Requirements](https://gdpr.eu/cookies/)
- [ePrivacy Directive](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32002L0058)

