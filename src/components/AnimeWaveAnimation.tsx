"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { animate, stagger } from "animejs";

interface AnimeWaveAnimationProps {
  className?: string;
  onShockwaveRef?: React.MutableRefObject<((x?: number, y?: number) => void) | null>;
}

const GLYPHS = ["{ }", "< >", "//", "=>", "++", "**", "$_", "01", "[]", "::", "!=", ";;"];

export function AnimeWaveAnimation({
  className = "",
  onShockwaveRef,
}: AnimeWaveAnimationProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [gridConfig, setGridConfig] = useState<{ cols: number; rows: number }>({
    cols: 14,
    rows: 8,
  });

  const cellsRef = useRef<(HTMLDivElement | null)[]>([]);
  const isAnimatingRef = useRef<boolean>(false);

  // Recalculate grid size based on container dimensions
  const updateGridSize = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 300;

    const cellSize = width < 640 ? 44 : 54;
    const cols = Math.max(6, Math.floor(width / cellSize));
    const rows = Math.max(4, Math.floor(height / cellSize));

    setGridConfig({ cols, rows });
  }, []);

  useEffect(() => {
    updateGridSize();
    window.addEventListener("resize", updateGridSize);
    return () => window.removeEventListener("resize", updateGridSize);
  }, [updateGridSize]);

  // Trigger Anime.js staggered wave from a specific index
  const triggerRipple = useCallback(
    (fromIndex: number | "center" = "center") => {
      const validCells = cellsRef.current.filter((c): c is HTMLDivElement => c !== null);
      if (validCells.length === 0) return;

      const { cols, rows } = gridConfig;

      try {
        animate(validCells, {
          scale: [
            { value: 1.35, duration: 280, ease: "outBack(2)" },
            { value: 1, duration: 550, ease: "outElastic(1, .5)" },
          ],
          rotate: [
            { value: "+=90deg", duration: 400, ease: "easeInOutQuad" },
          ],
          color: [
            { value: "#ffc174", duration: 150 },
            { value: "#E2575F", duration: 350 },
            { value: "rgba(216, 195, 173, 0.35)", duration: 600 },
          ],
          borderColor: [
            { value: "rgba(226, 87, 95, 0.8)", duration: 200 },
            { value: "rgba(142, 29, 39, 0.15)", duration: 600 },
          ],
          delay: stagger(32, {
            grid: [cols, rows],
            from: fromIndex,
          }),
        });
      } catch (err) {
        // Fallback for safety
        console.warn("Anime.js stagger ripple error:", err);
      }
    },
    [gridConfig]
  );

  // Expose shockwave ref
  useEffect(() => {
    if (onShockwaveRef) {
      onShockwaveRef.current = () => triggerRipple("center");
    }
  }, [onShockwaveRef, triggerRipple]);

  // Initial welcome ripple on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerRipple("center");
    }, 450);
    return () => clearTimeout(timer);
  }, [gridConfig, triggerRipple]);

  const totalCells = gridConfig.cols * gridConfig.rows;

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden flex items-center justify-center p-3 select-none ${className}`}
      aria-label="Anime.js interactive staggered ripple grid"
      role="img"
    >
      <div
        className="grid gap-1.5 sm:gap-2 w-full h-full max-w-full max-h-full items-center justify-center"
        style={{
          gridTemplateColumns: `repeat(${gridConfig.cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${gridConfig.rows}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: totalCells }).map((_, idx) => {
          const glyph = GLYPHS[idx % GLYPHS.length];
          return (
            <div
              key={idx}
              ref={(el) => {
                cellsRef.current[idx] = el;
              }}
              onClick={() => triggerRipple(idx)}
              onMouseEnter={() => {
                if (!isAnimatingRef.current) {
                  triggerRipple(idx);
                }
              }}
              className="flex items-center justify-center rounded border border-primary/10 bg-surface/40 hover:bg-surface-variant hover:border-primary/50 text-[10px] sm:text-xs font-mono text-on-surface-variant/30 cursor-pointer transition-colors duration-150 aspect-square"
            >
              <span>{glyph}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
