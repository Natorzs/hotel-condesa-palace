/*
 * ChatBot — Hotel Condesa Palace Acapulco
 * Design: Elegant floating chat bubble with n8n integration
 * Behavior: Send messages via POST to n8n tunnel, show typing indicator, display responses
 */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "bot" | "typing";
  text: string;
  timestamp: Date;
}

const N8N_ENDPOINT = "https://uninstilled-aaliyah-guilelessly.ngrok-free.dev/webhook/chat-hotel";

export default function ChatBot() {
  const [sessionId] = useState(
    () => `sess_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  );

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "¡Hola! 👋 Bienvenido al Hotel Condesa Palace. ¿En qué puedo ayudarte hoy?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    const typingMessage: Message = {
      id: "typing",
      type: "typing",
      text: "Escribiendo...",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, typingMessage]);

    try {
      const response = await fetch(N8N_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Bypass-Tunnel-Reminder": "true",
          "x-bot-token": "Cond3sa$Acapulco2026!HCP",
        body: JSON.stringify({
          message: inputValue,
          sessionId: sessionId,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setMessages((prev) => prev.filter((msg) => msg.id !== "typing"));

      const botMessage: Message = {
        id: Date.now().toString(),
        type: "bot",
        text: (
          data.message ||
          data.response ||
          "No entendí tu mensaje. ¿Podrías intentar de nuevo?"
        )
          .replace(/##COT##.*?##FIN##/gs, "")
          .trim(),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);

      setMessages((prev) => prev.filter((msg) => msg.id !== "typing"));

      const errorMessage: Message = {
        id: Date.now().toString(),
        type: "bot",
        text: "Disculpa, hubo un error al procesar tu mensaje. Por favor, intenta de nuevo o contacta directamente a +52 744 470 5130.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const stripMarkdown = (text: string): string => {
    // Primero protege las URLs para que el regex de markdown no las toque
    const urls: string[] = [];
    const protectedText = text.replace(/(https?:\/\/[^\s]+)/g, (match) => {
      urls.push(match);
      return "URLPLACEHOLDER" + (urls.length - 1) + "END";
    });

    // Limpia markdown
    const cleaned = protectedText
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/\*(.*?)\*/g, "$1")
      .replace(/__(.*?)__/g, "$1")
      .replace(/_(.*?)_/g, "$1");

    // Restaura las URLs originales
    return cleaned.replace(/URLPLACEHOLDER(\d+)END/g, (_, i) => urls[parseInt(i)]);
  };

  const renderMessageText = (text: string) => {
    const clean = stripMarkdown(text);
    const parts = clean.split(/(https?:\/\/[^\s]+)/g);
    return (
      <span>
        {parts.map((part, i) => {
          if (/^https?:\/\//.test(part)) {
            return (
              <a
                key={i}
                href={part}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "oklch(0.45 0.15 240)",
                  textDecoration: "underline",
                  fontWeight: "600",
                }}
              >
                Ver catálogo →
              </a>
            );
          }
          return <span key={i}>{part}</span>;
        })}
      </span>
    );
  };

  return (
    <>
      {/* Chat bubble button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        style={{
          background: "oklch(0.82 0.07 75)",
          color: "oklch(0.15 0.05 240)",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-2rem)] rounded-sm shadow-2xl flex flex-col"
            style={{
              background: "oklch(0.97 0.01 80)",
              height: "500px",
            }}
          >
            {/* Header */}
            <div
              className="p-4 rounded-t-sm text-white font-semibold flex items-center justify-between"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.22 0.06 240) 0%, oklch(0.30 0.07 240) 100%)",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              <span>Condesa Palace Chat</span>
              <span
                className="text-xs font-normal"
                style={{
                  color: "oklch(0.82 0.07 75)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Powered by n8n
              </span>
            </div>

            {/* Messages container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-sm ${
                      message.type === "user"
                        ? "text-white"
                        : message.type === "typing"
                        ? "text-white"
                        : "text-gray-800"
                    }`}
                    style={{
                      background:
                        message.type === "user"
                          ? "oklch(0.22 0.06 240)"
                          : message.type === "typing"
                          ? "oklch(0.72 0.09 75 / 0.2)"
                          : "oklch(0.88 0.025 80)",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.875rem",
                      lineHeight: "1.5",
                    }}
                  >
                    {message.type === "typing" ? (
                      <div className="flex gap-1">
                        <motion.span
                          animate={{ y: [0, -6, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity }}
                          style={{ color: "oklch(0.82 0.07 75)" }}
                        >
                          •
                        </motion.span>
                        <motion.span
                          animate={{ y: [0, -6, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.1,
                          }}
                          style={{ color: "oklch(0.82 0.07 75)" }}
                        >
                          •
                        </motion.span>
                        <motion.span
                          animate={{ y: [0, -6, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: 0.2,
                          }}
                          style={{ color: "oklch(0.82 0.07 75)" }}
                        >
                          •
                        </motion.span>
                      </div>
                    ) : (
                      renderMessageText(message.text)
                    )}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div
              className="p-4 border-t"
              style={{ borderColor: "oklch(0.88 0.025 80)" }}
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu mensaje..."
                  disabled={isLoading}
                  className="flex-1 px-3 py-2 rounded-sm text-sm outline-none transition-all"
                  style={{
                    background: "oklch(0.92 0.004 286.32)",
                    color: "oklch(0.22 0.06 240)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-sm transition-all disabled:opacity-50"
                  style={{
                    background: "oklch(0.82 0.07 75)",
                    color: "oklch(0.15 0.05 240)",
                  }}
                >
                  <Send size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
