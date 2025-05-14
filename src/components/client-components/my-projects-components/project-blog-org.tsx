"use client";

import dynamic from "next/dynamic";
import { MyProjectWrapper } from "@/components/wrappers";

const VideoPlayerPlyr = dynamic(() => import("@/components/client-components").then((mod) => mod.VideoPlayerPlyr), { ssr: false });

export function ProjectBlogOrg() {
  return (
    <MyProjectWrapper>
      <h2 className="text-[24px] font-semibold text-teal-400 mb-6">Blog-org</h2>

      <VideoPlayerPlyr src="/videos/blog-org-present.mp4" idDOM="blog-org-present" />

      <details className="mt-5 rounded-md border border-gray-600 bg-gray-800 text-gray-200 shadow-md open:shadow-lg transition-all duration-150">
        <summary className="cursor-pointer px-4 py-2 text-lg font-semibold hover:text-white">Что входит в проект</summary>
        <div className="px-6 py-4 text-sm leading-relaxed text-gray-300">
          <p className="mb-4">Проект-блог, сделанный с использованием NX. Включает в себя:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Регистрация и авторизация.</li>
            <li>Список блогов.</li>
            <li>Страница аккаунта пользователя.</li>
            <li>Каждый блог — отдельный компонент, получаемый из базы по ID.</li>
            <li>Чат-комментарии, реализованные через WebSocket для каждого блога.</li>
            <li>Админка: управление пользователями и блогами через панель администратора (создание и редактирование).</li>
            <li>3 роли: Пользователь, Редактор, Админ.</li>
            <li>Защита маршрутов по ролям.</li>
            <li>Куки, Middleware, Guards и другие механизмы защиты.</li>
          </ol>

          <div className="mt-6">
            <p className="font-semibold text-gray-100">Стек технологий:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>NX + Tailwind</li>
              <li>TypeScript</li>
              <li>Next.js (Page Router)</li>
              <li>MobX + Inversify</li>
              <li>NestJS</li>
              <li>TypeORM</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </details>
    </MyProjectWrapper>
  );
}
