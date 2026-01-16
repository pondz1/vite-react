import { apiClient } from './api/client'
import type { User, ApiResponse } from '@/types'

// Auth service
export const authService = {
  async login(email: string, password: string) {
    return apiClient.post<{ user: User; token: string }>('/auth/login', { email, password })
  },

  async register(name: string, email: string, password: string) {
    return apiClient.post<{ user: User; token: string }>('/auth/register', {
      name,
      email,
      password,
    })
  },

  async logout() {
    return apiClient.post('/auth/logout')
  },

  async refreshToken() {
    return apiClient.post<{ token: string }>('/auth/refresh')
  },
}

// User service
export const userService = {
  async getProfile() {
    return apiClient.get<User>('/user/profile')
  },

  async updateProfile(data: Partial<User>) {
    return apiClient.patch<User>('/user/profile', data)
  },

  async updateSettings(settings: Record<string, unknown>) {
    return apiClient.patch<User>('/user/settings', settings)
  },
}
