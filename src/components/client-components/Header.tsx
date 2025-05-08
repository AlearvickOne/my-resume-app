"use client";

import { useIsMobile } from "@/components/hooks";
import { HeaderMobile } from "@/components/client-components/HeaderMobile";

export function Header() {
  const isMobile = useIsMobile();

  const links = [
    {
      link: "#about",
      text: "Обо мне",
    },
    {
      link: "#stack",
      text: "Мои навыки",
    },
    {
      link: "#work",
      text: "Опыт работы",
    },
  ];

  return (
    <>
      {isMobile ? (
        <HeaderMobile links={links} />
      ) : (
        <header className="bg-gray-900 text-white rounded-lg shadow-xl p-8 mb-10 hover:shadow-2xl">
          <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
            <h1 className="text-4xl font-extrabold text-white hover:text-teal-200 transition-all duration-300">Резюме</h1>
            <nav>
              <ul className="flex gap-12 text-lg font-medium">
                {links.map((l) => (
                  <li key={l.link} className="hover:scale-[1.4] transition-all duration-300">
                    <a href={l.link} className="hover:text-teal-200">
                      {l.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
      )}
    </>
  );
}
