interface IMyStackElements {
  id: number;
  category: string;
  skill: string;
}

const myStackElements: IMyStackElements[] = [
  {
    id: 1,
    category: "Языки",
    skill: "JavaScript (ES6+), TypeScript",
  },
  { id: 2, category: "Фреймворки", skill: "React, Next.js, Nest.js" },
  { id: 3, category: "Стилизация", skill: "CSS3, SASS/SCSS, Tailwind CSS" },
  { id: 4, category: "Состояние", skill: "MobX, Redux Toolkit, Zustand" },
  { id: 5, category: "Инструменты", skill: "Git, Webpack, Vite, Docker, websocket" },
  { id: 6, category: "Библиотеки", skill: "AG-Grid, Chart.js, Storybook, Inversify, MUI, SheetJs, mv, react-quill, express-fileupload, socket.io" },
];

export function MyStack() {
  return (
    <section
      id="stack"
      className="bg-gray-900 text-white rounded-lg shadow-xl md:p-8 py-5 mb-10 transform transition-all duration-500 hover:scale-102 hover:shadow-2xl"
    >
      <div className="max-w-screen-xl mx-auto md:px-6 px-2">
        <h2 className="text-3xl font-semibold text-teal-400 mb-6">Мои навыки</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse shadow-lg rounded-lg overflow-hidden bg-gray-800">
            <thead className="bg-gradient-to-r from-teal-500 to-indigo-500 text-white">
              <tr>
                <th className="py-3 px-6 text-left font-semibold">Категория</th>
                <th className="py-3 px-6 text-left font-semibold">Навыки</th>
              </tr>
            </thead>
            <tbody>
              {myStackElements.map((el) => (
                <tr key={el.id} className="hover:bg-gray-700 transition-colors duration-300 rounded-lg">
                  <td className="py-3 px-6 border-t border-gray-600">{el.category}</td>
                  <td className="py-3 px-6 border-t border-gray-600">{el.skill}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
