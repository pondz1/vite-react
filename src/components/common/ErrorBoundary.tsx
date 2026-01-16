import { Component, ErrorInfo, ReactNode } from 'react'
import { Button } from './Button'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="max-w-md text-center">
            <h1 className="mb-4 text-6xl font-bold text-gray-900">Oops!</h1>
            <h2 className="mb-4 text-2xl font-semibold text-gray-700">Something went wrong</h2>
            {this.state.error && (
              <p className="mb-8 text-sm text-gray-600">
                {this.state.error.message}
              </p>
            )}
            <Button
              onClick={() => window.location.reload()}
              variant="primary"
            >
              Reload Page
            </Button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
