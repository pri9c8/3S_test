# 3S_test

## 🚀 Быстрый старт

### Предварительные требования

- Node.js 18+ / npm 9+
- Git

## Установка

### Клонируйте репозиторий

git clone <repository-url>
cd frontend

### Установите зависимости

npm install

### Создайте .env на основе примера .env.example

.env

удалите у '.env.example => .example'

# Запустите дев-сервер

npm run dev

## 📁 Структура проекта

```text
frontend/
├── src/
│   ├── app/
│   │   └── App.tsx
│   ├── assets/
│   │   └── icon/
│   │       ├── arrowLeftPrev.tsx
│   │       ├── arrowRightNext.tsx
│   │       ├── chevronDown.tsx
│   │       ├── plus.tsx
│   │       └── index.ts
│   ├── components/
│   │   └── ui/
│   │       ├── addButton.tsx
│   │       ├── buttonPeriodNav.tsx
│   │       ├── selectYear.tsx
│   │       └── index.ts
│   ├── constants/
│   │   ├── months.ts
│   │   └── table.ts
│   ├── features/
│   │   └── reportTable/
│   │       ├── model/
│   │       │   └── useFetch.ts
│   │       ├── ReportTable.tsx
│   │       └── index.ts
│   ├── hooks/
│   │   └── useFetch.ts
│   ├── lib/
│   │   └── arrayUtils.ts
│   └── types/
│       ├── table.ts
│       └── ui.ts
├── .env.example
├── .gitignore
├── vite.config.ts
├── tsconfig.app.json
└── README.md
```
