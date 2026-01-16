import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

// Auth store interface
interface AuthState {
  user: { id: string; name: string; email: string } | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  setUser: (user: { id: string; name: string; email: string } | null) => void
}

// Create auth store with devtools and persistence
export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        login: async (email, password) => {
          set({ isLoading: true })
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000))
          set({
            user: { id: '1', name: 'John Doe', email },
            isAuthenticated: true,
            isLoading: false,
          })
        },
        logout: () => {
          set({ user: null, isAuthenticated: false })
        },
        setUser: (user) => set({ user, isAuthenticated: !!user }),
      }),
      { name: 'auth-storage' }
    )
  )
)

// UI store for global UI state
interface UIState {
  isSidebarOpen: boolean
  isDarkMode: boolean
  toggleSidebar: () => void
  toggleDarkMode: () => void
}

export const useUIStore = create<UIState>()(
  devtools(
    persist(
      (set) => ({
        isSidebarOpen: true,
        isDarkMode: false,
        toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
        toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      }),
      { name: 'ui-storage' }
    )
  )
)

// Notification store
interface NotificationState {
  notifications: Array<{ id: string; message: string; type: 'success' | 'error' | 'info' }>
  addNotification: (message: string, type: 'success' | 'error' | 'info') => void
  removeNotification: (id: string) => void
}

export const useNotificationStore = create<NotificationState>()((set) => ({
  notifications: [],
  addNotification: (message, type) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        { id: Date.now().toString(), message, type },
      ],
    })),
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
}))
