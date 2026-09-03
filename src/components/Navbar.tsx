"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText, ArrowRight, ChevronDown, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [resumeDropdown, setResumeDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: "About", href: "#sobre" },
    { label: "Experience", href: "#experiencia" },
    { label: "Projects", href: "#projetos" },
    { label: "Skills", href: "#skills" },
  ];

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setResumeDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

        {/* Desktop CTA with Language Dropdown */}
        <div ref={dropdownRef} className="hidden md:block relative">
          <button
            type="button"
            onClick={() => setResumeDropdown(!resumeDropdown)}
            className="font-mono text-xs font-semibold uppercase tracking-widest bg-primary text-on-primary px-4 py-2.5 hover:bg-[#ffb95f] transition-colors flex items-center gap-2"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                resumeDropdown ? "rotate-180" : ""
              }`}
            />
          </button>

          {resumeDropdown && (
            <div className="absolute right-0 top-full mt-2 w-52 bg-surface border border-outline shadow-2xl py-1 z-50 animate-in fade-in slide-in-from-top-1">
              <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-on-surface-variant/60 border-b border-outline/40">
                Selecione o idioma:
              </div>

              {/* Opção Português */}
              <a
                href={portfolioData.personal.resumes.pt.url}
                download={portfolioData.personal.resumes.pt.filename}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setResumeDropdown(false)}
                className="flex items-center justify-between px-3.5 py-2.5 text-xs font-mono text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-colors border-b border-outline/30 group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-primary px-1 border border-primary/40 bg-primary/10">
                    PT
                  </span>
                  <span>Português</span>
                </div>
                <Download className="w-3.5 h-3.5 text-on-surface-variant/60 group-hover:text-primary" />
              </a>

              {/* Opção Inglês */}
              <a
                href={portfolioData.personal.resumes.en.url}
                download={portfolioData.personal.resumes.en.filename}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setResumeDropdown(false)}
                className="flex items-center justify-between px-3.5 py-2.5 text-xs font-mono text-on-surface-variant hover:text-primary hover:bg-surface-variant transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-primary px-1 border border-primary/40 bg-primary/10">
                    EN
                  </span>
                  <span>English</span>
                </div>
                <Download className="w-3.5 h-3.5 text-on-surface-variant/60 group-hover:text-primary" />
              </a>
            </div>
          )}
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

          {/* Opções de download no mobile */}
          <div className="mt-2 pt-2 border-t border-outline/50 flex flex-col gap-2">
            <span className="font-mono text-[11px] text-on-surface-variant/70 uppercase tracking-wider">
              Baixar Currículo / Resume:
            </span>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={portfolioData.personal.resumes.pt.url}
                download={portfolioData.personal.resumes.pt.filename}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="font-mono text-xs font-semibold uppercase tracking-wider bg-primary text-on-primary py-2.5 text-center flex items-center justify-center gap-1.5 hover:bg-[#ffb95f] transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PT-BR</span>
              </a>

              <a
                href={portfolioData.personal.resumes.en.url}
                download={portfolioData.personal.resumes.en.filename}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="font-mono text-xs font-semibold uppercase tracking-wider border border-outline bg-surface-variant text-on-background py-2.5 text-center flex items-center justify-center gap-1.5 hover:border-primary hover:text-primary transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>EN-US</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
