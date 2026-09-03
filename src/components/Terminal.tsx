"use client";

import { useState } from "react";
import { portfolioContent } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export function Terminal() {
  const { language } = useLanguage();
  const t = portfolioContent[language];

  const [history, setHistory] = useState<Array<{ command: string; output: string[] }>>([
    {
      command: "cat current_interests.txt",
      output: t.terminal.commands["cat current_interests.txt"],
    },
  ]);
  const [inputVal, setInputVal] = useState("");

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    const availableCommands = t.terminal.commands as Record<string, string[]>;
    const output =
      availableCommands[trimmed] || [
        language === "pt"
          ? `bash: comando não encontrado: ${trimmed}. Digite 'help' para listar comandos disponíveis.`
          : `bash: command not found: ${trimmed}. Type 'help' to list available commands.`,
      ];

    setHistory((prev) => [...prev, { command: trimmed, output }]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    }
  };

  return (
    <div className="w-full bg-surface border border-outline p-5 interactive-border relative overflow-hidden font-mono text-xs md:text-sm">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-outline/50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <span className="text-on-surface-variant/60 text-[11px] ml-2 select-none">
            bash ~ (portfolio-env)
          </span>
        </div>
        <span className="text-[10px] text-primary/80 uppercase tracking-widest hidden sm:inline">
          {t.terminal.interactiveLabel}
        </span>
      </div>

      {/* Terminal History */}
      <div className="space-y-3 min-h-[160px] max-h-[260px] overflow-y-auto pr-1">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-primary font-semibold">
                {t.terminal.user}:{t.terminal.path}
              </span>
              <span className="text-on-background">{item.command}</span>
            </div>
            <div className="pl-4 text-on-surface-variant space-y-0.5 border-l border-primary/20">
              {item.output.map((line, lIdx) => (
                <div key={lIdx} className="leading-relaxed">
                  {line}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Active Command Prompt */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-primary font-semibold whitespace-nowrap">
            {t.terminal.user}:{t.terminal.path}
          </span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t.terminal.placeholder}
            aria-label={language === "pt" ? "Comando de terminal" : "Terminal command"}
            className="flex-1 bg-transparent border-none outline-none text-on-background text-xs md:text-sm placeholder:text-on-surface-variant/40"
          />
          <span className="terminal-cursor" />
        </div>
      </div>

      {/* Quick Action Commands (Chips) */}
      <div className="mt-4 pt-3 border-t border-outline/50 flex flex-wrap items-center gap-1.5 text-[11px]">
        <span className="text-on-surface-variant/60 mr-1 select-none">{t.terminal.shortcutsLabel}</span>
        {Object.keys(t.terminal.commands).map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => handleCommand(cmd)}
            className="px-2 py-0.5 border border-outline bg-surface-variant hover:border-primary hover:text-primary transition-colors text-on-surface-variant"
          >
            {cmd}
          </button>
        ))}
        <button
          type="button"
          onClick={() => handleCommand("clear")}
          className="px-2 py-0.5 border border-outline/40 hover:border-red-400 hover:text-red-400 text-on-surface-variant/60 transition-colors"
        >
          clear
        </button>
      </div>
    </div>
  );
}
