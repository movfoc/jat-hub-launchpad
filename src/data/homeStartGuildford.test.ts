/// <reference types="node" />
import { test } from "node:test";
import assert from "node:assert/strict";
import { homeStartGuildford } from "./homeStartGuildford";

test("Home-Start Guildford is available only in Surrey", () => {
  assert.deepEqual(homeStartGuildford.locations, ["Surrey"]);
  assert.equal(homeStartGuildford.locations.includes("Reading"), false);
  assert.equal(homeStartGuildford.locations.includes("Oxford"), false);
});