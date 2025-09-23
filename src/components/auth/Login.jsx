import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAuthStore } from '../../store/authStore'
import { Target, Mail, Lock, Eye, EyeOff, Smartphone } from 'lucide-react'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loginMethod, setLoginMethod] = useState('email') // 'email' or 'phone'
  const { login } = useAuthStore()
  const navigate = useNavigate()
  
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      // Mock user data - in real app, this would come from API
      const userData = {
        id: 1,
        email: data.email || `${data.phone}@temp.com`,
        phone: data.phone || null,
        name: data.email ? data.email.split('@')[0] : `User${data.phone?.slice(-4)}`,
        role: (data.email && data.email.includes('brand')) ? 'brand' : 'influencer',
        location: 'India',
        currency: 'INR'
      }
      
      login(userData)
      setIsLoading(false)
      navigate('/homepage')
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-saffron/10 via-white to-green-india/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-saffron to-green-india p-3 rounded-full">
              <Target className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            भारत में साइन इन करें
          </h2>
          <p className="mt-1 text-xl font-bold text-gray-700">
            Sign in to your account
          </p>
          <p className="mt-2 text-sm text-gray-600">
            या{' '}
            <Link to="/register" className="font-medium text-saffron hover:text-orange-600">
              नया खाता बनाएं / create new account
            </Link>
          </p>
        </div>

        {/* Login Method Toggle */}
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            type="button"
            onClick={() => setLoginMethod('email')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              loginMethod === 'email'
                ? 'bg-white text-saffron shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Mail className="h-4 w-4 inline mr-2" />
            Email
          </button>
          <button
            type="button"
            onClick={() => setLoginMethod('phone')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              loginMethod === 'phone'
                ? 'bg-white text-saffron shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Smartphone className="h-4 w-4 inline mr-2" />
            Phone
          </button>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {loginMethod === 'email' ? (
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address / ईमेल पता
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    {...register('email', { 
                      required: 'Email is required / ईमेल आवश्यक है',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address / अमान्य ईमेल पता'
                      }
                    })}
                    type="email"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-saffron focus:border-saffron"
                    placeholder="आपका ईमेल / your@email.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            ) : (
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number / फ़ोन नंबर
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Smartphone className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="absolute inset-y-0 left-10 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 text-sm">+91</span>
                  </div>
                  <input
                    {...register('phone', { 
                      required: 'Phone number is required / फ़ोन नंबर आवश्यक है',
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: 'Enter valid 10-digit mobile number / वैध 10-अंकीय मोबाइल नंबर दर्ज करें'
                      }
                    })}
                    type="tel"
                    maxLength="10"
                    className="block w-full pl-20 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-saffron focus:border-saffron"
                    placeholder="9876543210"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>
            )}

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password / पासवर्ड
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register('password', { 
                    required: 'Password is required / पासवर्ड आवश्यक है',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters / पासवर्ड कम से कम 6 अक्षर का होना चाहिए'
                    }
                  })}
                  type={showPassword ? 'text' : 'password'}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-saffron focus:border-saffron"
                  placeholder="अपना पासवर्ड दर्ज करें"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-saffron to-orange-600 hover:from-orange-600 hover:to-saffron focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-saffron disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isLoading ? 'साइन इन हो रहा है... / Signing in...' : 'साइन इन करें / Sign in'}
            </button>
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600">
              <strong>Demo:</strong> Use any email (with 'brand' for brand role)
            </p>
            <p className="text-xs text-gray-500">
              Or phone: any 10-digit number starting with 6-9
            </p>
            <div className="flex items-center justify-center space-x-2 text-xs text-gray-400">
              <span>🇮🇳</span>
              <span>Made in India for Indian Creators</span>
              <span>🇮🇳</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login