import { Link } from 'react-router-dom'
import { Button } from '@components/common/Button'
import { Card, CardHeader, CardTitle, CardContent } from '@components/common/Card'

export function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">About This Project</h1>
        <p className="text-lg text-gray-600">
          This is a comprehensive starter template built with modern web technologies.
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Project Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
{`src/
├── assets/        # Static assets
├── components/    # Reusable components
│   ├── common/    # Shared components
│   ├── layout/    # Layout components
│   └── ui/        # UI primitives
├── config/        # Configuration files
├── hooks/         # Custom hooks
├── lib/           # Library wrappers
├── pages/         # Page components
├── router/        # Route configuration
├── services/      # API services
├── store/         # State management
├── styles/        # Global styles
├── test/          # Test setup
├── types/         # TypeScript types
└── utils/         # Utility functions`}
            </pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-600">
              <li>• <strong>Vite</strong> - Next generation build tool</li>
              <li>• <strong>React 18</strong> - UI library</li>
              <li>• <strong>TypeScript</strong> - Type safety</li>
              <li>• <strong>Tailwind CSS</strong> - Styling</li>
              <li>• <strong>React Router v7</strong> - Routing</li>
              <li>• <strong>Zustand</strong> - Client state</li>
              <li>• <strong>TanStack Query</strong> - Server state</li>
              <li>• <strong>Radix UI</strong> - Component primitives</li>
              <li>• <strong>React Hook Form</strong> - Form handling</li>
              <li>• <strong>Zod</strong> - Schema validation</li>
              <li>• <strong>Vitest</strong> - Testing framework</li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex justify-center">
          <Link to="/">
            <Button variant="secondary">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
