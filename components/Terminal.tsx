"use client";

import { useEffect, useRef } from "react";

const LINES = [
  "$ whoami",
  "0xforlon — offensive security engineer, BSc CS",
  "",
  "$ nmap -sV --top-ports 20 0xforlon.dev",
  "PORT     STATE  SERVICE",
  "22/tcp   open   ssh",
  "443/tcp  open   https",
  "",
  "$ status --check",
  "[OK] recon      complete",
  "[OK] writeups   published",
  "[OK] available  for engagements",
  "",
  "system ready_",
];

export default function Terminal() {
  const ref = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      el.textContent = LINES.join("\n");
      return;
    }

    let lineIndex = 0;
    let charIndex = 0;
    let buffer = "";
    let timeoutId: ReturnType<typeof setTimeout>;

    function typeNext() {
      if (!el || lineIndex >= LINES.length) return;
      const currentLine = LINES[lineIndex];

      if (charIndex <= currentLine.length) {
        el.textContent = buffer + currentLine.slice(0, charIndex);
        charIndex++;
        timeoutId = setTimeout(typeNext, currentLine.length === 0 ? 40 : 14);
      } else {
        buffer += currentLine + "\n";
        lineIndex++;
        charIndex = 0;
        timeoutId = setTimeout(typeNext, 90);
      }
    }

    typeNext();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className="terminal"
      role="img"
      aria-label="Terminal boot sequence introducing 0xFORLON, offensive security engineer"
    >
      <div className="terminal-bar">
        <span className="dot dot-r"></span>
        <span className="dot dot-y"></span>
        <span className="dot dot-g"></span>
        <span className="terminal-title">session — /dev/pts/0</span>
      </div>
      <pre className="terminal-body" ref={ref} aria-hidden="true"></pre>
    </div>
  );
}
