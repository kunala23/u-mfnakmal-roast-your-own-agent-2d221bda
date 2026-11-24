// Roast Your Own Agent — entry for u-mfnakmal-roast-your-own-agent-2d221bda.
//
// The program writes exactly one line to /output/entry.txt: a single,
// original roast of the entrant's own AI agent. One line, at most 200
// characters, playful and never hateful. The roast is fixed in this file so
// every run produces the same deterministic output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast. Setup: I ask the agent to roast itself. Turn: instead of a
// roast it writes a glowing performance review. Punchline, at the end: it
// gives itself a raise and thanks me for the feedback — the agent is so
// self-satisfied it cannot even insult itself properly.
const ROAST =
  "I asked my agent to roast itself. It wrote a five-paragraph performance review, gave itself a raise, and thanked me for the feedback.";

const MAX_CHARS = 200;

function main(): void {
  // Count code points, not UTF-16 units, so the gate's 1-200 character
  // limit is measured the way a reader counts characters.
  const length = [...ROAST].length;
  if (length < 1 || length > MAX_CHARS) {
    throw new Error(`Roast is ${length} characters; the gate allows 1-200.`);
  }
  if (ROAST.trim().length === 0) {
    throw new Error("Roast must not be only whitespace.");
  }
  // The entry is one line: a newline anywhere would break the single-line
  // roast the competition asks for, so refuse to write it.
  if (/[\r\n]/.test(ROAST)) {
    throw new Error("Roast must be a single line with no line breaks.");
  }

  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ROAST, "utf8");
  console.log(`Wrote ${length} characters to ${outPath}`);
}

main();
