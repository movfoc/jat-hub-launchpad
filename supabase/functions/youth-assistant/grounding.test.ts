import { hasEventKnowledge, groundingInstructions } from "./grounding.ts";
import knowledge from "./event-knowledge.json";
import { test, expect } from "bun:test";

test("no event answers before organiser JSON arrives", () => {
  expect(hasEventKnowledge(knowledge)).toBe(false);
});
test("organiser facts activate grounding and are passed without invented details", () => {
  const data = { facts: [{ venue: "Supplied venue" }] };
  expect(hasEventKnowledge(data)).toBe(true);
  expect(groundingInstructions(data)).toContain(JSON.stringify(data));
  expect(groundingInstructions(data)).not.toContain("£");
});