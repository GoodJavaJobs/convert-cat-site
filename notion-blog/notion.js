import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({
  auth: "ntn_g4061238261aaEjyodD8ymSNUy9KTfAy0yHU1HBSQ4Rdpv",
});
const databaseId = "2300f21193f5807bbc19d761ac07a404";
const n2m = new NotionToMarkdown({ notionClient: notion });

export async function getPublishedPosts() {
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });

  return response.results.map((page) => {
    const title = page.properties["Title"].title[0]?.plain_text || "No title";
    const slug = page.properties["Slug"].rich_text[0]?.plain_text || "";
    const metaTitle =
      page.properties["Meta Title"].rich_text[0]?.plain_text || "";
    const metaDescription =
      page.properties["Meta Description"].rich_text[0]?.plain_text || "";
    const date = page.properties["Date"].date?.start || null;
    const image = page.properties["Image"].files[0]?.file?.url || null;

    return {
      id: page.id,
      title,
      slug,
      metaTitle,
      metaDescription,
      date,
      image,
    };
  });
}

export const getPostBySlug = async (slug) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
  });

  const pageId = response.results[0].id;
  const image =
    response.results[0].properties["Image"].files[0]?.file?.url || null;
  const date = response.results[0].properties["Date"].date?.start || null;
  const metaTitle =
    response.results[0].properties["Meta Title"].rich_text[0]?.plain_text || "";
  const metaDescription =
    response.results[0].properties["Meta Description"].rich_text[0]
      ?.plain_text || "";

  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);

  return {
    id: pageId,
    title: response.results[0].properties["Title"].title[0]?.plain_text || "",
    content: mdString,
    image,
    date,
    metaTitle,
    metaDescription,
  };
};

export async function getPageContent(pageId) {
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);
  return mdString;
}
