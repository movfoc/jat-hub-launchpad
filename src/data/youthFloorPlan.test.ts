/// <reference types="node" />
import { test } from "node:test";
import assert from "node:assert/strict";
import { youthFloorPlan } from "./youthFloorPlan";

test("marketplace contains 35 tables", () => assert.equal(youthFloorPlan.tables.length, 35));
test("rows have six tables except the final five-table row", () => {
  assert.deepEqual([1,2,3,4,5,6].map(row => youthFloorPlan.tables.filter(table => table.row === row).length), [6,6,6,6,6,5]);
});
test("rows 07–12 and 13–18 touch without a passage", () => {
  const upper = youthFloorPlan.tables.filter(table => table.row === 2);
  const lower = youthFloorPlan.tables.filter(table => table.row === 3);
  assert.deepEqual(upper.map(table => table.id), [7,8,9,10,11,12]);
  assert.deepEqual(lower.map(table => table.id), [13,14,15,16,17,18]);
  upper.forEach((table, index) => {
    assert.equal(table.y + youthFloorPlan.tableDimensions.height, lower[index]?.y);
    assert.equal(table.x, lower[index]?.x);
  });
});
test("rows 19–24 and 25–30 touch without a passage", () => {
  const upper = youthFloorPlan.tables.filter(table => table.row === 4);
  const lower = youthFloorPlan.tables.filter(table => table.row === 5);
  assert.deepEqual(upper.map(table => table.id), [19,20,21,22,23,24]);
  assert.deepEqual(lower.map(table => table.id), [25,26,27,28,29,30]);
  upper.forEach((table, index) => {
    assert.equal(table.y + youthFloorPlan.tableDimensions.height, lower[index]?.y);
    assert.equal(table.x, lower[index]?.x);
  });
});
test("each table measures 4 by 6 feet", () => {
  assert.equal(youthFloorPlan.tableDimensions.widthFeet, 4);
  assert.equal(youthFloorPlan.tableDimensions.lengthFeet, 6);
});
test("courts use the standard 13.4 by 6.1 metre proportions", () => {
  assert.equal(youthFloorPlan.courtDimensions.lengthMetres, 13.4);
  assert.equal(youthFloorPlan.courtDimensions.widthMetres, 6.1);
  assert.ok(Math.abs(youthFloorPlan.courtDimensions.width / youthFloorPlan.courtDimensions.height - 13.4 / 6.1) < 0.000001);
});
test("courts and tables use the same physical scale", () => {
  assert.ok(Math.abs(youthFloorPlan.tableDimensions.width / youthFloorPlan.courtDimensions.width - (6 * 0.3048) / 13.4) < 0.000001);
  assert.ok(Math.abs(youthFloorPlan.tableDimensions.height / youthFloorPlan.courtDimensions.height - (4 * 0.3048) / 6.1) < 0.000001);
});
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
  assert.equal(youthFloorPlan.marketplace.y + youthFloorPlan.marketplace.height, (540 + youthFloorPlan.courtDimensions.height));
  assert.ok(youthFloorPlan.tables.every(table => table.y >= 152 && table.y + youthFloorPlan.tableDimensions.height <= (540 + youthFloorPlan.courtDimensions.height)));
});
test("audience is on the right aligned with court 01", () => {
  assert.equal(youthFloorPlan.audience.y, 734);
  assert.equal(youthFloorPlan.audience.x, 595);
});
test("main entrance is at the bottom-right beside audience seating", () => {
  assert.equal(youthFloorPlan.entrance.x, 974);
  assert.equal(youthFloorPlan.entrance.y, 944);
});