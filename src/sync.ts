import fs from "fs";
import path from "path";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../convexApi.ts";

const CONVEX_URL =
  process.env.CONVEX_ENV === "pathsBeingProcessed"
    ? process.env.CONVEX_URL_PROD!
    : process.env.CONVEX_URL_DEV!;

console.log("url", CONVEX_URL, process.argv);
const convex = new ConvexHttpClient(CONVEX_URL);
const SYNC_DIR = process.env.CONVEX_ENV === "PROD" ? "./docs" : "./docs-dev";

// start
const tableName = process.argv[2];
if (!tableName) {
  console.error("Please provide a table name as the third argument.");
  process.exit(1);
}
switch (tableName) {
  case "courses":
    loadCourses();
    break;
  default:
    console.error(`Unknown table name: ${tableName}`);
    process.exit(1);
}

///////////////
async function loadCourses() {
  // load courses and create folders in /docs in the form of /docs/course-name-course_ID
  const courses = await convex.query(api.courses.list);
  const docsPath = path.join(process.cwd(), SYNC_DIR);
  for (const course of courses) {
    const courseFolderName = `${course.slug}-${course._id}`;
    const courseFolderPath = path.join(docsPath, courseFolderName);
    if (!fs.existsSync(courseFolderPath)) {
      fs.mkdirSync(courseFolderPath);
      console.log(`Created folder: ${courseFolderName}`);
    } else {
      console.log(`Folder already exists: ${courseFolderName}`);
    }
  }
}

// async function loadTopics({courseName}:{courseName:string}) {
//   // load topics for a given course and create markdown files in the respective course folder
//   const course = await convex.query(api.courses., { name: courseName });
// }
