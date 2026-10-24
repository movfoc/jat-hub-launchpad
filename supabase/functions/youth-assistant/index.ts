import { convertToModelMessages, createUIMessageStream, createUIMessageStreamResponse, validateUIMessages } from "npm:ai@6";
import knowledge from "./event-knowledge.json" with { type: "json" };
import { hasEventKnowledge, groundingInstructions, MISSING_KNOWLEDGE } from "./grounding.ts";
import { createResponsesCall } from "../_shared/responses.ts";
import { withLovableAiGatewayRunIdHeader } from "../_shared/run-id.ts";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
};

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response(null, { headers: cors });
  if (request.method === "GET") return Response.json({ ready: hasEventKnowledge(knowledge) }, { headers: cors });
  if (request.method !== "POST") return Response.json({ error: "Method not allowed" }, { status: 405, headers: cors });
  try {
    const payload = await request.text();
    if (payload.length > 100000) return Response.json({ error: "This conversation is too long. Please clear the chat and start again." }, { status: 400, headers: cors });
    const body = JSON.parse(payload);
    const messages = await validateUIMessages({ messages: body.messages });
    if (!messages.length || messages.some(m => !["user", "assistant"].includes(m.role) || m.parts.some(p => !["text", "reasoning"].includes(p.type)))) {
      return Response.json({ error: "Please send a text question." }, { status: 400, headers: cors });
    }
    if (!hasEventKnowledge(knowledge)) {
      const stream = createUIMessageStream({ originalMessages: messages, execute: ({ writer }) => {
        writer.write({ type: "text-start", id: "event-answer" });
        writer.write({ type: "text-delta", id: "event-answer", delta: MISSING_KNOWLEDGE });
        writer.write({ type: "text-end", id: "event-answer" });
      }});
      return createUIMessageStreamResponse({ stream, headers: cors });
    }
    const key = Deno.env.get("LOVABLE_API_KEY");
    if (!key) return Response.json({ error: "The assistant’s AI service is not configured." }, { status: 401, headers: cors });
    const history = messages.map(m => ({ ...m, parts: m.parts.filter(p => p.type === "text") }));
    const call = createResponsesCall(request, { baseURL: "https://ai.gateway.lovable.dev/v1", apiKey: key, model: "openai/gpt-6-astra" }, await convertToModelMessages(history), groundingInstructions(knowledge));
    return await call.response(messages, cors);
  } catch (error) {
    if (request.signal.aborted) return new Response(null, { status: 499, headers: cors });
    return Response.json({ error: "The assistant couldn’t process that question. Please try a shorter text question." }, { status: 400, headers: cors });
  }
});