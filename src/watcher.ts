import fs from "fs";
import path from "path";
import type { Event } from "@parcel/watcher";
import { subscribe } from "@parcel/watcher";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../convexApi.ts";
import { type GenericId } from "convex/values";

type FrontMatterData = Record<string, string>;

const CONVEX_URL =
  process.env.CONVEX_ENV === "PROD"
    ? process.env.CONVEX_URL_PROD!
    : process.env.CONVEX_URL_DEV!;
const WATCH_DIR = process.env.CONVEX_ENV === "PROD" ? "./docs" : "./docs-dev";
const admintoolToken = process.env.BTREE_ADMINTOOL_TOKEN || undefined;
const convex = new ConvexHttpClient(CONVEX_URL);
let isProcessing = false;

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
    if (error) {
      console.error("Watcher error:", error);
      return;
    }

    if (isProcessing) {
      // skip events while an operation is being processed to avoid concurrent operations
      console.log(" --> Skipping event (operation in progress)");
      return;
    }

    console.log("\n-------------------------");

    if (
      events.length === 2 &&
      events.some((e) => e.type === "delete") &&
      events.some((e) => e.type === "create")
    ) {
      // if 'delete' and 'create' happens in the same batch, consider it as 'rename'
      onTopicRenamed(events);
      return;
    } else if (events.length !== 1) {
      console.error(`UNKNOWN Batch of ${events.length} events detected.`);
      for (const event of events) {
        console.error(`- ${event.type}: ${event.path}`);
      }
      return;
    }

    // for all single event batches
    const event = events[0];
    const pathType = getPathType(event.path);

    if (pathType === "topic") {
      if (event.type === "create") {
        onTopicCreated(event.path);
      }
      // else if (event.type === "delete") deleteCourse(event.path);
      // else console.log(`Unhandled event type for course: ${event.type}`);
    }

    // for (const event of events) {
    //   const relativePath = path.relative(WATCH_DIR, event.path);
    //   const timestamp = new Date().toLocaleTimeString();
    //   console.log(
    //     "\n-------------------------" + timestamp + "-------------------------"
    //   );
    //   console.log(`File change detected: ${relativePath}`);
    //   console.log(`Event type: ${event.type}`);

    //   if (!relativePath.endsWith(".md")) continue;
    //   if (event.type === "delete") continue;

    //   setTimeout(() => {
    //     fs.readFile(
    //       event.path,
    //       "utf8",
    //       (err: NodeJS.ErrnoException | null, data: string) => {
    //         if (err) {
    //           console.error("Read error:", err.message);
    //           return;
    //         }

    //         try {
    //           const { id, content, data: metadata } = parseMarkdown(data);
    //           console.log(`[UPDATED] ${relativePath} → Sending update…`);
    //           void notifyServer({ id, content, metadata });
    //         } catch (e) {
    //           if (e instanceof Error) {
    //             console.error(`Error parsing ${relativePath}:`, e.message);
    //           } else {
    //             console.error(`Unknown error parsing ${relativePath}:`, e);
    //           }
    //         }
    //       }
    //     );
    //   }, 150);
    // }
  },
  { ignore: ["**/.git/**", "**/node_modules/**"] }
)
  .then(() => console.log("Watcher ready."))
  .catch((err) => console.error("Failed to start watcher:", err));

// divides a topic folder name or a problem file names into components
function parseTopicFolderName(name: string): {
  topicOrder: number;
  topicSlug: string;
  topicId: string | null;
} {
  // folder name will be in the format of "01-introduction-to-algorithms-topicId"
  // the last token must be 32 characters long to be considered a topicId, otherwise, topicId is empty
  const parts = name.split("-");
  const lastPart = parts[parts.length - 1];
  let topicId: string | null = null;
  if (lastPart.length === 32) {
    topicId = lastPart as string;
    parts.pop();
  }
  const topicOrder = parseInt(parts[0], 10);
  const topicSlug = parts.slice(1).join("-");
  return { topicOrder, topicSlug, topicId };
}

function parseCourseFolderName(name: string): {
  courseSlug: string;
  courseId: string | null;
} {
  // folder name will be in the format of "01-introduction-to-algorithms-topicId"
  // the last token must be 32 characters long to be considered a topicId, otherwise, topicId is empty
  const parts = name.split("-");
  const lastPart = parts[parts.length - 1];
  let courseId: string | null = null;
  if (lastPart.length === 32) {
    courseId = lastPart as string;
    parts.pop();
  }
  const courseSlug = parts.join("-");
  return { courseSlug, courseId };
}

async function onTopicCreated(filePath: string) {
  console.log(`[CREATED] Topic directory: ${filePath}`);
  isProcessing = true;
  const relativePath = path.relative(WATCH_DIR, filePath);

  const { courseSlug, courseId } = parseCourseFolderName(
    relativePath.split(path.sep)[0]
  );

  const { topicOrder, topicSlug } = parseTopicFolderName(
    relativePath.split(path.sep)[1]
  );

  const topicId = await convex.mutation(api.topics.create, {
    admintoolToken,
    courseId: courseId! as GenericId<"courses">,
    name: topicSlug.replace(/-/g, " "),
    order: topicOrder,
  });

  if (topicId) {
    // rename the file by appending "-topicId" to the folder name
    const oldDirPath = filePath;
    const newDirName = `${
      topicOrder < 10 ? "0" : ""
    }${topicOrder}-${topicSlug}-${topicId}`;
    const newDirPath = path.join(
      WATCH_DIR,
      relativePath.split(path.sep)[0],
      newDirName
    );

    fs.rename(oldDirPath, newDirPath, (err) => {
      if (err) {
        console.error(`Failed to rename topic directory: ${err.message}`);
      } else {
        console.log(`Renamed topic directory to: ${newDirName}`);
      }
    });
  }

  console.log("→ Created topic in Convex:", topicId);

  // wait for 1 second to allow fs events to settle
  await new Promise((resolve) => setTimeout(resolve, 1000));

  isProcessing = false;
}

async function onTopicRenamed(events: Event[]) {
  const deleteEvent = events.find((e) => e.type === "delete")!;
  const createEvent = events.find((e) => e.type === "create")!;
  const oldPath = deleteEvent.path;
  const newPath = createEvent.path;
  const { courseId, courseSlug } = parseCourseFolderName(
    path.relative(WATCH_DIR, newPath).split(path.sep)[0]
  );
  const {
    topicOrder: olderTopicOrder,
    topicSlug: olderTopicSlug,
    topicId,
  } = parseTopicFolderName(
    path.relative(WATCH_DIR, oldPath).split(path.sep)[1]
  );
  const { topicOrder: newTopicOrder, topicSlug: newTopicSlug } =
    parseTopicFolderName(path.relative(WATCH_DIR, newPath).split(path.sep)[1]);
  console.log("rename event detected:", oldPath, "→", newPath);

  isProcessing = true;

  await convex.mutation(api.topics.update, {
    id: topicId! as GenericId<"topics">,
    name: newTopicSlug.replace(/-/g, " "),
    order: newTopicOrder,
    admintoolToken,
  });
  console.log(
    `→ Renamed topic in Convex: ${topicId} (${olderTopicSlug} → ${newTopicSlug})`
  );
  await new Promise((resolve) => setTimeout(resolve, 500));

  isProcessing = false;
  return;
}
