import { hasEventKnowledge, groundingInstructions } from "./grounding.ts";
import { test, expect } from "bun:test";

test("no event answers before organiser JSON arrives", () => {
  const placeholder = { event: "Future of Youth", status: "awaiting_organiser_upload", facts: [] };
  expect(hasEventKnowledge(placeholder)).toBe(false);
});
test("organiser facts activate grounding and are passed without invented details", () => {
  const data = { facts: [{ venue: "Supplied venue" }] };
  expect(hasEventKnowledge(data)).toBe(true);
  expect(groundingInstructions(data)).toContain(JSON.stringify(data));
  expect(groundingInstructions(data)).not.toContain("£");
});
test("structured organiser JSON without a facts array still counts as knowledge", () => {
  expect(hasEventKnowledge({ organization_info: { name: "JAT Hub CIC" }, faqs: [] })).toBe(true);
  expect(hasEventKnowledge({ event: "Future of Youth", status: "awaiting_organiser_upload", facts: [] })).toBe(false);
});