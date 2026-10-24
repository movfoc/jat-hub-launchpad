import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { CalendarDays, MapPin, Mic, Ticket, Trash2, ArrowUp, Mail, ShieldCheck, MessageCircle, X } from "lucide-react";
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
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const { messages, sendMessage, setMessages, status, error, stop, clearError } = useChat({
    id: "future-of-youth", transport, messages: initialMessages,
    onFinish: ({ messages: completed }) => {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(completed)); } catch { setSaveError(true); }
    },
  });
  const busy = status === "submitted" || status === "streaming";
  const focus = () => root.current?.querySelector("textarea")?.focus({ preventScroll: true });
  useEffect(() => { if (busy) focus(); }, [busy]);
  useEffect(() => {
    const controller = new AbortController();
    fetch(api, { headers, signal: controller.signal }).then(r => r.ok ? r.json() : null).then(d => setReady(d?.ready === true)).catch(() => {});
    return () => controller.abort();
  }, []);
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.map(m => ({ ...m, parts: m.parts.filter(p => p.type === "text") })))); } catch { setSaveError(true); }
  }, [messages]);
  useEffect(() => {
    if (!open) return;
    focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("youth-assistant-open", onOpen);
    return () => window.removeEventListener("youth-assistant-open", onOpen);
  }, []);
  function ask(text: string) {
    if (busy || !text.trim()) return;
    clearError(); setInput("");
    void sendMessage({ text: text.trim() });
    focus();
  }
  return (
    <div ref={root}>
      {/* Floating launcher */}
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-controls="youth-assistant-panel"
        aria-label={open ? "Close event assistant" : "Open event assistant"}
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-youth-gold to-youth-gold-light text-primary-foreground shadow-youth transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
        {!open && !ready && <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-destructive" aria-hidden="true" />}
      </button>

      {/* Widget panel */}
      {open && (
        <div
          id="youth-assistant-panel"
          role="dialog"
          aria-label="Future of Youth event assistant"
          style={{ width: "min(24rem, calc(100vw - 2rem))", height: "min(620px, calc(100dvh - 8rem))" }}
          className="fixed bottom-20 right-4 z-50 flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-youth sm:bottom-24 sm:right-6"
        >
          <div className="flex shrink-0 items-center gap-3 border-b border-border px-4 py-3">
            <img src={logo.url} alt="" className="h-9 w-9 shrink-0 rounded-full object-contain" />
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-sm font-bold text-foreground">Future of Youth assistant</h3>
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <ShieldCheck className={`h-3 w-3 ${ready ? "text-primary" : "text-muted-foreground"}`} />
                {ready ? "Organiser information" : "Event details pending"}
              </p>
            </div>
            <Button variant="ghost" size="icon" title="Clear conversation" aria-label="Clear conversation" disabled={busy || !messages.length} onClick={() => { if (window.confirm("Clear this conversation from your browser?")) { setMessages([]); clearError(); focus(); } }}><Trash2 /></Button>
            <Button variant="ghost" size="icon" title="Close" aria-label="Close assistant" onClick={() => setOpen(false)}><X /></Button>
          </div>
          <div aria-label="Assistant quick actions" className="flex shrink-0 gap-2 overflow-x-auto border-b border-border px-4 py-2.5">
            {actions.map(a => (
              <Button key={a.label} variant="outline" disabled={busy} onClick={() => ask(a.prompt)} className="h-8 shrink-0 gap-1.5 rounded-full px-3 text-xs whitespace-nowrap"><a.icon className="h-3.5 w-3.5 shrink-0" />{a.label}</Button>
            ))}
          </div>
          <Conversation className="min-h-0 flex-1" aria-label="Event assistant conversation">
            <ConversationContent className="gap-5 p-4">
              {!messages.length && <div className="py-6"><img src={logo.url} alt="" className="mb-5 w-28" /><h3 className="text-xl font-bold">Hello, welcome to Future of Youth.</h3><p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">What would you like to know?</p></div>}
              {messages.map(m => <Message from={m.role} key={m.id}><span className="text-xs font-semibold text-muted-foreground">{m.role === "user" ? "You" : "Future of Youth"}</span><MessageContent className={m.role === "user" ? "group-[.is-user]:bg-primary group-[.is-user]:text-primary-foreground" : ""}>{m.parts.map((p, i) => p.type === "text" ? <MessageResponse key={i}>{p.text}</MessageResponse> : p.type === "reasoning" ? <details key={i} className="text-xs text-muted-foreground"><summary>Thinking</summary>{p.text}</details> : null)}</MessageContent>{m.role === "assistant" && <MessageActions><MessageAction tooltip="Copy answer" onClick={() => { void navigator.clipboard.writeText(m.parts.filter(p => p.type === "text").map(p => p.text).join("\n")); }}>Copy</MessageAction></MessageActions>}</Message>)}
              {status === "submitted" && <Shimmer className="text-sm">Checking event information…</Shimmer>}
            </ConversationContent>
            <ConversationScrollButton aria-label="Scroll to latest answer" />
          </Conversation>
          {error && <p role="alert" className="shrink-0 px-4 py-2 text-sm text-destructive">{error.message}</p>}
          {saveError && <p role="alert" className="shrink-0 px-4 text-xs text-destructive">This browser couldn’t save your conversation.</p>}
          <div className="shrink-0 border-t border-border p-3">
            <PromptInput onSubmit={({ text }) => ask(text)} className="youth-composer"><PromptInputTextarea aria-label="Ask about Future of Youth" placeholder="Ask about the event…" value={input} onChange={e => setInput(e.target.value)} maxLength={3000} className="min-h-14 text-foreground" /><PromptInputFooter className="justify-between"><a href="mailto:jat@jathub.com" className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground">Contact the team</a><PromptInputSubmit status={status} onStop={stop} disabled={!busy && !input.trim()} title={busy ? "Stop response" : "Send question"} className="h-8 w-8 shrink-0">{!busy && <ArrowUp className="h-4 w-4" />}</PromptInputSubmit></PromptInputFooter></PromptInput>
          </div>
        </div>
      )}
    </div>
  );
}
