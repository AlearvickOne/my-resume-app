"use client";

import { MenuMobileIcon } from "@/components/icons";
import { useState } from "react";

type TLink = {
  link: string;
  text: string;
};

interface HeaderMobileProps {
  links: TLink[];
}

export function HeaderMobile({ links }: HeaderMobileProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white rounded-lg shadow-xl py-5 px-2 mb-10 hover:shadow-2xl relative">
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-4xl font-extrabold text-white">Резюме</h1>
        <div className="max-w-[40px] text-white" onClick={() => setIsOpen(!isOpen)}>
          <MenuMobileIcon />
        </div>
      </div>
      <nav
        className={`absolute bg-gray-900 right-[20px] top-[90px] rounded-2xl border-green-600 border-[1px] z-50
    before:content-[''] before:absolute before:top-[-20px] before:right-6 before:border-[12px] before:border-transparent before:border-b-gray-900
    transition-all duration-300 ease-out transform origin-top
    ${isOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}`}
      >
        <ul className="flex flex-col p-10 gap-5 text-lg font-medium">
          {links.map((l) => (
            <li key={l.link}>
              <a href={l.link} className="underline text-[20px]" onClick={() => setIsOpen(!isOpen)}>
                {l.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
