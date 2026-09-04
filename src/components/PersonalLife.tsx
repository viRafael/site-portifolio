"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import {
  BookOpen,
  Music,
  ChefHat,
  Dumbbell,
  Swords,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { portfolioContent, PersonalLifeItem } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

const iconMap: Record<PersonalLifeItem["icon"], ReactNode> = {
  reading: <BookOpen className="w-5 h-5 text-primary" />,
  music: <Music className="w-5 h-5 text-primary" />,
  cooking: <ChefHat className="w-5 h-5 text-primary" />,
  gym: <Dumbbell className="w-5 h-5 text-primary" />,
  muaythai: <Swords className="w-5 h-5 text-primary" />,
  family: <Heart className="w-5 h-5 text-primary" />,
};

export function PersonalLife() {
  const { language } = useLanguage();
  const t = portfolioContent[language];
  const itemCount = t.personalLifeSection.items.length;

  const trackRef = useRef<HTMLDivElement>(null);
  const cycleRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ lastX: 0 });

  const handlePointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || e.pointerType !== "mouse") return;
    dragState.current.lastX = e.pageX;
    setIsDragging(true);
    el.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!isDragging || !el) return;
    const dx = e.pageX - dragState.current.lastX;
    dragState.current.lastX = e.pageX;
    el.scrollLeft -= dx;
  };

  const endDrag = (e?: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const el = trackRef.current;
    if (e && el) {
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {
        /* capture already released */
      }
    }
    setIsDragging(false);
  };

  const scrollByCards = (direction: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.7, behavior: "smooth" });
  };

  // Measure one full copy of the track so we can wrap ("loop") seamlessly.
  const measureCycle = (el: HTMLDivElement) => {
    const first = el.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const width = first ? first.offsetWidth : 0;
    cycleRef.current = itemCount * (width + gap);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    measureCycle(el);
    el.scrollLeft = cycleRef.current;
    const onResize = () => measureCycle(el);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = () => {
    const el = trackRef.current;
    const cycle = cycleRef.current;
    if (!el || cycle <= 0) return;
    if (el.scrollLeft >= cycle) {
      el.scrollLeft -= cycle;
    } else if (el.scrollLeft <= 0) {
      el.scrollLeft += cycle;
    }
  };

  return (
    <section id="vida-pessoal" className="py-16 md:py-24 border-b border-outline">
      <div className="mb-12">
        <span className="font-mono text-xs uppercase tracking-widest text-primary mb-2 block">
          {t.personalLifeSection.sectionTag}
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-on-background mb-3">
          {t.personalLifeSection.title}
        </h2>
        <div className="w-12 h-1 bg-primary" />
      </div>

      {/* Horizontal Carousel */}
      <div className="relative group">
        {/* Edge fades */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-10 md:w-16 bg-gradient-to-r from-background to-transparent z-10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-16 bg-gradient-to-l from-background to-transparent z-10"
        />

        {/* Navigation Arrows (desktop only, on hover) */}
        <button
          type="button"
          aria-label={language === "pt" ? "Rolar para a esquerda" : "Scroll left"}
          onClick={() => scrollByCards(-1)}
          className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-surface border border-outline text-on-background hover:border-primary hover:text-primary interactive-border opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          aria-label={language === "pt" ? "Rolar para a direita" : "Scroll right"}
          onClick={() => scrollByCards(1)}
          className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-surface border border-outline text-on-background hover:border-primary hover:text-primary interactive-border opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Cards Track */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onPointerCancel={endDrag}
          className={`flex gap-4 overflow-x-auto no-scrollbar touch-pan-x py-2 ${
            isDragging ? "cursor-grabbing select-none" : "cursor-grab"
          }`}
        >
          {[...t.personalLifeSection.items, ...t.personalLifeSection.items].map(
            (item, index) => (
              <article
                key={`${item.id}-${index}`}
                className="shrink-0 w-[220px] sm:w-[280px] lg:w-[300px] bg-surface border border-outline p-5 interactive-border select-none"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-surface-variant border border-outline/50">
                    {iconMap[item.icon]}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                    {item.label}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-on-background mb-1.5">{item.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
                <div className="mt-4 pt-3 border-t border-outline/40 flex justify-between items-center">
                  <span className="font-mono text-[10px] text-on-surface-variant/50 uppercase tracking-wider">
                    Hobby
                  </span>
                  <span className="font-mono text-[10px] text-primary">0{(index % itemCount) + 1}</span>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}