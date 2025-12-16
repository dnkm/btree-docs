import fs from "fs";
import path from "path";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../convexApi.ts";

const CONVEX_URL =
  process.env.CONVEX_ENV === "PROD"
    ? process.env.CONVEX_URL_PROD!
    : process.env.CONVEX_URL_DEV!;

console.log(CONVEX_URL);

// const convex = new ConvexHttpClient(
//   process.env.CONVEX_ENV === "PROD"
//     ? process.env.CONVEX_URL_PROD!
//     : process.env.CONVEX_URL_DEV!
// );
