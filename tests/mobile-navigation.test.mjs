import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("mobile navigation exposes and closes its menu accessibly", async () => {
  const source = await readFile(
    "components/landing/mobile-navigation.tsx",
    "utf8",
  );

  assert.match(source, /aria-expanded=\{isOpen\}/);
  assert.match(source, /event\.key === "Escape"/);
  assert.match(source, /setIsOpen\(false\)/);
});
