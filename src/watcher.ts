/// <reference types="node" />

import fs from "fs";
import path from "path";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../convexApi.ts";

// const TARGET_URL_DEV =
//   "https://rugged-mongoose-414.convex.site/update-markdown-content";
// const TARGET_URL_PROD =
//   "https://glad-walrus-291.convex.site/update-markdown-content";
// const TAREGET_URL = TARGET_URL_DEV; // Change to DEV or PROD as needed

const WATCH_DIR = "./docs";

type FrontMatterData = Record<string, string>;

const convex = new ConvexHttpClient("https://glad-walrus-291.convex.cloud");

// Parse YAML-style front matter
function parseMarkdown(fileContent: string): {
  id: string;
  content: string;
  data: FrontMatterData;
} {
  const match = fileContent.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);

  if (!match) {
    throw new Error("YAML front matter not found.");
  }

  const frontMatter = match[1];
  const content = match[2].trim();

  // Parse front matter lines into an object
  const data: FrontMatterData = {};
  frontMatter.split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");
    if (!key || rest.length === 0) return;

    const value = rest.join(":").trim();
    if (!value) return;

    data[key.trim()] = value.replace(/^"(.*)"$/, "$1");
  });

  const id = data.doc_id;
  delete data.doc_id; // remove id from data object

  return { id, content, data };
}

type UpdatePayload = {
  id: string;
  content: string;
  metadata: FrontMatterData;
};

async function notifyServer(payload: UpdatePayload) {
  const courses = await convex.query(api.courses.list);
  console.log("Received update payload", payload);
  console.log("Fetched courses", courses);
}

fs.watch(
  WATCH_DIR,
  { recursive: true, encoding: "utf8" },
  (_event: fs.WatchEventType, filename: string | null) => {
    if (!filename || !filename.endsWith(".md")) return;

    const filePath = path.join(WATCH_DIR, filename);

    setTimeout(() => {
      fs.readFile(
        filePath,
        "utf8",
        (err: NodeJS.ErrnoException | null, data: string) => {
          if (err) return console.error("Read error:", err.message);

          try {
            const { id, content, data: metadata } = parseMarkdown(data);
            console.log(`[UPDATED] ${filename} → Sending update…`);
            void notifyServer({ id, content, metadata });
          } catch (e) {
            if (e instanceof Error) {
              console.error(`Error parsing ${filename}:`, e.message);
            } else {
              console.error(`Unknown error parsing ${filename}:`, e);
            }
          }
        }
      );
    }, 150);
  }
);

console.log(`Watching directory: ${WATCH_DIR}`);
