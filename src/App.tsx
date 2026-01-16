import { useState } from 'react'
import reactLogo from '@assets/icons/react.svg'
import viteLogo from '/vite.svg'
import './styles/index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-8 flex justify-center gap-8">
              <a href="https://vite.dev" target="_blank" rel="noreferrer">
                <img src={viteLogo} className="h-24 animate-spin" style={{ animationDuration: '10s' }} alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank" rel="noreferrer">
                <img src={reactLogo} className="h-24 animate-spin" style={{ animationDuration: '3s' }} alt="React logo" />
              </a>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              Vite + React + Tailwind + TypeScript
            </h1>
            <p className="text-lg text-gray-600">
              Start building amazing things with this modern stack
            </p>
          </div>

          {/* Card */}
          <div className="card p-8">
            <div className="mb-6 text-center">
              <button
                onClick={() => setCount((count) => count + 1)}
                className="btn-primary"
              >
                Count is {count}
              </button>
            </div>
            <p className="text-center text-sm text-gray-600">
              Edit <code className="rounded bg-gray-100 px-2 py-1">src/App.tsx</code> and save to test HMR
            </p>
          </div>

          {/* Info cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="card p-6">
              <h3 className="mb-2 font-semibold text-gray-900">Path Aliases</h3>
              <p className="text-sm text-gray-600">
                Use <code className="rounded bg-gray-100 px-1">@/</code> to import from src directory
              </p>
            </div>
            <div className="card p-6">
              <h3 className="mb-2 font-semibold text-gray-900">Tailwind CSS</h3>
              <p className="text-sm text-gray-600">
                Utility-first CSS framework for rapid UI development
              </p>
            </div>
            <div className="card p-6">
              <h3 className="mb-2 font-semibold text-gray-900">TypeScript</h3>
              <p className="text-sm text-gray-600">
                Type safety and better developer experience
              </p>
            </div>
            <div className="card p-6">
              <h3 className="mb-2 font-semibold text-gray-900">ESLint</h3>
              <p className="text-sm text-gray-600">
                Code linting and formatting with React hooks support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
