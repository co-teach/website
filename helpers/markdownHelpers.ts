import matter from "gray-matter";
import remark from "remark";
import remarkHtml from "remark-html";
import { ParsedMarkdown } from "../models/ParsedMarkdown";

// Adopted from https://github.com/vercel/next-learn-starter/blob/master/demo/lib/posts.js
export const parseMarkdownFileContents = async (
  fileContents: string
): Promise<ParsedMarkdown> => {
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
    title: matterResult.data["title"] || null,
    date: matterResult.data["date"] || null,
  };
};
