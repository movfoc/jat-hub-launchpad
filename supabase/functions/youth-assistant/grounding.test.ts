import { hasEventKnowledge, groundingInstructions } from "./grounding.ts";
import { test, expect } from "bun:test";
import knowledge from "./event-knowledge.json" with { type: "json" };

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

Deno.test("grounding instructions enforce schedule and venue answer formats", () => {
  const data = { schedule_and_venues: [{ stop: 1, location: "Surrey", host: "University of Surrey", date_display: "12 December 2026", venue: "Surrey Sport Park" }] };
  const instructions = groundingInstructions(data);
  expect(instructions).toContain("ANSWER FORMAT RULES");
  expect(instructions).toContain("answer ONLY the date and time for each stop");
  expect(instructions).toContain("answer ONLY the venue name and its location");
  expect(instructions).toContain("omit the host");
});
test("structured organiser JSON without a facts array still counts as knowledge", () => {
  expect(hasEventKnowledge({ organization_info: { name: "JAT Hub CIC" }, faqs: [] })).toBe(true);
  expect(hasEventKnowledge({ event: "Future of Youth", status: "awaiting_organiser_upload", facts: [] })).toBe(false);
});

test("Breathe is not offered in the organiser support knowledge", () => {
  expect(JSON.stringify(knowledge).toLowerCase()).not.toContain("breathe");
});
test("Surrey is the first stop on 12 December 2026 at Surrey Sport Park", () => {
  expect(knowledge.schedule_and_venues[0]).toMatchObject({ stop: 1, host: "University of Surrey", date: "2026-12-12", venue: "Surrey Sport Park", focus: "Sport, Youth Voice & Community Wellness" });
});
test("Reading is the second stop on 11 February 2027 at London Road Campus", () => {
  expect(knowledge.schedule_and_venues[1]).toMatchObject({ stop: 2, host: "University of Reading", date: "2027-02-11", venue: "London Road Campus", focus: "Youth Mental Health & Community Wellness" });
});
test("Oxford is the third stop in May 2027 without an invented day", () => {
  expect(knowledge.schedule_and_venues[2]).toMatchObject({ stop: 3, host: "Oxford North", date: "2027-05", venue: "Innovation District", focus: "Innovation, BioTech, HealthTech & Youth Empowerment" });
});