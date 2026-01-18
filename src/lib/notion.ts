import { Client } from "@notionhq/client";

function getNotionClient() {
  const notionApiKey = process.env.NOTION_API_KEY || "";
  const notionDatabaseId = process.env.NOTION_DATABASE_ID || "";

  if (!notionApiKey) {
    throw new Error("NOTION_API_KEY environment variable is not set");
  }

  if (!notionDatabaseId) {
    throw new Error("NOTION_DATABASE_ID environment variable is not set");
  }

  return {
    client: new Client({
      auth: notionApiKey,
      notionVersion: "2022-06-28",
    }),
    databaseId: notionDatabaseId,
  };
}

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
  const { client, databaseId } = getNotionClient();
  try {
    await client.pages.create({
      parent: {
        database_id: databaseId,
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
  const { client, databaseId } = getNotionClient();
  try {
    console.log("Validating token:", token);

    const response = await client.request({
      method: "POST",
      path: `databases/${databaseId}/query`,
      body: {
        filter: {
          property: "Token",
          rich_text: {
            equals: token,
          },
        },
      },
    });

    console.log("Validation query results:", response.results.length, "pages found");
    if (response.results.length > 0) {
      console.log("Found page:", response.results[0].id);
    }

    return response.results.length > 0;
  } catch (error) {
    console.error("Error validating token:", error);
    return false;
  }
}
