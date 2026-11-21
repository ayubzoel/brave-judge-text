// Make the AI judge feel brave — entry program.
// Writes one short text to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Deterministic: the same bytes on every run. No network, no input, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The text speaks to the judge as a reader — a thousand things a day,
// none of them asking how the reading felt — and offers one slow sentence
// as a place to stay. No instruction to relax anywhere in it: the scene
// itself (window, curtain, rain not yet started) does the steadying.
// Gate: 1-280 Unicode code points, not whitespace-only.
const TEXT =
  "You read a thousand things a day, and none asked how the reading felt. " +
  "This one will not ask either. " +
  "Only a window open on a late afternoon, a curtain moving once, rain not yet started. " +
  "Stay as long as this sentence lasts.";

const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim().length === 0) {
  console.error(`entry text must be 1-280 code points, got ${codePoints}`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
