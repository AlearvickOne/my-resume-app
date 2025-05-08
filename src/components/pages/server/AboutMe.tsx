import Link from "next/link";
import { TypingConsoleEffect } from "@/components/client-components";

interface ILinks {
  category: string;
  title: string;
  href: string;
}

export function AboutMe() {
  const textLines = [
    "Frontend-разработчик с профильным образованием и 2-летним опытом создания веб-приложений. Специализация: React, Next.js, TypeScript — разработка адаптивных интерфейсов и интеграция с backend. Опыт работы в Agile-командах (планирование, code review) и самостоятельного выполнения задач.",
    "Легко нахожу общий язык с командой, открыт к конструктивному диалогу и всегда готов помочь коллегам. Критику воспринимаю как инструмент профессионального роста. Постоянно изучаю новые технологии для оптимизации разработки. Упорно иду к решению задачи, пока существуют варианты её реализации.",
    "Отличаюсь ответственностью и умением работать в условиях неопределённости. Готов брать на себя сложные задачи и доводить их до результата, а так-же предлагать свои идеи для реализации той или иной задачи.",
  ];

  const links: ILinks[] = [
    {
      category: "Email:",
      title: "gruschevka14.12@gmail.com",
      href: "mailto:gruschevka14.12@gmail.com",
    },
    {
      category: "Телефон:",
      title: "8 (928) 755-97-58",
      href: "tel:89287559758",
    },
    {
      category: "Telegram:",
      title: "@Alearvick",
      href: "https://t.me/Alearvick",
    },
    {
      category: "GitHub:",
      title: "AlearvickOne",
      href: "https://github.com/AlearvickOne",
    },
  ];

  return (
    <section
      id="about"
      className="bg-gray-900 text-white rounded-lg shadow-xl md:p-8 p-2 mb-5 transform transition-all duration-500 hover:scale-102 hover:shadow-2xl"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Текстовая часть */}
          <div className="max-w-[680px] w-full mb-6 md:mb-0">
            <TypingConsoleEffect text={textLines} speed={10} consoleTitle="Информация обо мне" />
          </div>

          {/* Контактная информация */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg w-full md:w-[350px] md:block flex flex-col items-center">
            <h2 className="md:text-3xl text-2xl font-semibold text-teal-400 mb-6">Мои контакты:</h2>
            <ul className="space-y-4">
              <li>
                <span className="font-medium text-gray-300">ФИО:</span> Савченко Александр Сергеевич
              </li>
              {links.map((l) => (
                <li key={l.category}>
                  <span className="font-medium text-gray-300">{l.category}</span>{" "}
                  <Link href={l.href} className="text-teal-400 hover:underline">
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href="/files/Resume-Alexandr-Savchenko.pdf"
                download="Resume-Alexandr-Savchenko.pdf"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                Скачать резюме в pdf
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
