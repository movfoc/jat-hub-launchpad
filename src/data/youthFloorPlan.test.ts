/// <reference types="node" />
import { test } from "node:test";
import assert from "node:assert/strict";
import { youthFloorPlan } from "./youthFloorPlan";

test("marketplace contains 44 tables as confirmed", () => assert.equal(youthFloorPlan.tables.length, 44));
test("photo booth sits bottom-centre beside left audience seating", () => {
  const booth = youthFloorPlan.photoBooth;
  assert.ok(booth.x > 85 + youthFloorPlan.courtDimensions.width);
  assert.ok(booth.x + booth.width < youthFloorPlan.basketball.x);
  assert.ok(booth.y >= 734 && booth.y + booth.height <= 734 + youthFloorPlan.courtDimensions.height);
});
test("registration table is near the bottom-right entrance without blocking it", () => {
  const table = youthFloorPlan.registration;
  assert.ok(table.x >= 900 && table.y >= 800);
  assert.ok(table.x + table.width < youthFloorPlan.entrance.x);
  assert.ok(table.y + table.height < youthFloorPlan.entrance.y);
  assert.equal(table.width, youthFloorPlan.tableDimensions.width);
  assert.equal(table.height, youthFloorPlan.tableDimensions.height);
});
test("S-shaped flow starts at bottom and ends at top", () => {
  const flow = youthFloorPlan.marketplaceFlow;
  assert.ok(flow.start.y > flow.end.y);
  assert.ok(flow.path.startsWith(`M ${flow.start.x} ${flow.start.y}`));
  assert.ok(flow.path.endsWith(`720 ${flow.end.y} H ${flow.end.x}`));
});
test("perimeter has six top tables and seven on each side", () => {
  assert.deepEqual(["top", "left", "right"].map(zone => youthFloorPlan.tables.filter(table => table.zone === zone).length), [6,7,7]);
});
test("centre contains three blocks with four tables per row", () => {
  assert.deepEqual([1,2,3,4,5,6].map(row => youthFloorPlan.tables.filter(table => table.zone === "centre" && table.row === row).length), [4,4,4,4,4,4]);
});
test("each central block has touching back-to-back rows", () => {
  [1,3,5].forEach(row => {
    const upper = youthFloorPlan.tables.filter(table => table.zone === "centre" && table.row === row);
    const lower = youthFloorPlan.tables.filter(table => table.zone === "centre" && table.row === row + 1);
    upper.forEach((table, index) => {
      assert.equal(table.y + table.height, lower[index]?.y);
      assert.equal(table.x, lower[index]?.x);
    });
  });
});
test("side tables rotate the same 4 by 6 foot footprint", () => {
  youthFloorPlan.tables.filter(table => table.zone === "left" || table.zone === "right").forEach(table => {
    assert.equal(table.width, youthFloorPlan.tableDimensions.height);
    assert.equal(table.height, youthFloorPlan.tableDimensions.width);
  });
});
test("table footprints do not overlap", () => {
  youthFloorPlan.tables.forEach((a, index) => youthFloorPlan.tables.slice(index + 1).forEach(b => {
    assert.ok(a.x + a.width <= b.x || b.x + b.width <= a.x || a.y + a.height <= b.y || b.y + b.height <= a.y, `Tables ${a.id} and ${b.id} overlap`);
  }));
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
  assert.deepEqual([...youthFloorPlan.courts].reverse().map(court => court.id), ["audience", "yoga", "pickleball", "badminton"]);
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
  assert.ok(youthFloorPlan.tables.every(table => table.y >= 152 && table.y + table.height <= (540 + youthFloorPlan.courtDimensions.height)));
});
test("audience seating is court 01 on the left", () => {
  const audience = youthFloorPlan.courts.find(court => court.id === "audience");
  assert.equal(audience?.y, 734);
});
test("basketball shooting is on the right aligned with court 01", () => {
  assert.equal(youthFloorPlan.basketball.y, 734);
  assert.equal(youthFloorPlan.basketball.x, 595);
});
test("main entrance is at the bottom-right beside basketball shooting", () => {
  assert.equal(youthFloorPlan.entrance.x, 974);
  assert.equal(youthFloorPlan.entrance.y, 944);
});
