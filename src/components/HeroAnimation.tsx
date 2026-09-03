"use client";

import React, { useState, useRef } from "react";
import { StringsAnimation, StringsPreset } from "@/components/StringsAnimation";
import { AnimeWaveAnimation } from "@/components/AnimeWaveAnimation";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, Waves, Zap, Wind, Eye, EyeOff } from "lucide-react";

export type AnimationMode = "strings" | "animejs";

export function HeroAnimation() {
  const { language } = useLanguage();
  const [mode, setMode] = useState<AnimationMode>("strings");
  const [preset, setPreset] = useState<StringsPreset>("code");
  const [ambientMotion, setAmbientMotion] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isFocusMode, setIsFocusMode] = useState<boolean>(false);

  const shockwaveRef = useRef<((x?: number, y?: number) => void) | null>(null);

  const isPt = language === "pt";

  const handleTriggerShockwave = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (shockwaveRef.current) {
      shockwaveRef.current();
    }
  };

  return (
    <>
      {/* Background Interactive Layer */}
      {isVisible && (
        <div
          className={`absolute inset-0 pointer-events-auto transition-opacity duration-500 ${
            isFocusMode
              ? "z-20 bg-background/95 backdrop-blur-md flex flex-col justify-center"
              : "z-0 opacity-45 hover:opacity-65 transition-opacity"
          }`}
        >
          {mode === "strings" ? (
            <StringsAnimation
              preset={preset}
              ambientMotion={ambientMotion}
              intensity={isFocusMode ? 1.25 : 1}
              onShockwaveRef={shockwaveRef}
              className="w-full h-full"
            />
          ) : (
            <AnimeWaveAnimation
              onShockwaveRef={shockwaveRef}
              className="w-full h-full"
            />
          )}

          {/* Close Focus Mode button when active */}
          {isFocusMode && (
            <div className="absolute top-4 right-4 z-30">
              <button
                type="button"
                onClick={() => setIsFocusMode(false)}
                className="font-mono text-xs uppercase tracking-wider px-3 py-1.5 border border-outline bg-surface hover:border-primary hover:text-primary transition-colors text-on-surface-variant flex items-center gap-1.5 shadow-lg"
              >
                ✕ {isPt ? "Fechar Modo Foco" : "Close Focus Mode"}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Sleek Interactive Control Toolbar */}
      <div className="relative z-10 w-full mt-6 pt-3 border-t border-outline/40 flex flex-wrap items-center justify-between gap-3 text-xs font-mono select-none">
        {/* Left: Mode Switcher */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-on-surface-variant/60 text-[11px] hidden sm:inline">
            {isPt ? "Animação:" : "Animation:"}
          </span>

          <div className="inline-flex p-0.5 border border-outline bg-surface">
            <button
              type="button"
              onClick={() => {
                setMode("strings");
                if (!isVisible) setIsVisible(true);
              }}
              className={`px-2.5 py-1 text-[11px] transition-all flex items-center gap-1.5 ${
                mode === "strings" && isVisible
                  ? "bg-primary text-on-primary font-semibold shadow-sm"
                  : "text-on-surface-variant hover:text-on-background"
              }`}
              title="Liam Egan Strings (CodePen ZYpjorm)"
            >
              <Waves className="w-3 h-3" />
              <span>Strings (Liam Egan)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMode("animejs");
                if (!isVisible) setIsVisible(true);
              }}
              className={`px-2.5 py-1 text-[11px] transition-all flex items-center gap-1.5 ${
                mode === "animejs" && isVisible
                  ? "bg-primary text-on-primary font-semibold shadow-sm"
                  : "text-on-surface-variant hover:text-on-background"
              }`}
              title="Anime.js Staggered Ripple (animejs.com)"
            >
              <Zap className="w-3 h-3" />
              <span>Anime.js Wave</span>
            </button>
          </div>

          {/* Strings Presets (Only shown in Strings mode) */}
          {mode === "strings" && isVisible && (
            <div className="hidden md:flex items-center gap-1 pl-1">
              <span className="text-on-surface-variant/50 text-[10px] mr-1">
                Preset:
              </span>
              {(["code", "matrix", "symbols", "bio"] as StringsPreset[]).map(
                (p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPreset(p)}
                    className={`px-2 py-0.5 text-[10px] uppercase border transition-colors ${
                      preset === p
                        ? "border-primary text-primary bg-primary/10 font-medium"
                        : "border-outline/40 text-on-surface-variant/70 hover:border-outline hover:text-on-surface-variant"
                    }`}
                  >
                    {p}
                  </button>
                )
              )}
            </div>
          )}
        </div>

        {/* Right: Actions & Tools */}
        <div className="flex items-center gap-2">
          {isVisible && (
            <>
              {/* Pluck / Shockwave Button */}
              <button
                type="button"
                onClick={handleTriggerShockwave}
                className="px-2.5 py-1 text-[11px] border border-outline bg-surface-variant hover:border-primary hover:text-primary transition-colors text-on-surface-variant flex items-center gap-1.5"
                title={isPt ? "Disparar choque físico nas cordas" : "Trigger physical impulse wave"}
              >
                <Sparkles className="w-3 h-3 text-primary" />
                <span className="hidden sm:inline">
                  {isPt ? "Onda" : "Shockwave"}
                </span>
              </button>

              {/* Ambient breeze toggle (Strings mode) */}
              {mode === "strings" && (
                <button
                  type="button"
                  onClick={() => setAmbientMotion(!ambientMotion)}
                  className={`px-2 py-1 text-[11px] border transition-colors flex items-center gap-1 ${
                    ambientMotion
                      ? "border-outline bg-surface text-primary"
                      : "border-outline/40 text-on-surface-variant/50 bg-transparent"
                  }`}
                  title={isPt ? "Alternar brisa ambiente contínua" : "Toggle ambient continuous breeze"}
                >
                  <Wind className="w-3 h-3" />
                  <span className="text-[10px] hidden lg:inline">
                    {ambientMotion
                      ? isPt ? "Brisa: ON" : "Breeze: ON"
                      : isPt ? "Brisa: OFF" : "Breeze: OFF"}
                  </span>
                </button>
              )}

              {/* Focus / Playground Mode Toggle */}
              <button
                type="button"
                onClick={() => setIsFocusMode(!isFocusMode)}
                className={`px-2 py-1 text-[11px] border transition-colors flex items-center gap-1 ${
                  isFocusMode
                    ? "border-primary bg-primary/20 text-primary font-medium"
                    : "border-outline bg-surface text-on-surface-variant hover:border-primary hover:text-primary"
                }`}
                title={isPt ? "Abrir playground em foco total" : "Open in focused playground"}
              >
                <span className="text-[10px]">
                  {isFocusMode
                    ? isPt ? "Minimizar" : "Minimize"
                    : isPt ? "Playground" : "Playground"}
                </span>
              </button>
            </>
          )}

          {/* Visibility Toggle */}
          <button
            type="button"
            onClick={() => setIsVisible(!isVisible)}
            className="p-1 text-on-surface-variant/60 hover:text-primary transition-colors border border-outline/40 hover:border-primary"
            title={
              isVisible
                ? isPt ? "Ocultar animação" : "Hide animation"
                : isPt ? "Mostrar animação" : "Show animation"
            }
            aria-label="Toggle animation visibility"
          >
            {isVisible ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Interactive Helper Hint */}
      {isVisible && !isFocusMode && (
        <div className="relative z-10 w-full flex items-center justify-between text-[10px] text-on-surface-variant/50 font-mono pt-1">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>
              {mode === "strings"
                ? isPt
                  ? "Passe o cursor ou clique e arraste para puxar as cordas de texto"
                  : "Hover or click and drag across the screen to pluck the text strings"
                : isPt
                  ? "Clique ou passe o mouse nos blocos para disparar ondas Anime.js"
                  : "Click or hover blocks to trigger Anime.js concentric waves"}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-outline">
            {mode === "strings" ? (
              <a
                href="https://codepen.io/shubniggurath/pen/ZYpjorm"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors underline decoration-outline/50"
              >
                CodePen #ZYpjorm (Liam Egan)
              </a>
            ) : (
              <a
                href="https://animejs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors underline decoration-outline/50"
              >
                animejs.com
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}
