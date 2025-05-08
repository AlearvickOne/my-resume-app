export function WorkExperience() {
  return (
    <section
      id="work"
      className="bg-gray-900 text-white rounded-lg shadow-xl md:p-8 py-5 mb-10 transform transition-all duration-500 hover:scale-102 hover:shadow-2xl"
    >
      <div className=" mx-auto md:px-6 px-2">
        <h2 className="text-3xl font-semibold text-teal-400 mb-6">Опыт работы</h2>

        <div className="space-y-6">
          <div className="p-6 bg-gray-800 rounded-lg shadow-xl transform transition-transform hover:scale-102 hover:shadow-2xl hover:bg-gray-700">
            <h3 className="text-2xl font-semibold text-teal-400">Merkatys.ru - Fullstack разработчик</h3>
            <p className="text-sm text-gray-400 mb-3">6 месяцев (06.2024 - 12.2024)</p>
            <ul className="space-y-2 text-gray-300 list-disc pl-[22px]">
              <li>Разрабатывал и поддерживал SPA-приложение на React, Next.js + Express и Nest.js</li>
              <li>Оптимизировал SQL-запросы для ускорения загрузки больших данных</li>
              <li>Реализовал real-time обновления через WebSocket для live-чатов</li>
              <li>Интегрировал GetCourse API для синхронизации данных с образовательной платформой</li>
              <li>Добавлял графики в dashboard используя Chart.js</li>
              <li>Создавал кастомные таблицы с помощью AG-Grid</li>
              <li>Разрабатывал адаптивные интерфейсы по макетам Figma (mobile/desktop)</li>
              <li>Участвовал в Code Review</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow-xl transform transition-transform hover:scale-102 hover:shadow-2xl hover:bg-gray-700">
            <h3 className="text-2xl font-semibold text-teal-400">ООО Хайтек-Сервис - Разработчик ПО</h3>
            <p className="text-sm text-gray-400 mb-3">1 год (09.2018 - 09.2019)</p>
            <ul className="space-y-2 text-gray-300  list-disc pl-[22px]">
              <li>Разработка системы учета картриджей (Frontend: JS/TS, Backend: C#)</li>
              <li>Позже функционал был перенесен на React Functional Component</li>
              <li>Реализация экспорта информации в Excel формат</li>
              <li>Поддерживал приложение, проводил оптимизацию, добавлял новые фичи для того, чтобы упростить работу пользователя.</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow-xl transform transition-transform hover:scale-102 hover:shadow-2xl hover:bg-gray-700">
            <h3 className="text-2xl font-semibold text-teal-400">Freelance - Сторонние заказы</h3>
            <p className="text-sm text-gray-400 mb-3">4 месяца</p>
            <ul className="space-y-2 text-gray-300  list-disc pl-[22px]">
              <li>Выполнял сторонние заказы, верстал landing, исправлял баги, проводил оптимизацию сайтов.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
