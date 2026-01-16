import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAuthStore } from '@/store'
import { Button } from '@components/common/Button'
import { Input } from '@components/ui/Input'
import { toast } from 'sonner'

// Define login schema
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

type LoginFormValues = z.infer<typeof loginSchema>

export function LoginForm() {
  const { login, isLoading } = useAuthStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await login(data.email, data.password)
      toast.success('Logged in successfully!')
    } catch (error) {
      toast.error('Login failed. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-md space-y-6">
      <div>
        <h2 className="mb-2 text-2xl font-bold text-gray-900">Sign In</h2>
        <p className="text-sm text-gray-600">Enter your credentials to access your account</p>
      </div>

      <Input
        label="Email"
        type="email"
        placeholder="you@example.com"
        error={errors.email?.message}
        {...register('email')}
      />

      <Input
        label="Password"
        type="password"
        placeholder="••••••••"
        error={errors.password?.message}
        {...register('password')}
      />

      <Button type="submit" className="w-full" isLoading={isLoading}>
        Sign In
      </Button>

      <p className="text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <a href="#" className="font-medium text-primary-600 hover:text-primary-700">
          Sign up
        </a>
      </p>
    </form>
  )
}
