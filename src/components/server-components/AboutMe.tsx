"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { clearInterval } from "node:timers";

export function AboutMe() {
  const textLines = [
    "Frontend-разработчик с профильным образованием и 2-летним опытом создания веб-приложений. Специализация: React, Next.js, TypeScript — разработка адаптивных интерфейсов и интеграция с backend. Опыт работы в Agile-командах (планирование, code review) и самостоятельного выполнения задач.",
    "Легко нахожу общий язык с командой, открыт к конструктивному диалогу и всегда готов помочь коллегам. Критику воспринимаю как инструмент профессионального роста. Постоянно изучаю новые технологии для оптимизации разработки. Упорно иду к решению задачи, пока существуют варианты её реализации.",
    "Отличаюсь ответственностью и умением работать в условиях неопределённости. Готов брать на себя сложные задачи и доводить их до результата, а так-же предлагать свои идеи для реализации той или иной задачи.",
  ];

  return (
    <section className="max-w-[1366px] mx-auto">
      <h1 className="text-2xl font-bold mb-6">Информация обо мне:</h1>

      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="max-w-[800px] w-full">
          <TypingEffect text={textLines} speed={10} codeHeight={17} />
        </div>

        <div className="md:w-[300px] bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Контакты</h2>
          <ul className="space-y-3">
            <li>
              <span className="font-medium">ФИО:</span> Савченко Александр Сергеевич
            </li>
            <li>
              <span className="font-medium">Email:</span>{" "}
              <Link href={"mailto:gruschevka14.12@gmail.com"} className="text-blue-600 hover:underline">
                gruschevka14.12@gmail.com
              </Link>
            </li>
            <li>
              <span className="font-medium">Телефон:</span>{" "}
              <Link href={"tel:89287559758"} className="text-blue-600 hover:underline">
                8 (928) 755-97-58
              </Link>
            </li>
            <li>
              <span className="font-medium">Telegram:</span>{" "}
              <Link href={"https://t.me/Alearvick"} className="text-blue-600 hover:underline">
                @Alearvick
              </Link>
            </li>
            <li>
              <span className="font-medium">GitHub:</span>{" "}
              <Link href="https://github.com/AlearvickOne" className="text-blue-600 hover:underline">
                AlearvickOne
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

interface TypingEffectProps {
  text: string[];
  speed?: number;
  codeHeight: number;
}

const TypingEffect = ({ text, speed = 50, codeHeight }: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [visibleTextTap, setVisibleTextTap] = useState<boolean>(true);

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
      console.log("Миг");
      setVisibleTextTap((prev) => !prev);
    }, 500);

    return () => clearInterval(tapInterval);
  }, [lineIndex, text.length]);

  return (
    <div className="bg-gray-800 rounded-2xl text-lg font-mono">
      <div className="border-b-2 border-white">
        <div className="p-3 flex justify-between items-center">
          <div className="flex gap-2">
            <p className="w-5 h-5 bg-red-500 rounded-full" />
            <p className="w-5 h-5 bg-amber-300 rounded-full" />
            <p className="w-5 h-5 bg-green-300 rounded-full" />
          </div>
          <p className="text-white">Console</p>
        </div>
      </div>
      <div className="w-full p-3 text-green-500 flex gap-4">
        {/* Левый столбик — номера всех строк */}
        <div className="text-right text-gray-400 select-none pr-4">
          {Array.from({ length: codeHeight }).map((_, idx) => (
            <div key={idx}>{idx + 1}</div>
          ))}
        </div>

        {/* Правый столбик — сам текст */}
        <div className="whitespace-pre-wrap">
          {displayedText}
          <span className="text-blue-400">{visibleTextTap ? "|" : ""}</span>
        </div>
      </div>
    </div>
  );
};
