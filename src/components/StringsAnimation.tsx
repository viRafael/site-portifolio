"use client";

import React, { useEffect, useRef, useCallback } from "react";

export type StringsPreset = "code" | "matrix" | "symbols" | "bio";

interface StringsAnimationProps {
  preset?: StringsPreset;
  ambientMotion?: boolean;
  intensity?: number;
  className?: string;
  onShockwaveRef?: React.MutableRefObject<((x?: number, y?: number) => void) | null>;
}

interface Particle {
  x: number;
  y: number;
  prevX: number;
  prevY: number;
  restX: number;
  restY: number;
  char: string;
  pinned: boolean;
  col: number;
  row: number;
}

const PRESET_TEXTS: Record<StringsPreset, string[]> = {
  code: [
    'const developer = "Rafael Vieira";',
    "async function buildScalableSystems() {",
    "  const architecture = new CloudEngine();",
    "  await architecture.optimizeLatency();",
    '  return { status: 200, quality: "clean" };',
    "}",
    'type CoreStack = ["TypeScript", "Next.js", "Docker", "PostgreSQL"];',
    'interface Engineer { passion: 100; focus: "Backend & Systems"; }',
    'git commit -m "feat(physics): kinetic text strings" && git push;',
    "while (awake) { learn(); buildSolutions(); ship(); }",
    "SELECT skills, impact FROM experience ORDER BY passion DESC;",
    "const memoize = (fn) => new Cache().wrap(fn);",
    "export default function ModernSoftware() { return <Future />; }",
    'const docker = new Container({ runtime: "production" });',
    "export type Result<T, E> = { ok: true; val: T } | { ok: false; err: E };",
    "const metrics = monitor.collectLatencyP99();",
  ],
  matrix: [
    "0 1 0 1 1 0 0 1 0 1 0 0 1 1 1 0",
    "1 1 0 0 1 0 1 0 0 1 1 1 0 0 0 1",
    "0 0 1 1 0 1 0 1 1 0 1 0 1 1 0 0",
    "1 0 1 0 0 1 1 0 1 1 0 1 0 0 1 1",
    "0 1 1 0 1 0 0 1 0 0 1 0 1 1 0 1",
    "1 1 1 0 0 1 0 1 1 0 0 1 0 1 1 0",
  ],
  symbols: [
    "{ } < > / = + - * ~ ; : ! ? [ ] $ & | # @ % ^ _ `",
    "= = > > < < / / { { } } [ [ ] ] & & | | ! ! ? ?",
    "; ; : : $ $ # # @ @ * * + + - - % % ^ ^ ~ ~ _ _",
    "( ) = > { return true; } => [ ...rest ]",
    "<Component props={value} /> && { condition ? 1 : 0 }",
  ],
  bio: [
    "RAFAEL VIEIRA SOFTWARE ENGINEER",
    "ENGENHARIA DE SOFTWARE @ PUCPR",
    "BACKEND • CLOUD • FULL STACK ARCHITECTURE",
    "CLEAN CODE • HIGH PERFORMANCE SYSTEMS",
    "DISCIPLINE • PASSION • INNOVATION",
    "PORTFOLIO INTERACTIVO • KINETIC SYNTAX",
  ],
};

// Physics constants matching Liam Egan's "Strings"
const DAMPING = 0.92;
const GRAVITY = 1500;
const HOME_PULL = 155;
const SOLVER_ITERATIONS = 3;
const DT = 1 / 60;

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = Math.min(Math.max((x - edge0) / (edge1 - edge0), 0), 1);
  return t * t * (3 - 2 * t);
}

