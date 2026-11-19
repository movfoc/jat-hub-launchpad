/// <reference types="node" />
import { test } from "node:test";
import assert from "node:assert/strict";
import { youthFloorPlan } from "./youthFloorPlan";

test("marketplace contains 49 tables", () => assert.equal(youthFloorPlan.tables.length, 49));
test("each marketplace table is 2 metres long", () => assert.equal(youthFloorPlan.tableLengthMetres, 2));
test("marketplace tables remain unassigned", () => assert.ok(youthFloorPlan.tables.every(table => table.assignedTo === null)));
test("audience has 150 chairs", () => assert.equal(youthFloorPlan.chairCount, 150));
test("four courts follow the requested bottom-to-top activities", () => {
  assert.deepEqual([...youthFloorPlan.courts].reverse().map(court => court.id), ["badminton", "pickleball", "yoga", "basketball"]);
});
test("screen is mounted at the top centre of the hall", () => {
  assert.equal(youthFloorPlan.screen.x + youthFloorPlan.screen.width / 2, 570);
  assert.equal(youthFloorPlan.screen.y, 39);
});
test("two presentation tables sit in front of the screen", () => {
  assert.equal(youthFloorPlan.presentationTables.length, 2);
  assert.ok(youthFloorPlan.presentationTables.every(table => table.y > youthFloorPlan.screen.y + youthFloorPlan.screen.height));
});
test("marketplace spans only the upper three court footprints", () => {
  assert.equal(youthFloorPlan.marketplace.y, 152);
  assert.equal(youthFloorPlan.marketplace.y + youthFloorPlan.marketplace.height, 628);
  assert.ok(youthFloorPlan.tables.every(table => table.y >= 152 && table.y + 35 <= 628));
});
test("audience is on the right aligned with court 01", () => {
  assert.equal(youthFloorPlan.audience.y, 644);
  assert.equal(youthFloorPlan.audience.x, 595);
});
test("main entrance is at the bottom-right beside audience seating", () => {
  assert.equal(youthFloorPlan.entrance.x, 974);
  assert.equal(youthFloorPlan.entrance.y, 840);
});