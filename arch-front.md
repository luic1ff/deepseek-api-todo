src/
├─ app/                # Корневой слой приложения
│   ├─ providers/      # Провайдеры (Context, QueryClientProvider и т.п.)
│   ├─ handlers/       # Глобальные обработчики для маршутов 
│   ├─ middleware/     # middleware 
│   ├─ router/         # Маршрутизация (react-router, lazy-loading)
│   │    ├─ routes/
│   │    │    └─ routes.tsx   # Все маршруты приложения
│   │    └─ router.tsx      # Роутер       
│   └─ store/          # Глобальное состояние (redux/zustand/jotai) 
│
├─ pages/              # Страницы (каждая = композиция из features + widgets)
│   ├─ Home/
│   ├─ Login/
│   ├─ Profile/
│   └─ ...
│
├─ widgets/            # Крупные части интерфейса
│   ├─ Header/
│   ├─ Sidebar/
│   ├─ Footer/
│   └─ ...
│
├─ features/           # Бизнес-фичи (авторизация, фильтр, поиск и т.п.)
│   ├─ auth/
│   │   ├─ ui/         # UI-компоненты (LoginForm, LogoutButton)
│   │   ├─ model/      # Логика (zustand/redux hooks, запросы к API)
│   │   └─ index.ts
│   ├─ search/
│   ├─ cart/
│   └─ ...
│
├─ entities/           # Сущности (User, Product, Order и т.д.)
│   ├─ user/
│   │   ├─ ui/         # UserCard, UserAvatar
│   │   ├─ model/      # Типы, запросы, хранилище
│   │   └─ index.ts
│   └─ product/
│
├─ shared/             # Общие переиспользуемые модули
│   ├─ ui/             # Базовые UI-компоненты (Button, Input, Modal...)
│   ├─ api/            # Запросы к API (axios/fetch конфиг + endpoints)
│   ├─ hooks/          # Общие хуки
│   ├─ lib/            # Утилиты (helpers, formatters)
│   ├─ config/         # Конфиги (apiUrl, настройки проекта)
│   └─ types/          # Общие TS-типы (User, ApiResponse и т.п.)
│
├─ index.css           # Tailwind base + кастомные стили
└─ main.tsx            # Vite entrypoint

[pages] <- props <- [handlers] <- API <- [features/model] <- [shared/api]

[pages] -> [features/ui] -> [entities/ui] -> [shared/ui]