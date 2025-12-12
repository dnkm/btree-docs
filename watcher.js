const TARGET_URL_DEV =
  "https://rugged-mongoose-414.convex.site/update-markdown-content";
const TARGET_URL_PROD =
  "https://glad-walrus-291.convex.site/update-markdown-content";

import fs from "fs";
import path from "path";
import fetch from "node-fetch";

const WATCH_DIR = "./docs";

// Parse YAML-style front matter
function parseMarkdown(fileContent) {
  const match = fileContent.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);

  if (!match) {
    throw new Error("YAML front matter not found.");
  }

  const frontMatter = match[1];
  const content = match[2].trim();

  // Parse front matter lines into an object
  const data = {};
  frontMatter.split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");
    if (!key || rest.length === 0) return;

    data[key.trim()] = rest
      .join(":")
      .trim()
      .replace(/^"(.*)"$/, "$1"); // remove wrapping quotes
  });

  if (!data.doc_id) {
    throw new Error("doc_id not found in front matter.");
  }

  const id = data.doc_id;
  delete data.doc_id; // remove id from data object

  return { id, content, data };
}

async function notifyServer(payload) {
  try {
    const res = await fetch(TARGET_URL_PROD, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    console.log("Server responded:", await res.text());
  } catch (err) {
    console.error("Error sending update:", err.message);
  }
}

fs.watch(WATCH_DIR, { recursive: true }, async (event, filename) => {
  if (!filename.endsWith(".md")) return;

  const filePath = path.join(WATCH_DIR, filename);

  setTimeout(() => {
    fs.readFile(filePath, "utf8", async (err, data) => {
      if (err) return console.error("Read error:", err.message);

      try {
        const { id, content, data: metadata } = parseMarkdown(data);
        console.log(`[UPDATED] ${filename} → Sending update…`);
        await notifyServer({ id, content, metadata });
      } catch (e) {
        console.error(`Error parsing ${filename}:`, e.message);
      }
    });
  }, 150);
});

console.log(`Watching directory: ${WATCH_DIR}`);
