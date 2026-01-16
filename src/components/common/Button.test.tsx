import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { render } from '@test/utils'
import { Button } from './Button'

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies primary variant styles by default', () => {
    render(<Button>Primary</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-primary-600')
  })

  it('shows loading state when isLoading is true', () => {
    render(<Button isLoading>Loading</Button>)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('is disabled when loading', () => {
    render(<Button isLoading>Loading</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  it('applies size classes correctly', () => {
    render(<Button size="lg">Large</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('h-12')
  })
})
