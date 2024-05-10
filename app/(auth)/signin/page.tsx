import SocialLogin from '@/components/social-login'
import SigninForm from '@/components/signin-form'


import Link from 'next/link'
import exp from 'constants'


export const metadata = {
  title: 'Sign In - APIGen',
  description: 'Page description',
}
export default function SignIn() {
  return (
    <>
      <div className="mb-8">
        <h1 className="h2 font-uncut-sans">Welcome Back</h1>
      </div>
      <SigninForm />
      <SocialLogin />
      <div className="mt-6">
        <div className="text-sm text-gray-400">
          Don't you have an account? <Link className="font-medium text-white hover:text-gray-300" href="/signup">Sign Up</Link>
        </div>
      </div>    
    </>
  )
}