export function StringsAnimation({
  preset = "code",
  ambientMotion = true,
  intensity = 1,
  className = "",
  onShockwaveRef,
}: StringsAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Simulation state refs
  const particlesRef = useRef<Particle[]>([]);
  const stringsRef = useRef<Particle[][]>([]);
  const dimensionsRef = useRef<{ width: number; height: number; dpr: number }>({
    width: 0,
    height: 0,
    dpr: 1,
  });

  const pointerRef = useRef<{
    x: number;
    y: number;
    prevX: number;
    prevY: number;
    vx: number;
    vy: number;
    isDown: boolean;
    isInside: boolean;
  }>({
    x: -9999,
    y: -9999,
    prevX: -9999,
    prevY: -9999,
    vx: 0,
    vy: 0,
    isDown: false,
    isInside: false,
  });

  const animFrameIdRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  const settledFramesRef = useRef<number>(0);
  const isRunningRef = useRef<boolean>(true);

  // Build grid of strings based on container size
  const buildGrid = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const width = Math.max(rect.width, 320);
    const height = Math.max(rect.height, 260);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    dimensionsRef.current = { width, height, dpr };

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Dynamic spacing
    const isMobile = width < 640;
    const colSpacing = isMobile ? 22 : 28;
    const rowSpacing = isMobile ? 24 : 28;
    const cols = Math.max(4, Math.floor(width / colSpacing));
    const rows = Math.max(4, Math.floor((height - 15) / rowSpacing));

    const texts = PRESET_TEXTS[preset] || PRESET_TEXTS.code;
    const allParticles: Particle[] = [];
    const strings: Particle[][] = [];

    const totalGridWidth = (cols - 1) * colSpacing;
    const startX = Math.max(12, (width - totalGridWidth) / 2);
    const startY = 18;

    for (let c = 0; c < cols; c++) {
      const colParticles: Particle[] = [];
      const textLine = texts[c % texts.length];
      const chars = Array.from(textLine);

      for (let r = 0; r < rows; r++) {
        const restX = startX + c * colSpacing;
        const restY = startY + r * rowSpacing;
        const char = r < chars.length ? chars[r] : r % 2 === 0 ? "·" : " ";

        const p: Particle = {
          x: restX,
          y: restY,
          prevX: restX,
          prevY: restY,
          restX,
          restY,
          char,
          pinned: r === 0,
          col: c,
          row: r,
        };

        colParticles.push(p);
        allParticles.push(p);
      }
      strings.push(colParticles);
    }

    particlesRef.current = allParticles;
    stringsRef.current = strings;
    settledFramesRef.current = 0;
    isRunningRef.current = true;
  }, [preset]);

  // Expose shockwave through ref
  useEffect(() => {
    if (!onShockwaveRef) return;

    onShockwaveRef.current = (cx?: number, cy?: number) => {
      const { width, height } = dimensionsRef.current;
      const targetX = cx !== undefined ? cx : width / 2;
      const targetY = cy !== undefined ? cy : height / 2;
      const radius = 240;

      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (p.pinned) continue;
        const dx = p.x - targetX;
        const dy = p.y - targetY;
        const dist = Math.hypot(dx, dy);
        if (dist < radius) {
          const force = (1 - dist / radius) * 32 * intensity;
          const angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * force;
          p.y += Math.sin(angle) * force + 12;
        }
      }
      settledFramesRef.current = 0;
      isRunningRef.current = true;
    };
  }, [onShockwaveRef, intensity]);

  // Rebuild on preset change or resize
  useEffect(() => {
    buildGrid();

    const handleResize = () => {
      buildGrid();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [buildGrid]);

  // Pointer listener on closest section or container
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targetElement = container.closest("section") || container;

    const onMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const pointer = pointerRef.current;
      if (pointer.prevX !== -9999) {
        pointer.vx = x - pointer.prevX;
        pointer.vy = y - pointer.prevY;
      }
      pointer.prevX = pointer.x;
      pointer.prevY = pointer.y;
      pointer.x = x;
      pointer.y = y;
      pointer.isInside = true;

      settledFramesRef.current = 0;
      isRunningRef.current = true;
    };

    const onDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest("input, button, a")) {
        return;
      }
      pointerRef.current.isDown = true;
      onMove(e);
    };

    const onUp = () => {
      pointerRef.current.isDown = false;
    };

    const onLeave = () => {
      const pointer = pointerRef.current;
      pointer.isInside = false;
      pointer.isDown = false;
      pointer.prevX = -9999;
      pointer.prevY = -9999;
      pointer.vx = 0;
      pointer.vy = 0;
    };

    targetElement.addEventListener("pointermove", onMove, { passive: true });
    targetElement.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp);
    targetElement.addEventListener("pointerleave", onLeave);

    return () => {
      targetElement.removeEventListener("pointermove", onMove);
      targetElement.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      targetElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  // Physics and Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const render = () => {
      animFrameIdRef.current = requestAnimationFrame(render);

      const { width, height, dpr } = dimensionsRef.current;
      if (width === 0 || height === 0) return;

      const particles = particlesRef.current;
      const strings = stringsRef.current;
      const pointer = pointerRef.current;

      timeRef.current += DT;
      const time = timeRef.current;

      // Reduced motion fallback
      if (prefersReducedMotion) {
        ctx.save();
        ctx.scale(dpr, dpr);
        ctx.clearRect(0, 0, width, height);
        ctx.font = '12px "JetBrains Mono", monospace';
        ctx.fillStyle = "rgba(216, 195, 173, 0.4)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        for (const p of particles) {
          if (p.char && p.char !== " ") {
            ctx.fillText(p.char, p.restX, p.restY);
          }
        }
        ctx.restore();
        return;
      }

      // 1. POINTER FORCES
      const grabRadius = (pointer.isDown ? 115 : 85) * intensity;
      const pointerMoved =
        Math.abs(pointer.vx) > 0.1 || Math.abs(pointer.vy) > 0.1 || pointer.isDown;

      if (pointer.isInside || pointer.isDown) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          if (p.pinned) continue;

          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const dist = Math.hypot(dx, dy);

          if (dist < grabRadius) {
            const pull = 1 - smoothstep(0, grabRadius, dist);
            const nx = dx / (dist || 1);
            const ny = dy / (dist || 1);

            const repulse = pull * (pointer.isDown ? 34 : 18) * intensity;
            p.x += nx * repulse;
            p.y += ny * repulse;

            if (pointerMoved) {
              p.x += pointer.vx * pull * 0.45;
              p.y += pointer.vy * pull * 0.35;
            }
          }
        }
      }

      // 2. AMBIENT BREEZE
      if (ambientMotion) {
        const colsCount = strings.length;
        for (let c = 0; c < colsCount; c++) {
          const colParticles = strings[c];
          const wave = Math.sin(time * 1.5 + c * 0.35) * 0.8 * intensity;
          for (let r = 1; r < colParticles.length; r++) {
            const p = colParticles[r];
            if (!p.pinned) {
              p.x += wave * (r / colParticles.length) * 0.14;
            }
          }
        }
      }

      pointer.vx *= 0.82;
      pointer.vy *= 0.82;

      // 3. VERLET INTEGRATION
      let fastestSpeed = 0;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (p.pinned) continue;

        const vx = (p.x - p.prevX) * DAMPING;
        const vy = (p.y - p.prevY) * DAMPING;

        const homeX = p.restX - p.x;
        const homeY = p.restY - p.y;
        const disp = Math.hypot(homeX, homeY);

        const weight = GRAVITY * smoothstep(3, 35, disp);

        p.prevX = p.x;
        p.prevY = p.y;

        p.x += vx + homeX * HOME_PULL * DT * DT;
        p.y += vy + (homeY * HOME_PULL + weight) * DT * DT;

        const speed = Math.hypot(p.x - p.prevX, p.y - p.prevY);
        fastestSpeed = Math.max(fastestSpeed, speed);
      }

      // 4. DISTANCE CONSTRAINTS
      const cols = strings.length;
      for (let iter = 0; iter < SOLVER_ITERATIONS; iter++) {
        for (let c = 0; c < cols; c++) {
          const colParticles = strings[c];
          for (let r = 1; r < colParticles.length; r++) {
            const p1 = colParticles[r - 1];
            const p2 = colParticles[r];

            const dx = p2.x - p1.x;
            const dy = p2.y - p1.y;
            const dist = Math.hypot(dx, dy);
            const restLength = p2.restY - p1.restY;

            if (dist > restLength) {
              const correction = ((dist - restLength) / dist) * 0.5;
              const cx = dx * correction;
              const cy = dy * correction;

              if (p1.pinned) {
                p2.x -= cx * 2;
                p2.y -= cy * 2;
              } else {
                p1.x += cx;
                p1.y += cy;
                p2.x -= cx;
                p2.y -= cy;
              }
            }
          }
        }
      }

      // Energy conservation check
      if (fastestSpeed < 0.02 && !pointer.isInside && !pointer.isDown && !ambientMotion) {
        settledFramesRef.current++;
        if (settledFramesRef.current > 40) {
          isRunningRef.current = false;
        }
      } else {
        settledFramesRef.current = 0;
        isRunningRef.current = true;
      }

      // 5. CANVAS DRAWING
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // Strings thread lines
      ctx.lineWidth = 0.75;
      for (let c = 0; c < cols; c++) {
        const colParticles = strings[c];
        if (colParticles.length < 2) continue;

        ctx.beginPath();
        ctx.moveTo(colParticles[0].x, colParticles[0].y);
        for (let r = 1; r < colParticles.length; r++) {
          ctx.lineTo(colParticles[r].x, colParticles[r].y);
        }
        ctx.strokeStyle = "rgba(142, 29, 39, 0.16)";
        ctx.stroke();
      }

      // Characters with kinetic rotation
      const isMobile = width < 640;
      const fontSize = isMobile ? 11 : 13;
      ctx.font = `${fontSize}px "JetBrains Mono", ui-monospace, monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (let c = 0; c < cols; c++) {
        const colParticles = strings[c];
        for (let r = 0; r < colParticles.length; r++) {
          const p = colParticles[r];
          if (!p.char || p.char === " ") continue;

          let tilt = 0;
          if (r > 0) {
            const above = colParticles[r - 1];
            const dx = p.x - above.x;
            const dy = p.y - above.y;
            const disp = Math.hypot(p.x - p.restX, p.y - p.restY);
            const amount = smoothstep(2, 24, disp);
            if (amount > 0) {
              tilt = -Math.atan2(dx, dy) * amount;
            }
          }

          const disp = Math.hypot(p.x - p.restX, p.y - p.restY);
          const intensityRatio = Math.min(1, disp / 28);

          ctx.save();
          ctx.translate(p.x, p.y);
          if (tilt !== 0) {
            ctx.rotate(tilt);
          }

          if (intensityRatio > 0.08) {
            ctx.fillStyle = intensityRatio > 0.55 ? "#ffc174" : "#E2575F";
            ctx.shadowColor = "rgba(226, 87, 95, 0.7)";
            ctx.shadowBlur = intensityRatio * 10;
          } else {
            ctx.fillStyle = "rgba(216, 195, 173, 0.32)";
            ctx.shadowBlur = 0;
          }

          ctx.fillText(p.char, 0, 0);
          ctx.restore();
        }
      }

      ctx.restore();
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [ambientMotion, intensity]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none cursor-crosshair touch-none ${className}`}
      aria-label="Interactive text strings physics animation by Liam Egan"
      role="img"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full pointer-events-none"
      />
    </div>
  );
}
