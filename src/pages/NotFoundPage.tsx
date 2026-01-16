import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@components/common/Button'

export function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">Page Not Found</h2>
        <p className="mb-8 text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => navigate(-1)} variant="secondary">
            Go Back
          </Button>
          <Link to="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
