import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QueryProvider } from '@/lib/react-query'
import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import { Toaster } from 'sonner'
import { router } from '@/router'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <QueryProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" richColors />
      </QueryProvider>
    </ErrorBoundary>
  </StrictMode>,
)
