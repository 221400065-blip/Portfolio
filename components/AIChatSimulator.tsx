"use client";

import { useState, useRef, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { soundFX } from "./soundFX";
import {
  Bot,
  Send,
  Sparkles,
  User,
  RotateCcw,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  time: string;
  action?: {
    label: string;
    href: string;
    isExternal?: boolean;
  };
}

const QUICK_PROMPTS = [
  "What real projects has Ayesha built?",
  "What is her core tech stack?",
  "Tell me about her experience at Codqor Technologies",
  "Can she build custom AI chatbots?",
  "How can I hire her on Fiverr?",
];

export default function AIChatSimulator() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init-1",
      sender: "bot",
      text: "Hello! I am AyeshaAI, an interactive assistant demonstrating Ayesha Tahir's AI chatbot capabilities. Ask me anything about her skills, real-world systems built at Codqor Technologies, or freelance availability!",
      time: "Just now",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateAnswer = (query: string): { text: string; action?: { label: string; href: string; isExternal?: boolean } } => {
    const q = query.toLowerCase();

    if (q.includes("project") || q.includes("work") || q.includes("built") || q.includes("portfolio")) {
      return {
        text: `Ayesha has engineered 5 verified real-world production systems at Codqor Technologies:
1. Ledger Management System (React, Next.js, Node.js)
2. HR Management System (Interactive employee & attendance tracking)
3. School Management System (Student grading & scheduling)
4. Full Stack E-commerce Platform (Secure checkout, catalog & cart)
5. Intelligent AI Customer Chatbot (Automated lead generation & query handling)

Plus multiple cutting-edge demonstration concept architectures!`,
        action: { label: "Explore Projects Section", href: "#projects" },
      };
    }

    if (q.includes("stack") || q.includes("skill") || q.includes("tech") || q.includes("technologies") || q.includes("python") || q.includes("react")) {
      return {
        text: `Ayesha's primary engineering stack includes:
• Frontend: Next.js 16, React.js 19, React Native, TypeScript, Tailwind CSS
• Backend & AI: Python, FastAPIs, Automated AI Chatbots, Database Integration
• Design & UX: Figma, Neumorphic & Glassmorphic UI/UX architecture, Responsive Design.`,
        action: { label: "View Technical Skills Matrix", href: "#skills" },
      };
    }

    if (q.includes("codqor") || q.includes("experience") || q.includes("job") || q.includes("company")) {
      return {
        text: `Ayesha has 1 Year of professional full-stack development experience at Codqor Technologies. She served as an Intermediate Full Stack Engineer, actively developing enterprise ledger systems, HR applications, and integrated AI customer tools.`,
        action: { label: "Review Experience Details", href: "#experience" },
      };
    }

    if (q.includes("fiverr") || q.includes("hire") || q.includes("rate") || q.includes("freelance") || q.includes("order")) {
      return {
        text: `Yes! Ayesha is available for freelance projects on Fiverr and direct enterprise contracts worldwide. She specializes in full-stack web applications and custom conversational AI solutions with quick turnaround.`,
        action: {
          label: "View Fiverr Profile",
          href: portfolioData.socialLinks.fiverr.url,
          isExternal: true,
        },
      };
    }

    if (q.includes("test") || q.includes("score") || q.includes("nsct") || q.includes("hec") || q.includes("degree") || q.includes("education")) {
      return {
        text: `Ayesha holds a verified 90% score in the HEC National Skill Competency Test (NSCT) and is pursuing her BS in Software Engineering at Gift University (Graduating 2026).`,
        action: { label: "Download Official CV (PDF)", href: "/Ayesha-Tahir-CV.pdf", isExternal: true },
      };
    }

    if (q.includes("hi") || q.includes("hello") || q.includes("hey") || q.includes("salam")) {
      return {
        text: `Assalam-o-Alaikum / Hello! Great to meet you. You can ask me about Ayesha's web development expertise, chatbot demos, or how to collaborate on your next project!`,
      };
    }

    return {
      text: `Thanks for asking! Ayesha specializes in building modern web applications with Next.js & React, coupled with intelligent conversational AI chatbots using Python. Feel free to explore her verified projects or reach out via the contact form!`,
      action: { label: "Send Direct Message", href: "#contact" },
    };
  };

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isTyping) return;

    soundFX.playClick();

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      soundFX.playPop();
      const botResponse = generateAnswer(text);
      const botMsg: Message = {
        id: `b-${Date.now()}`,
        sender: "bot",
        text: botResponse.text,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        action: botResponse.action,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleReset = () => {
    soundFX.playClick();
    setMessages([
      {
        id: "init-reset",
        sender: "bot",
        text: "Simulator reset. What would you like to know about Ayesha's technical background or chatbot architectures?",
        time: "Just now",
      },
    ]);
  };

  return (
    <div className="w-full rounded-3xl neu-flat p-5 sm:p-7 flex flex-col justify-between">
      
      {/* Terminal Header */}
      <div className="flex items-center justify-between pb-4 border-b border-black/5 dark:border-white/10 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl neu-convex flex items-center justify-center text-[#71B7D5]">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                AyeshaAI Interactive Terminal
              </h4>
              <span className="w-2 h-2 rounded-full bg-emerald-400 neu-led animate-pulse" />
            </div>
            <p className="text-xs text-slate-500 dark:text-[#A1CCDC]/70">
              Live AI Chatbot Simulator • Natural Language Query Engine
            </p>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="p-2 rounded-xl neu-btn text-xs text-slate-500 dark:text-[#A1CCDC] flex items-center gap-1"
          title="Reset conversation"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Reset</span>
        </button>
      </div>

      {/* Suggested Quick Prompt Chips */}
      <div className="mb-4">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[#71B7D5]" />
          Instant Prompt Chips:
        </span>
        <div className="flex flex-wrap gap-2">
          {QUICK_PROMPTS.map((prompt) => (
            <button
              key={prompt}
              onClick={() => handleSend(prompt)}
              className="text-xs px-3 py-1.5 rounded-xl neu-btn text-slate-700 dark:text-[#A1CCDC] hover:text-[#71B7D5] transition-all text-left"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Chamber (Recessed Neumorphic Well) */}
      <div className="neu-pressed rounded-2xl p-4 sm:p-5 h-[320px] overflow-y-auto space-y-3.5 mb-4">
        {messages.map((m) => {
          const isBot = m.sender === "bot";
          return (
            <div
              key={m.id}
              className={`flex items-start gap-2.5 ${isBot ? "justify-start" : "justify-end"}`}
            >
              {isBot && (
                <div className="w-7 h-7 rounded-xl neu-convex flex-shrink-0 flex items-center justify-center text-[#71B7D5] mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                  isBot
                    ? "neu-flat text-slate-800 dark:text-[#F0F7FA]"
                    : "bg-gradient-to-r from-[#096B90] to-[#71B7D5] text-white shadow-md font-medium"
                }`}
              >
                <div className="whitespace-pre-line">{m.text}</div>

                {/* Optional Action Pill inside bot message */}
                {m.action && (
                  <div className="mt-3 pt-2.5 border-t border-black/5 dark:border-white/10">
                    <a
                      href={m.action.href}
                      target={m.action.isExternal ? "_blank" : undefined}
                      rel={m.action.isExternal ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold text-[#71B7D5] bg-[#08171E]/60 hover:bg-[#08171E] border border-[#71B7D5]/30 transition-all hover:scale-105"
                    >
                      <span>{m.action.label}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}

                <span
                  className={`text-[10px] block mt-1.5 ${
                    isBot ? "text-slate-400 dark:text-[#A1CCDC]/60" : "text-white/70 text-right"
                  }`}
                >
                  {m.time}
                </span>
              </div>

              {!isBot && (
                <div className="w-7 h-7 rounded-xl neu-convex flex-shrink-0 flex items-center justify-center text-[#A1CCDC] mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-[#71B7D5] pt-1">
            <div className="w-7 h-7 rounded-xl neu-convex flex items-center justify-center">
              <Bot className="w-4 h-4 animate-spin" />
            </div>
            <div className="p-3 rounded-2xl neu-flat flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#71B7D5] animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-[#71B7D5] animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-[#71B7D5] animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Box with Tactile Submit */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="flex items-center gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask AyeshaAI anything (e.g., 'What stack does Ayesha use?')..."
          className="flex-1 px-4 py-3 rounded-2xl neu-input text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
        />

        <button
          type="submit"
          disabled={!input.trim() || isTyping}
          className="px-5 py-3 rounded-2xl neu-btn text-white bg-gradient-to-r from-[#096B90] to-[#71B7D5] disabled:opacity-50 flex items-center gap-1.5 text-xs font-bold transition-all"
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline">Send</span>
        </button>
      </form>
    </div>
  );
}
