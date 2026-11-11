import { test, expect } from "bun:test";
import { homeStartGuildford } from "./homeStartGuildford";

test("Home-Start Guildford is available only in Surrey", () => {
  expect(homeStartGuildford.locations).toEqual(["Surrey"]);
  expect(homeStartGuildford.locations.includes("Reading")).toBe(false);
  expect(homeStartGuildford.locations.includes("Oxford")).toBe(false);
});