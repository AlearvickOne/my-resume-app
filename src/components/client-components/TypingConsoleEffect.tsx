"use client";

import { useEffect, useState } from "react";
import { useIsMobile } from "@/components/hooks";

interface TypingConsoleEffectProps {
  text: string[];
  speed?: number;
  consoleTitle: string;
}

export function TypingConsoleEffect({ text, speed = 50, consoleTitle }: TypingConsoleEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [visibleTextTap, setVisibleTextTap] = useState<boolean>(true);

  const isMobile = useIsMobile();

  useEffect(() => {
    if (lineIndex >= text.length) return;

    const currentLine = text[lineIndex];
    const timer = setTimeout(() => {
      if (charIndex < currentLine.length) {
        setDisplayedText((prev) => prev + currentLine[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setDisplayedText((prev) => prev + "\n\n");
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, lineIndex, text, speed]);

  useEffect(() => {
    const isDone = lineIndex >= text.length;
    if (!isDone) return;

    const tapInterval = setInterval(() => {
      setVisibleTextTap((prev) => !prev);
    }, 500);

    return () => clearInterval(tapInterval);
  }, [lineIndex, text.length]);

  return (
    <div className="bg-gray-900 rounded-2xl text-lg font-mono">
      <div className="flex justify-between items-center md:p-3 border-b-2 border-gray-700">
        <div className="flex gap-2">
          <div className="w-3.5 h-3.5 bg-red-500 rounded-full" />
          <div className="w-3.5 h-3.5 bg-amber-300 rounded-full" />
          <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
        </div>
        <p className="text-white text-sm">{consoleTitle}</p>
      </div>
      <div className="w-full p-4 text-green-400 flex">
        {/* Левый столбик — номера всех строк */}
        <div className="text-right text-gray-500 select-none pr-4">
          {Array.from({ length: isMobile ? 45 : 20 }).map((_, idx) => (
            <div key={idx}>{idx + 1}</div>
          ))}
        </div>

        {/* Правый столбик — сам текст */}
        <div className="whitespace-pre-wrap">
          {displayedText}
          <span className="text-blue-500">{visibleTextTap ? "|" : ""}</span>
        </div>
      </div>
      {isMobile && <div className="border-b-[1px] border-gray-600" />}
    </div>
  );
}
