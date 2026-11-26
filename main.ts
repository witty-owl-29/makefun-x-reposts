// main.ts — entrypoint for the makefun-x-reposts-02 bounty.
//
// The entry is a list of the entrant's own X posts, kept in POSTS.json at
// the repository root. This program's only job is to copy that file to the
// output directory the grader reads.
//
// Inputs
//   MAKEFUN_BOT_DIR     directory holding POSTS.json (default: /bot)
//   MAKEFUN_OUTPUT_DIR  directory to write POSTS.json into (default: /output)
//
// It exits non-zero with a clear message on stderr when POSTS.json is
// missing or cannot be read, so a broken entry fails loudly instead of
// silently submitting an empty list.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POSTS.json");
const target = join(outputDir, "POSTS.json");

if (!existsSync(source)) {
  console.error(`error: POSTS.json not found at ${source}`);
  process.exit(1);
}

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, target);
} catch (err) {
  console.error(`error: could not copy POSTS.json to ${target}: ${err}`);
  process.exit(1);
}

console.log(`copied ${source} to ${target}`);
