"use client";

import { useEffect, useRef, useState } from "react";

/*
  UI-only for now. The thread lives in local state and nothing leaves the page;
  `handleSubmit` is the single hook point to POST the thread once the assistant
  endpoint exists.
*/

const WELCOME = {
  id: "welcome",
  role: "assistant",
  text: "Hi! Tell us what you are building and we will point you to the right AI service.",
};

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 3 10.5 13.5" />
      <path d="M21 3 14.4 21l-3.9-7.5L3 9.6 21 3Z" />
    </svg>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState([WELCOME]);
  const launcherRef = useRef(null);
  const inputRef = useRef(null);
  const threadRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    // Avoid summoning the on-screen keyboard over the panel on touch devices.
    if (window.matchMedia("(pointer: fine)").matches) {
      inputRef.current?.focus();
    }

    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      launcherRef.current?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const thread = threadRef.current;
    if (open && thread) thread.scrollTop = thread.scrollHeight;
  }, [messages, open]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;

    setMessages((current) => [
      ...current,
      { id: `local-${Date.now()}`, role: "user", text },
    ]);
    setDraft("");
    // Backend hook: send `messages` here and append the assistant reply.
  };

  const close = () => {
    setOpen(false);
    launcherRef.current?.focus();
  };

  return (
    <div className="chat-widget">
      <section
        id="chat-panel"
        className={`chat-panel${open ? " is-open" : ""}`}
        role="dialog"
        aria-label="Chat with AiLogiQs"
        aria-hidden={!open}
      >
        <header className="chat-head">
          <span className="chat-avatar" aria-hidden="true">
            <img
              src="/assets/img/custom/chatbot-icon.webp"
              alt=""
              width={192}
              height={192}
            />
          </span>
          <div className="chat-id">
            <p className="chat-name">AiLogiQs Assistant</p>
            <p className="chat-sub">Ask about our AI services</p>
          </div>
          <button
            type="button"
            className="chat-close"
            aria-label="Close chat"
            onClick={close}
          >
            <CloseIcon />
          </button>
        </header>

        <div
          ref={threadRef}
          className="chat-thread"
          role="log"
          aria-live="polite"
          aria-relevant="additions"
        >
          {messages.map((message) => (
            <div key={message.id} className={`chat-msg chat-msg-${message.role}`}>
              <p>{message.text}</p>
            </div>
          ))}
        </div>

        <form className="chat-form" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="chat-message">
            Type your message
          </label>
          <input
            ref={inputRef}
            id="chat-message"
            className="chat-input"
            type="text"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Ask about a service…"
            autoComplete="off"
            maxLength={1000}
            enterKeyHint="send"
          />
          <button
            type="submit"
            className="chat-send"
            aria-label="Send message"
            disabled={!draft.trim()}
          >
            <SendIcon />
          </button>
        </form>
      </section>

      <button
        ref={launcherRef}
        type="button"
        className="chat-launcher"
        aria-expanded={open}
        aria-controls="chat-panel"
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? (
          <CloseIcon />
        ) : (
          <img
            className="chat-launcher-icon"
            src="/assets/img/custom/chatbot-icon.webp"
            alt=""
            width={192}
            height={192}
          />
        )}
      </button>
    </div>
  );
}
