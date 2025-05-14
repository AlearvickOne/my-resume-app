import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  idDOM: string;
}

export function SectionWrapper({ children, idDOM }: SectionWrapperProps) {
  return (
    <section
      id={idDOM}
      className="bg-gray-900 text-white rounded-lg shadow-xl md:p-8 p-2 mb-5 transform transition-all duration-500 hover:scale-102 hover:shadow-2xl"
    >
      {children}
    </section>
  );
}
