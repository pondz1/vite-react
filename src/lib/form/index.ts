import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

// Common validation schemas
export const authSchemas = {
  login: z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
  }),
  register: z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number'),
    confirmPassword: z.string(),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  }),
}

export const userSchemas = {
  profile: z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    bio: z.string().max(500, 'Bio must be less than 500 characters').optional(),
  }),
}

// Form hook factory
export function useZodForm<T extends z.ZodType>(
  schema: T,
  defaultValues?: z.infer<T>
) {
  return useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues,
  })
}

// Type inference helper
export type InferSchemaType<T extends z.ZodType> = z.infer<T>
