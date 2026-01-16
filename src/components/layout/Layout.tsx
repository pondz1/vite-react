import { Outlet, Link, useLocation } from 'react-router-dom'
import { useUIStore } from '@/store'

export function Layout() {
  const { isSidebarOpen } = useUIStore()
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/" className="text-xl font-bold text-primary-600">
                ViteReact
              </Link>
              <nav className="hidden md:flex md:gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                      location.pathname === item.path
                        ? 'text-primary-600'
                        : 'text-gray-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-gray-600">
            © 2025 ViteReact. Built with Vite, React, Tailwind, and TypeScript.
          </p>
        </div>
      </footer>
    </div>
  )
}
