import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { authService, userService } from '.'
import { API_ENDPOINTS } from '@/constants'
import type { User } from '@/types'
import { useAuthStore } from '@/store'
import { toast } from 'sonner'

// Auth queries
export function useLogin() {
  const queryClient = useQueryClient()
  const setUser = useAuthStore((state) => state.setUser)

  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      authService.login(email, password),
    onSuccess: (data) => {
      setUser(data.user)
      localStorage.setItem('auth_token', data.token)
      queryClient.invalidateQueries({ queryKey: ['user'] })
      toast.success('Logged in successfully')
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Login failed')
    },
  })
}

export function useRegister() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      name,
      email,
      password,
    }: {
      name: string
      email: string
      password: string
    }) => authService.register(name, email, password),
    onSuccess: (data) => {
      localStorage.setItem('auth_token', data.token)
      queryClient.invalidateQueries({ queryKey: ['user'] })
      toast.success('Account created successfully')
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Registration failed')
    },
  })
}

export function useLogout() {
  const queryClient = useQueryClient()
  const logout = useAuthStore((state) => state.logout)

  return useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      logout()
      localStorage.removeItem('auth_token')
      queryClient.clear()
      toast.success('Logged out successfully')
    },
  })
}

// User queries
export function useUser() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  return useQuery({
    queryKey: ['user'],
    queryFn: () => userService.getProfile(),
    enabled: isAuthenticated,
    retry: false,
  })
}

export function useUpdateProfile() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: Partial<User>) => userService.updateProfile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      toast.success('Profile updated successfully')
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to update profile')
    },
  })
}
