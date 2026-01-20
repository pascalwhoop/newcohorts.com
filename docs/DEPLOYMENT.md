# Deployment Guide

## Prerequisites

1. Cloudflare account
2. Wrangler CLI installed (`npm install -g wrangler`)
3. Authenticated with Cloudflare (`wrangler login`)

## Environment Variables Setup

### Required Variables

| Variable | Type | Description |
|----------|------|-------------|
| `NOTION_API_KEY` | Secret | Notion integration API key |
| `NOTION_DATABASE_ID` | Secret | Notion database ID for storing form submissions |
| `NEXT_PUBLIC_WHATSAPP_URL` | Public | WhatsApp group invite link |

### Setting Variables

**Via Cloudflare Dashboard:**

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages**
3. Select your project
4. Go to **Settings → Environment Variables**
5. Add each variable:
   - Set `NOTION_API_KEY` and `NOTION_DATABASE_ID` as **Encrypted**
   - Set `NEXT_PUBLIC_WHATSAPP_URL` as **Plain text** (note this needs to be set in "Build" section)
6. Click **Save**

**Important:** Wrangler CLI does not support setting environment variables for Pages projects. You must use the dashboard.

## Notion Setup

### 1. Create Integration

1. Go to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click **New integration**
3. Give it a name (e.g., "New Cohorts Early Access")
4. Copy the **Internal Integration Secret** - this is your `NOTION_API_KEY`

### 2. Create Database

Create a Notion database with these exact properties:

| Property Name | Type | Notes |
|---------------|------|-------|
| First Name | Title | Default property |
| Last Name | Text | |
| Email | Email | |
| City | Text | |
| Move Date | Date | |
| Token | Text | Used for join link validation |

### 3. Share Database

1. Open your database in Notion
2. Click **•••** in the top right
3. Click **Add connections**
4. Select your integration
5. Copy the database ID from the URL: `https://notion.so/{workspace}/{DATABASE_ID}?v=...`

## Deployment

```bash
npm run deploy
```

This will:
1. Build the Next.js app with OpenNext for Cloudflare
2. Deploy to Cloudflare Pages via Wrangler

## Troubleshooting

### Environment variables not working

- Redeploy after setting env vars in dashboard
- Check that variable names match exactly (case-sensitive)
- Ensure `NEXT_PUBLIC_*` vars are set as **Plain text**, not encrypted

### Token validation fails

- Verify database is shared with integration
- Check `NOTION_DATABASE_ID` is correct
- Ensure Token property exists and is type Text

### Build fails

- Check Node.js version (should be 18+)
- Verify all dependencies are installed: `npm install`
- Check wrangler.toml configuration is valid
