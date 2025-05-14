"use client";

import { useIsMobile } from "@/components/hooks";
import { HeaderMobile } from "@/components/pages/client/HeaderMobile";
import { ID_ABOUT_ME, ID_MY_PROJECTS, ID_MY_STACK, ID_MY_WORK_EXP } from "@/components/pages/ids-pages";

export function Header() {
  const isMobile = useIsMobile();

  const links = [
    {
      link: `#${ID_ABOUT_ME}`,
      text: "Обо мне",
    },
    {
      link: `#${ID_MY_STACK}`,
      text: "Мои навыки",
    },
    {
      link: `#${ID_MY_WORK_EXP}`,
      text: "Опыт работы",
    },
    {
      link: `#${ID_MY_PROJECTS}`,
      text: "Мой проект",
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
