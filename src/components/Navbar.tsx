"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, FileText, ArrowRight, Download, Globe } from "lucide-react";
import { portfolioContent } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = portfolioContent[language];

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: t.nav.about, href: "#sobre" },
    { label: t.nav.experience, href: "#experiencia" },
    { label: t.nav.projects, href: "#projetos" },
    { label: t.nav.skills, href: "#skills" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0C]/85 backdrop-blur-md border-b border-outline">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#"
          className="font-mono text-xl font-bold tracking-tight text-on-background hover:text-primary transition-colors flex items-center gap-2"
        >
          <span className="text-primary">&gt;</span>
          <span>rafaelvieira.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions: Language Toggle & Resume Dropdown */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Toggle */}
          <div className="relative flex items-center border border-outline bg-surface interactive-border">
            <span
              className={`absolute top-0 h-full bg-primary transition-all duration-300 ease-in-out ${
                language === "pt" ? "left-0 w-1/2" : "left-1/2 w-1/2"
              }`}
            />
            <button
              type="button"
              onClick={() => setLanguage("pt")}
              aria-label="Mudar para Português"
              className={`relative z-10 font-mono text-[10px] font-semibold px-2 py-1.5 transition-colors duration-300 ${
                language === "pt" ? "text-on-primary" : "text-on-surface-variant/60 hover:text-on-surface-variant"
              }`}
            >
              PT
            </button>
            <span className="text-outline/40 text-[10px] select-none relative z-10">/</span>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-label="Switch to English"
              className={`relative z-10 font-mono text-[10px] font-semibold px-2 py-1.5 transition-colors duration-300 ${
                language === "en" ? "text-on-primary" : "text-on-surface-variant/60 hover:text-on-surface-variant"
              }`}
            >
              EN
            </button>
          </div>

          {/* Resume Download */}
          <a
            href={t.personal.resumes[language].url}
            download={t.personal.resumes[language].filename}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-semibold uppercase tracking-widest bg-primary text-on-primary px-4 py-2.5 hover:bg-[#ffb95f] transition-colors flex items-center gap-2"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{t.nav.resume}</span>
            <Download className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-on-surface-variant hover:text-primary p-2 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-outline px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
          {/* Mobile Language Toggle */}
          <div className="flex items-center justify-between pb-3 border-b border-outline/40">
            <span className="font-mono text-xs text-on-surface-variant flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              <span>Idioma / Language:</span>
            </span>
            <div className="relative flex font-mono text-xs font-semibold border border-outline">
              <span
                className={`absolute top-0 h-full bg-primary transition-all duration-300 ease-in-out ${
                  language === "pt" ? "left-0 w-1/2" : "left-1/2 w-1/2"
                }`}
              />
              <button
                type="button"
                onClick={() => setLanguage("pt")}
                className={`relative z-10 px-3 py-1 transition-colors duration-300 ${
                  language === "pt" ? "text-on-primary" : "text-on-surface-variant"
                }`}
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`relative z-10 px-3 py-1 transition-colors duration-300 ${
                  language === "en" ? "text-on-primary" : "text-on-surface-variant"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-mono text-sm uppercase tracking-wider text-on-surface-variant hover:text-primary py-2 flex items-center justify-between border-b border-outline/40"
            >
              <span>{link.label}</span>
              <ArrowRight className="w-4 h-4 text-primary" />
            </Link>
          ))}

          {/* Download Currículo */}
          <a
            href={t.personal.resumes[language].url}
            download={t.personal.resumes[language].filename}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="font-mono text-xs font-semibold uppercase tracking-wider bg-primary text-on-primary py-2.5 text-center flex items-center justify-center gap-1.5 hover:bg-[#ffb95f] transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t.nav.resume}</span>
          </a>
        </div>
      )}
    </header>
  );
}
