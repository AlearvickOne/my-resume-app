import { WorkExperience, AboutMe, MyStack } from "@/components/server-components";
import { Header } from "@/components/client-components";

export default function Home() {
  const sections = [
    {
      id: 1,
      section: <AboutMe />,
    },
    {
      id: 2,
      section: <MyStack />,
    },
    {
      id: 3,
      section: <WorkExperience />,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white pb-20">
      <Header />
      <main className="max-w-screen-xl mx-auto md:px-6 md:py-12">
        {sections.map((sec) => (
          <section
            key={sec.id}
            className="bg-gray-800 bg-opacity-90 rounded-lg shadow-xl p-2 md:p-8 mb-2 md:mb-12 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            {sec.section}
          </section>
        ))}
      </main>
    </div>
  );
}
