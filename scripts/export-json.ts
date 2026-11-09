/* Exports lexicon.ts and glosses.ts to plain JSON (data/lexicon.json, data/glosses.json).
   Run from the repository root:  npx tsx scripts/export-json.ts  (or: node --experimental-strip-types scripts/export-json.ts)
   One record per line so diffs between versions stay readable. */
import { mkdirSync, writeFileSync } from "node:fs";
import { LEXICON_VERSION, LEXICON_ID_HASH, LEVEL_ORDER, lexiconIds, getLexEntry } from "../lexicon.ts";
import { glossCount, getGloss, hasGloss } from "../glosses.ts";

const entries = lexiconIds.map((id) => {
  const entry = getLexEntry(id);
  if (!entry) throw new Error(`lexicon entry missing for id "${id}"`);
  return entry;
});

const glosses = lexiconIds.filter(hasGloss).map((id) => getGloss(id)!);
if (glosses.length !== glossCount) {
  throw new Error(`gloss count mismatch: ${glosses.length} reachable from lexicon ids, module reports ${glossCount}`);
}

function records<T>(rows: readonly T[]): string {
  return `[\n${rows.map((row) => `  ${JSON.stringify(row)}`).join(",\n")}\n]`;
}

mkdirSync("data", { recursive: true });

writeFileSync(
  "data/lexicon.json",
  `{\n  "version": ${JSON.stringify(LEXICON_VERSION)},\n  "idHash": ${JSON.stringify(LEXICON_ID_HASH)},\n  "license": "CC-BY-SA-4.0",\n  "levels": ${JSON.stringify(LEVEL_ORDER)},\n  "count": ${entries.length},\n  "entries": ${records(entries).replace(/\n/g, "\n  ")}\n}\n`,
);

writeFileSync(
  "data/glosses.json",
  `{\n  "version": ${JSON.stringify(LEXICON_VERSION)},\n  "license": "CC-BY-SA-4.0",\n  "count": ${glosses.length},\n  "glosses": ${records(glosses).replace(/\n/g, "\n  ")}\n}\n`,
);

console.log(`lexicon: ${entries.length} entries, glosses: ${glosses.length}`);
