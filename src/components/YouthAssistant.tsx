import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { CalendarDays, MapPin, Mic, Ticket, Trash2, ArrowUp, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Conversation, ConversationContent, ConversationScrollButton } from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse, MessageAction, MessageActions } from "@/components/ai-elements/message";
import { PromptInput, PromptInputTextarea, PromptInputFooter, PromptInputSubmit } from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import logo from "@/assets/fou/future-of-youth-logo.png.asset.json";

const STORAGE_KEY = "future-of-youth-attendee-chat";
const api = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/youth-assistant`;
const headers = { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY };
const transport = new DefaultChatTransport({ api, headers });
const actions = [
  { label: "Schedule", icon: CalendarDays, prompt: "What is the event schedule for each Future of Youth stop?" },
  { label: "Venue Details", icon: MapPin, prompt: "What are the venue details and travel information for each stop?" },
  { label: "Speaker Lineup", icon: Mic, prompt: "Who is speaking at Future of Youth?" },
  { label: "Ticketing", icon: Ticket, prompt: "How can I get tickets, and what do they cost?" },
];
function restore(): UIMessage[] {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved.filter(m => typeof m.id === "string" && ["user", "assistant"].includes(m.role) && Array.isArray(m.parts) && m.parts.every((p: { type: string; text: unknown }) => p.type === "text" && typeof p.text === "string")) : [];
  } catch { return []; }
}

export function YouthAssistant() {
  const [initialMessages] = useState(restore);
  const [input, setInput] = useState("");
  const [ready, setReady] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const { messages, sendMessage, setMessages, status, error, stop, clearError } = useChat({
    id: "future-of-youth", transport, messages: initialMessages,
    onFinish: ({ messages: completed }) => {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(completed)); } catch { setSaveError(true); }
    },
  });
  const busy = status === "submitted" || status === "streaming";
  const focus = () => root.current?.querySelector("textarea")?.focus({ preventScroll: true });
  useEffect(() => { if (!busy) focus(); }, [busy]);
  useEffect(() => {
    const controller = new AbortController();
    fetch(api, { headers, signal: controller.signal }).then(r => r.ok ? r.json() : null).then(d => setReady(d?.ready === true)).catch(() => {});
    return () => controller.abort();
  }, []);
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.map(m => ({ ...m, parts: m.parts.filter(p => p.type === "text") })))); } catch { setSaveError(true); }
  }, [messages]);
  function ask(text: string) {
    if (busy || !text.trim()) return;
    clearError(); setInput("");
    void sendMessage({ text: text.trim() });
    focus();
  }
  return (
    <section id="event-assistant" className="scroll-mt-24 px-5 sm:px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center gap-3"><ShieldCheck className="h-6 w-6 text-foreground" /><h2 className="text-3xl font-black text-foreground">Your event assistant</h2></div>
        <div ref={root} className="grid overflow-hidden rounded-lg border border-border bg-card shadow-youth md:grid-cols-[240px_minmax(0,1fr)]">
          <aside aria-label="Assistant quick actions" className="flex flex-col gap-6 border-b border-border bg-muted p-5 md:border-b-0 md:border-r">
            <img src={logo.url} alt="Future of Youth" className="w-44 max-w-full" />
            <div className="grid grid-cols-2 gap-2 md:grid-cols-1">
              {actions.map(a => <Button key={a.label} variant="outline" disabled={busy} onClick={() => ask(a.prompt)} className="h-auto min-h-11 justify-start whitespace-normal text-left"><a.icon className="h-4 w-4 shrink-0" />{a.label}</Button>)}
            </div>
            <div className="text-sm text-muted-foreground md:mt-auto"><span className="flex items-center gap-2 font-semibold text-foreground"><ShieldCheck className="h-4 w-4" />{ready ? "Organiser information" : "Event details pending"}</span><a href="mailto:jat@jathub.com" className="mt-3 inline-flex items-center gap-2 underline underline-offset-4"><Mail className="h-4 w-4" />Contact the team</a></div>
          </aside>
          <div className="flex h-[580px] min-w-0 flex-col md:h-[600px]">
            <div className="flex shrink-0 items-center justify-between border-b border-border px-5 py-4"><div><h3 className="font-bold">Future of Youth assistant</h3><p className="text-xs text-muted-foreground">Attendee support</p></div><Button variant="ghost" size="icon" title="Clear conversation" aria-label="Clear conversation" disabled={busy || !messages.length} onClick={() => { if (window.confirm("Clear this conversation from your browser?")) { setMessages([]); clearError(); focus(); } }}><Trash2 /></Button></div>
            <Conversation className="min-h-0" aria-label="Event assistant conversation">
              <ConversationContent className="gap-6 p-5 sm:p-7">
                {!messages.length && <div className="py-8"><img src={logo.url} alt="" className="mb-6 w-36" /><h3 className="text-2xl font-bold">Hello, welcome to Future of Youth.</h3><p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">What would you like to know?</p></div>}
                {messages.map(m => <Message from={m.role} key={m.id}><span className="text-xs font-semibold text-muted-foreground">{m.role === "user" ? "You" : "Future of Youth"}</span><MessageContent className={m.role === "user" ? "group-[.is-user]:bg-primary group-[.is-user]:text-primary-foreground" : ""}>{m.parts.map((p, i) => p.type === "text" ? <MessageResponse key={i}>{p.text}</MessageResponse> : p.type === "reasoning" ? <details key={i} className="text-xs text-muted-foreground"><summary>Thinking</summary>{p.text}</details> : null)}</MessageContent>{m.role === "assistant" && <MessageActions><MessageAction tooltip="Copy answer" onClick={() => { void navigator.clipboard.writeText(m.parts.filter(p => p.type === "text").map(p => p.text).join("\n")); }}>Copy</MessageAction></MessageActions>}</Message>)}
                {status === "submitted" && <Shimmer className="text-sm">Checking event information…</Shimmer>}
              </ConversationContent>
              <ConversationScrollButton aria-label="Scroll to latest answer" />
            </Conversation>
            {error && <p role="alert" className="px-5 py-2 text-sm text-destructive">{error.message}</p>}
            {saveError && <p role="alert" className="px-5 text-xs text-destructive">This browser couldn’t save your conversation.</p>}
            <div className="shrink-0 border-t border-border p-4 sm:p-5">
              <PromptInput onSubmit={({ text }) => ask(text)} className="youth-composer"><PromptInputTextarea aria-label="Ask about Future of Youth" placeholder="Ask about the event…" value={input} onChange={e => setInput(e.target.value)} maxLength={3000} className="min-h-20 text-foreground" /><PromptInputFooter className="justify-end"><PromptInputSubmit status={status} onStop={stop} disabled={!busy && !input.trim()} title={busy ? "Stop response" : "Send question"} className="h-9 w-9 shrink-0">{!busy && <ArrowUp className="h-4 w-4" />}</PromptInputSubmit></PromptInputFooter></PromptInput>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}