import { Link } from 'react-router-dom'
import { Button } from '@components/common/Button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@components/common/Card'

export function HomePage() {
  return (
    <div className="mx-auto max-w-4xl">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
          Welcome to ViteReact
        </h1>
        <p className="text-lg text-gray-600">
          A modern, fast, and scalable starter template with best practices
        </p>
      </div>

      {/* Features Grid */}
      <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>⚡ Fast Development</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Vite provides instant server start and lightning-fast HMR for a seamless development experience.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🎨 Beautiful UI</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Built with Tailwind CSS and Radix UI for creating stunning, accessible interfaces quickly.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>📘 Type Safe</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Full TypeScript support with strict type checking for better code quality and developer experience.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🔄 State Management</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Zustand for client state and TanStack Query for server state - a powerful combination.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>✅ Testing</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Vitest and React Testing Library setup out of the box for comprehensive testing.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🛠️ Developer Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              ESLint, Prettier, Husky, and Commitlint configured for maintaining code quality.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="rounded-lg bg-primary-50 p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Ready to Get Started?
        </h2>
        <p className="mb-6 text-gray-600">
          Check out the about page to learn more about the project structure.
        </p>
        <Link to="/about">
          <Button size="lg">Learn More</Button>
        </Link>
      </div>
    </div>
  )
}
