import { assertEquals, assertStringIncludes } from "jsr:@std/assert@1";
import { hasEventKnowledge, groundingInstructions, MISSING_KNOWLEDGE } from "./grounding.ts";
import knowledge from "./event-knowledge.json" with { type: "json" };

Deno.test("no event answers before organiser JSON arrives", () => {
  const placeholder = { event: "Future of Youth", status: "awaiting_organiser_upload", facts: [] };
  assertEquals(hasEventKnowledge(placeholder), false);
});
Deno.test("organiser facts activate grounding and are passed without invented details", () => {
  const data = { facts: [{ venue: "Supplied venue" }] };
  assertEquals(hasEventKnowledge(data), true);
  assertStringIncludes(groundingInstructions(data), JSON.stringify(data));
  assertEquals(groundingInstructions(data).includes("£"), false);
});
Deno.test("grounding instructions enforce schedule and venue answer formats", () => {
  const data = { schedule_and_venues: [{ stop: 1, location: "Surrey", host: "University of Surrey", date_display: "12 December 2026", venue: "Surrey Sport Park" }] };
  const instructions = groundingInstructions(data);
  assertStringIncludes(instructions, "ANSWER FORMAT RULES");
  assertStringIncludes(instructions, "answer ONLY the date and time for each stop");
  assertStringIncludes(instructions, "answer ONLY the venue name and its location");
  assertStringIncludes(instructions, "omit the host");
});
Deno.test("structured organiser JSON without a facts array still counts as knowledge", () => {
  assertEquals(hasEventKnowledge({ organization_info: { name: "JAT Hub CIC" }, faqs: [] }), true);
  assertEquals(hasEventKnowledge({ event: "Future of Youth", status: "awaiting_organiser_upload", facts: [] }), false);
});
Deno.test("missing knowledge message is the explicit unavailable response", () => {
  assertStringIncludes(MISSING_KNOWLEDGE, "has not been added yet");
});
Deno.test("Breathe is not offered in the organiser support knowledge", () => {
  assertEquals(JSON.stringify(knowledge).toLowerCase().includes("breathe"), false);
});
Deno.test("Surrey is the first stop on 12 December 2026 at Surrey Sport Park", () => {
  assertEquals(knowledge.schedule_and_venues[0], { ...knowledge.schedule_and_venues[0], stop: 1, host: "University of Surrey", date: "2026-12-12", venue: "Surrey Sport Park", focus: "Sport, Youth Voice & Community Wellness" });
});
Deno.test("Reading is the second stop on 11 February 2027 at London Road Campus", () => {
  assertEquals(knowledge.schedule_and_venues[1], { ...knowledge.schedule_and_venues[1], stop: 2, host: "University of Reading", date: "2027-02-11", venue: "London Road Campus", focus: "Youth Mental Health & Community Wellness" });
});
Deno.test("Oxford is the third stop in May 2027 without an invented day", () => {
  assertEquals(knowledge.schedule_and_venues[2], { ...knowledge.schedule_and_venues[2], stop: 3, host: "Oxford North", date: "2027-05", venue: "Innovation District", focus: "Innovation, BioTech, HealthTech & Youth Empowerment" });
});
