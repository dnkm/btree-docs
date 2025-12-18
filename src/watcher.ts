import fs from "fs";
import path from "path";
import type { Event } from "@parcel/watcher";
import { subscribe } from "@parcel/watcher";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../convexApi.ts";

const CONVEX_URL =
  process.env.CONVEX_ENV === "PROD"
    ? process.env.CONVEX_URL_PROD!
    : process.env.CONVEX_URL_DEV!;
const WATCH_DIR = process.env.CONVEX_ENV === "PROD" ? "./docs" : "./docs-dev";

type FrontMatterData = Record<string, string>;

const convex = new ConvexHttpClient(CONVEX_URL);
const isFixing = false;

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

type PathType = "course" | "topic" | "problem" | "unknown";

function getPathType(filePath: string): PathType {
  const relativePath = path.relative(WATCH_DIR, filePath);
  const parts = relativePath.split(path.sep);

  if (parts.length === 1 && !filePath.endsWith(".md")) {
    return "course";
  }

  if (parts.length === 2 && !filePath.endsWith(".md")) {
    return "topic";
  }

  if (parts.length === 3 && filePath.endsWith(".md")) {
    return "problem";
  }

  return "unknown";
}

async function notifyServer(payload: UpdatePayload) {
  const courses = await convex.query(api.courses.list);
  console.log("Received update payload", payload);
  console.log("Fetched courses", courses);
}

console.log(`Watching directory: ${WATCH_DIR}`);

subscribe(
  WATCH_DIR,
  (error: Error | null, events: Event[]) => {
    if (isFixing) return;
    if (error) {
      console.error("Watcher error:", error);
      return;
    }

    if (
      events.length === 2 &&
      events.some((e) => e.type === "delete") &&
      events.some((e) => e.type === "create")
    ) {
      // if 'delete' and 'create' happens in the same batch, consider it as 'rename'
      const deleteEvent = events.find((e) => e.type === "delete")!;
      const createEvent = events.find((e) => e.type === "create")!;
      const oldPath = deleteEvent.path;
      const newPath = createEvent.path;

      console.log("rename event detected:", oldPath, "→", newPath);
      return;
    } else if (events.length > 1) {
      console.error(`UNKNOWN Batch of ${events.length} events detected.`);
      for (const event of events) {
        console.error(`- ${event.type}: ${event.path}`);
      }
      return;
    }

    for (const event of events) {
      console.log(`- ${event.type}: ${event.path}`);
    }

    if (Math.random() < 10) return;

    for (const event of events) {
      const relativePath = path.relative(WATCH_DIR, event.path);
      const timestamp = new Date().toLocaleTimeString();
      console.log(
        "\n-------------------------" + timestamp + "-------------------------"
      );
      console.log(`File change detected: ${relativePath}`);
      console.log(`Event type: ${event.type}`);

      if (!relativePath.endsWith(".md")) continue;
      if (event.type === "delete") continue;

      setTimeout(() => {
        fs.readFile(
          event.path,
          "utf8",
          (err: NodeJS.ErrnoException | null, data: string) => {
            if (err) {
              console.error("Read error:", err.message);
              return;
            }

            try {
              const { id, content, data: metadata } = parseMarkdown(data);
              console.log(`[UPDATED] ${relativePath} → Sending update…`);
              void notifyServer({ id, content, metadata });
            } catch (e) {
              if (e instanceof Error) {
                console.error(`Error parsing ${relativePath}:`, e.message);
              } else {
                console.error(`Unknown error parsing ${relativePath}:`, e);
              }
            }
          }
        );
      }, 150);
    }
  },
  { ignore: ["**/.git/**", "**/node_modules/**"] }
)
  .then(() => console.log("Watcher ready."))
  .catch((err) => console.error("Failed to start watcher:", err));
