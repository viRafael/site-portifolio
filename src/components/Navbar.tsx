"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, FileText, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#sobre" },
    { label: "Experience", href: "#experiencia" },
    { label: "Projects", href: "#projetos" },
    { label: "Skills", href: "#skills" },
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

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={portfolioData.personal.resumeUrl}
            className="font-mono text-xs font-semibold uppercase tracking-widest bg-primary text-on-primary px-5 py-2.5 hover:bg-[#ffb95f] transition-colors flex items-center gap-2"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
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
          <a
            href={portfolioData.personal.resumeUrl}
            onClick={() => setIsOpen(false)}
            className="mt-2 font-mono text-xs font-semibold uppercase tracking-widest bg-primary text-on-primary py-3 text-center flex items-center justify-center gap-2 hover:bg-[#ffb95f]"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </div>
      )}
    </header>
  );
}
