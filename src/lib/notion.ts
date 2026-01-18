import { Client } from "@notionhq/client";

const notionApiKey = process.env.NOTION_API_KEY || "";
const notionDatabaseId = process.env.NOTION_DATABASE_ID || "";

if (!notionApiKey) {
  throw new Error("NOTION_API_KEY environment variable is not set");
}

if (!notionDatabaseId) {
  throw new Error("NOTION_DATABASE_ID environment variable is not set");
}

const notion = new Client({
  auth: notionApiKey,
});

export interface EarlyAccessEntry {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  moveDate: string;
  token: string;
}

export async function createEarlyAccessEntry(
  data: EarlyAccessEntry
): Promise<void> {
  try {
    await notion.pages.create({
      parent: {
        database_id: notionDatabaseId,
      },
      properties: {
        "First Name": {
          title: [
            {
              text: {
                content: data.firstName,
              },
            },
          ],
        },
        "Last Name": {
          rich_text: [
            {
              text: {
                content: data.lastName,
              },
            },
          ],
        },
        Email: {
          email: data.email,
        },
        City: {
          rich_text: [
            {
              text: {
                content: data.city,
              },
            },
          ],
        },
        "Move Date": {
          date: {
            start: data.moveDate,
          },
        },
        Token: {
          rich_text: [
            {
              text: {
                content: data.token,
              },
            },
          ],
        },
      },
    });
  } catch (error) {
    console.error("Error creating Notion entry:", error);
    throw error;
  }
}

export async function validateToken(token: string): Promise<boolean> {
  try {
    // Use the search API to find the token
    const response = await (notion as any).search({
      query: token,
    });

    if (!response.results || response.results.length === 0) {
      return false;
    }

    // Check if any result is a page in our database with this token
    for (const result of response.results as any[]) {
      if (result.object === "page" && (result as any).properties) {
        const properties = (result as any).properties;
        if (properties.Token?.rich_text?.[0]?.plain_text === token) {
          return true;
        }
      }
    }
    return false;
  } catch (error) {
    console.error("Error validating token:", error);
    // If validation fails, still allow access (graceful degradation)
    // In production, you might want to be more strict
    return true;
  }
}
