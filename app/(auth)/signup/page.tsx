import Link from 'next/link'
import SocialLogin from '@/components/social-login'
import SigninForm from '@/components/signin-form'
export const metadata = {
  title: 'Sign Up - APIGen',
  description: 'Page description',
}

export default function SignUp() {
  return (
    <>
      <div className="mb-8">
        <h1 className="h2 font-uncut-sans">Sign Up</h1>
      </div>
      <SigninForm />
      <SocialLogin />
      <div className="text-sm text-gray-500 italic mt-6 mb-4">
        By filling out this form, I consent to the collection and use of my personal data Search Authority.
      </div>
      <div className="pt-4 border-t border-gray-800">
        <div className="text-sm text-gray-400">
          Already have an account? <Link className="font-medium text-white hover:text-gray-400" href="/signin">Sign In</Link>
        </div>
      </div>    
    </>
  )
}
