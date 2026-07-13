"use client";

import { motion } from "framer-motion";
import { useState, FormEvent, useRef, useEffect } from "react";
import { FiGithub, FiLinkedin, FiTerminal, FiMail } from "react-icons/fi";
import { SiArtstation } from "react-icons/si";

const terminalLines = [
  { type: "system", text: "SEND AN MESSAGE TO ME." },
  { type: "system", text: "Establishing secure connection..." },
  { type: "success", text: "Connection established. Ready to transmit." },
  { type: "system", text: "─".repeat(50) },
];

export default function ContactSection() {
  const [history, setHistory] = useState<
    { type: string; text: string }[]
  >(terminalLines);
  const [currentInput, setCurrentInput] = useState("");
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("saimaheshnikhilduddu@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    window.location.href = "mailto:saimaheshnikhilduddu@gmail.com";
  };

  // Programmatically focus the next input field as the user progresses,
  // avoiding autofocus scroll triggers on initial portfolio mount.
  useEffect(() => {
    if (formStep > 0 && inputRef.current) {
      inputRef.current.focus();
    }
  }, [formStep]);

  const formFields = [
    { key: "name", prompt: "Enter your name" },
    { key: "email", prompt: "Enter your email" },
    { key: "subject", prompt: "Subject (e.g., Project Inquiry)" },
    { key: "message", prompt: "Your message" },
  ];

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const addLine = (type: string, text: string) => {
    setHistory((prev) => [...prev, { type, text }]);
  };

  const handleSubmit = async () => {
    setIsProcessing(true);
    addLine("system", "─".repeat(50));
    addLine("system", "Processing transmission...");
    addLine("system", `Name: ${formData.name}`);
    addLine("system", `Email: ${formData.email}`);
    addLine("system", `Subject: ${formData.subject}`);
    addLine("system", `Message: ${formData.message}`);
    addLine("system", "─".repeat(50));

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        addLine("success", "✓ TRANSMISSION SUCCESSFUL");
        addLine("success", "Message delivered to inbox.");
        addLine("system", "Expect a response within 24-48 hours.");
      } else {
        addLine("error", "✗ TRANSMISSION FAILED");
        addLine("error", "Error: Could not deliver. Try again.");
      }
    } catch {
      addLine("error", "✗ CONNECTION ERROR");
      addLine("error", "Unable to reach server.");
    }

    addLine("system", "─".repeat(50));
    addLine("system", "Form reset. Type 'new' to start over.");
    setIsProcessing(false);
    setFormStep(0);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleCommand = (input: string) => {
    const cmd = input.trim().toLowerCase();

    if (cmd === "new" && formStep === 0) {
      addLine("command", `$ ${input}`);
      addLine("prompt", `> ${formFields[0].prompt}:`);
      setFormStep(1);
      setCurrentInput("");
      return;
    }

    if (cmd === "clear") {
      addLine("command", `$ ${input}`);
      setHistory(terminalLines);
      setFormStep(0);
      setCurrentInput("");
      return;
    }

    if (cmd === "help") {
      addLine("command", `$ ${input}`);
      addLine("system", "Available commands:");
      addLine("system", "  new    - Start a new message");
      addLine("system", "  clear  - Clear terminal history");
      addLine("system", "  help   - Show this help message");
      addLine("system", "  social - Show social links");
      addLine("system", "  whoami - Show contact info");
      setCurrentInput("");
      return;
    }

    if (cmd === "social") {
      addLine("command", `$ ${input}`);
      addLine("system", "ArtStation: https://www.artstation.com/d_sai_mahesh_nikhil");
      addLine("system", "LinkedIn:   https://www.linkedin.com/in/duddu-sai-mahesh-nikhil/");
      addLine("system", "Behance:    behance.net/saimaheshnikhil");
      setCurrentInput("");
      return;
    }

    if (cmd === "whoami") {
      addLine("command", `$ ${input}`);
      addLine("system", "Name:     Sai Mahesh Nikhil");
      addLine("system", "Role:     3D Artist & Game Designer");
      addLine("system", "Location: India");
      addLine("system", "Status:   Available for work");
      setCurrentInput("");
      return;
    }

    if (formStep > 0 && formStep <= formFields.length) {
      const field = formFields[formStep - 1];
      addLine("input", `${input}`);

      setFormData((prev) => ({
        ...prev,
        [field.key]: input,
      }));

      if (formStep < formFields.length) {
        setFormStep(formStep + 1);
        addLine("prompt", `> ${formFields[formStep].prompt}:`);
      } else {
        addLine("system", "─".repeat(50));
        addLine("system", "Review your message:");
        addLine("system", `  Name:    ${formData.name}`);
        addLine("system", `  Email:   ${formData.email}`);
        addLine("system", `  Subject: ${formData.subject}`);
        addLine("system", `  Message: ${input}`);
        addLine("system", "─".repeat(50));
        addLine("prompt", "> Type 'send' to transmit or 'cancel' to abort:");
        setFormStep(formFields.length + 1);
      }
      setCurrentInput("");
      return;
    }

    if (formStep === formFields.length + 1) {
      addLine("command", `$ ${input}`);
      if (cmd === "send") {
        handleSubmit();
      } else if (cmd === "cancel") {
        addLine("system", "Transmission cancelled.");
        addLine("system", "Type 'new' to start over.");
        setFormStep(0);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        addLine("error", "Unknown command. Type 'send' or 'cancel'.");
      }
      setCurrentInput("");
      return;
    }

    addLine("command", `$ ${input}`);
    addLine("error", `Command not found: ${cmd}. Type 'help' for commands.`);
    setCurrentInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentInput.trim()) {
      handleCommand(currentInput);
    }
  };

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3 font-mono">
          <span className="text-accent">Build</span>
          <span className="text-white"> Hierarchy</span>
        </h2>
        <p className="text-zinc-500 font-mono text-sm ml-4">
          // send a message or start a conversation
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot red" />
              <div className="terminal-dot yellow" />
              <div className="terminal-dot green" />
              <span className="ml-2 text-xs text-zinc-500 font-mono">
                contact.info
              </span>
            </div>
            <div className="p-5 font-mono text-sm space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-accent">$</span>
                <span className="text-zinc-400">cat info.txt</span>
              </div>
              <div className="pl-4 space-y-3">
                <div>
                  <span className="text-accent-3">Name</span>
                  <span className="text-zinc-600">: "</span>
                  <span className="text-white">Duddu Sai Mahesh Nikhil</span>
                  <span className="text-zinc-600">"</span>
                </div>
                <div>
                  <span className="text-accent-3">Role</span>
                  <span className="text-zinc-600">: "</span>
                  <span className="text-white">3D Generalist | 3D Animator | Unreal Engine Specialist</span>
                  <span className="text-zinc-600">"</span>
                </div>
                <div>
                  <span className="text-accent-3">Email</span>
                  <span className="text-zinc-600">: "</span>
                  <span className="text-white">saimaheshnikhilduddu@gmail.com</span>
                  <span className="text-zinc-600">"</span>
                </div>
                <div>
                  <span className="text-accent-3">Location</span>
                  <span className="text-zinc-600">: "</span>
                  <span className="text-white">India</span>
                  <span className="text-zinc-600">"</span>
                </div>
                <div>
                  <span className="text-accent-3">Status</span>
                  <span className="text-zinc-600">: "</span>
                  <span className="text-accent">Available for hire</span>
                  <span className="text-zinc-600">"</span>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-accent">$</span>
                  <span className="text-zinc-400">ls ./socials/</span>
                </div>
                <div className="flex flex-wrap gap-2 pl-4" onClick={(e) => e.stopPropagation()}>
                  <a
                    href="mailto:saimaheshnikhilduddu@gmail.com"
                    onClick={handleEmailClick}
                    className="flex items-center gap-2 px-3 py-2 rounded border border-zinc-800 hover:border-accent/50 hover:bg-accent/5 transition-all text-zinc-400 hover:text-accent text-xs"
                  >
                    <FiMail /> {copied ? "Copied!" : "Mail"}
                  </a>
                  <a
                    href="https://www.linkedin.com/in/duddu-sai-mahesh-nikhil/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded border border-zinc-800 hover:border-accent/50 hover:bg-accent/5 transition-all text-zinc-400 hover:text-accent text-xs"
                  >
                    <FiLinkedin /> linkedin
                  </a>
                  <a
                    href="https://www.artstation.com/d_sai_mahesh_nikhil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded border border-zinc-800 hover:border-accent/50 hover:bg-accent/5 transition-all text-zinc-400 hover:text-accent text-xs"
                  >
                    <SiArtstation /> Art Station
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800">
                <div className="flex items-center gap-3">
                  <span className="text-accent">$</span>
                  <span className="text-zinc-400">echo</span>
                  <span className="text-accent-2">"$OPEN_TO_WORK"</span>
                </div>
                <div className="pl-4 text-accent font-medium">
                  ✓ Currently open to opportunities
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot red" />
              <div className="terminal-dot yellow" />
              <div className="terminal-dot green" />
              <span className="ml-2 text-xs text-zinc-500 font-mono">
                contact@mahesh:~
              </span>
              <FiTerminal className="ml-auto text-zinc-600" />
            </div>
            <div
              ref={terminalRef}
              className="p-5 h-[420px] overflow-y-auto font-mono text-sm cursor-text"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((line, i) => (
                <div key={i} className="mb-1">
                  {line.type === "system" && (
                    <span className="text-zinc-500">{line.text}</span>
                  )}
                  {line.type === "success" && (
                    <span className="text-accent">{line.text}</span>
                  )}
                  {line.type === "error" && (
                    <span className="text-red-400">{line.text}</span>
                  )}
                  {line.type === "command" && (
                    <span className="text-accent-3">{line.text}</span>
                  )}
                  {line.type === "input" && (
                    <span className="text-white">{line.text}</span>
                  )}
                  {line.type === "prompt" && (
                    <span className="text-accent-2">{line.text}</span>
                  )}
                </div>
              ))}

              {formStep === 0 && (
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-accent">guest@mahesh</span>
                  <span className="text-zinc-600">:</span>
                  <span className="text-accent-3">~</span>
                  <span className="text-zinc-600">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none text-white caret-accent font-mono"
                    placeholder="Type 'new' to start..."
                    disabled={isProcessing}
                  />
                </div>
              )}

              {formStep > 0 && formStep <= formFields.length && (
                <div className="mt-1 flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type={formFields[formStep - 1].key === "email" ? "email" : "text"}
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none text-white caret-accent font-mono"
                    disabled={isProcessing}
                  />
                </div>
              )}

              {formStep === formFields.length + 1 && (
                <div className="mt-1 flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none text-white caret-accent font-mono"
                    disabled={isProcessing}
                    placeholder="send or cancel..."
                  />
                </div>
              )}
            </div>

            <div className="border-t border-zinc-800 px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs font-mono text-zinc-600">
                <span>
                  <span className="text-accent">●</span> CONNECTED
                </span>
                <span>TYPE: <span className="text-zinc-400">HELP</span> FOR CMDS</span>
              </div>
              <div className="text-xs font-mono text-zinc-700">
                {isProcessing ? "PROCESSING..." : "READY"}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
