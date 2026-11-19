/// <reference types="node" />
import { test } from "node:test";
import assert from "node:assert/strict";
import { youthFloorPlan } from "./youthFloorPlan";

test("marketplace contains 40 tables", () => assert.equal(youthFloorPlan.tables.length, 40));
test("each marketplace table is 2 metres long", () => assert.equal(youthFloorPlan.tableLengthMetres, 2));
test("marketplace tables remain unassigned", () => assert.ok(youthFloorPlan.tables.every(table => table.assignedTo === null)));
test("audience has 150 chairs", () => assert.equal(youthFloorPlan.chairCount, 150));
test("four courts follow the requested bottom-to-top activities", () => {
  assert.deepEqual([...youthFloorPlan.courts].reverse().map(court => court.id), ["seating", "pickleball", "yoga", "basketball"]);
});