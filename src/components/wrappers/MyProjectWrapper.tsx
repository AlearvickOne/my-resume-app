import { ReactNode } from "react";

interface MyProjectsWrapperProps {
  children: ReactNode;
}

export function MyProjectWrapper({ children }: MyProjectsWrapperProps) {
  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-xl transform transition-transform hover:scale-102 hover:shadow-2xl hover:bg-gray-700">
      {children}
    </div>
  );
}
