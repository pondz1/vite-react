# Vite + React + Tailwind + TypeScript

A modern, fast, and scalable starter template with best practices for building web applications.

## Features

- ⚡️ [Vite](https://vite.dev/) - Next generation frontend tooling
- ⚛️ [React 18](https://react.dev/) - A JavaScript library for building user interfaces
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- 📘 [TypeScript](https://www.typescriptlang.org/) - Type safety and better developer experience
- 🛣️ [React Router v7](https://reactrouter.com/) - Client-side routing
- 🔄 [Zustand](https://zustand-demo.pmnd.rs/) - Lightweight state management
- 📡 [TanStack Query](https://tanstack.com/query) - Powerful server state management
- 📝 [React Hook Form](https://react-hook-form.com/) - Performant form handling
- ✅ [Zod](https://zod.dev/) - TypeScript-first schema validation
- 🎯 [Vitest](https://vitest.dev/) - Fast unit testing
- 🧩 [Radix UI](https://www.radix-ui.com/) - Accessible UI primitives
- 🔔 [Sonner](https://sonner.emilkowal.ski/) - Beautiful toast notifications
- 📦 [ESLint](https://eslint.org/) - Code linting
- 💅 [Prettier](https://prettier.io/) - Code formatting
- 🐶 [Husky](https://typicode.github.io/husky/) - Git hooks
- 📊 [Rollup Visualizer](https://github.com/btd/rollup-plugin-visualizer) - Bundle analysis

## Project Structure

```
vite-react/
├── src/
│   ├── assets/          # Static assets (images, fonts, icons)
│   │   ├── images/
│   │   ├── fonts/
│   │   └── icons/
│   ├── components/      # Reusable components
│   │   ├── common/      # Shared components (Button, Card, ErrorBoundary, etc.)
│   │   ├── forms/       # Form components
│   │   ├── layout/      # Layout components (Header, Footer, etc.)
│   │   └── ui/          # UI primitives (Dialog, Tabs, Input, etc.)
│   ├── config/          # Configuration files
│   ├── constants/       # App constants (endpoints, storage keys, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Library wrappers (React Query, utils)
│   ├── pages/           # Page components (Home, About, NotFound)
│   ├── router/          # Route configuration
│   ├── services/        # API services and React Query hooks
│   │   ├── api/         # API client
│   │   └── queries.ts   # React Query hooks
│   ├── store/           # Zustand stores (auth, UI, etc.)
│   ├── styles/          # Global styles and CSS
│   ├── test/            # Test setup and utilities
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Root App component
│   ├── main.tsx         # Application entry point
│   └── vite-env.d.ts    # Vite TypeScript declarations
├── public/              # Public static files
├── .env.example         # Environment variables template
├── commitlint.config.js # Commitlint configuration
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML entry point
├── package.json         # Project dependencies
├── .prettierrc          # Prettier configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── vitest.config.ts     # Vitest configuration
```

## Path Aliases

The project includes path aliases for cleaner imports:

- `@/` → `./src/`
- `@components/` → `./src/components/`
- `@pages/` → `./src/pages/`
- `@hooks/` → `./src/hooks/`
- `@utils/` → `./src/utils/`
- `@services/` → `./src/services/`
- `@types/` → `./src/types/`
- `@assets/` → `./src/assets/`
- `@styles/` → `./src/styles/`
- `@config/` → `./src/config/`

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory with a bundle analysis at `dist/stats.html`.

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues automatically |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run type-check` | Run TypeScript type check |
| `npm run test` | Run tests |
| `npm run test:ui` | Run tests with UI |
| `npm run test:coverage` | Run tests with coverage report |

## State Management

### Zustand (Client State)

```typescript
import { useAuthStore } from '@/store'

function MyComponent() {
  const { user, login, logout } = useAuthStore()
  // ...
}
```

### TanStack Query (Server State)

```typescript
import { useUser, useLogin } from '@/services/queries'

function LoginPage() {
  const login = useLogin()

  const handleSubmit = (data) => {
    login.mutate(data)
  }
}
```

## Forms

The project uses React Hook Form with Zod validation:

```typescript
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(schema),
})
```

## Routing

Routes are defined in `src/router/index.ts` using React Router v7:

```typescript
// Add new routes to the router configuration
{
  path: '/dashboard',
  element: <DashboardPage />,
}
```

## Testing

Components can be tested using Vitest and React Testing Library:

```typescript
import { render, screen } from '@test/utils'
import { Button } from './Button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})
```

## Code Quality

The project includes several tools to maintain code quality:

- **ESLint**: Lints TypeScript and React code
- **Prettier**: Formats code consistently
- **Husky**: Runs lint-staged on pre-commit
- **Commitlint**: Enforces conventional commits
- **lint-staged**: Runs linters on staged files

### Commit Message Format

Follow the conventional commit format:

```
feat: add new feature
fix: fix bug
docs: update documentation
style: format code
refactor: refactor code
perf: improve performance
test: add tests
build: update build
ci: update CI
chore: update deps
```

## Environment Variables

Copy `.env.example` to `.env` and configure your environment:

```bash
cp .env.example .env
```

## Learn More

- [Vite Documentation](https://vite.dev/)
- [React Documentation](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [TanStack Query](https://tanstack.com/query/latest/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Radix UI](https://www.radix-ui.com/)
- [Vitest](https://vitest.dev/)

## License

MIT
