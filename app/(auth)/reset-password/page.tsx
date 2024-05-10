export const metadata = {
  title: 'Reset Password - APIGen',
  description: 'Page description',
}

export default function ResetPassword() {
  return (
    <>
      <div className="mb-8">
        <h1 className="h2 font-uncut-sans mb-4">Reset password</h1>
        <p className="text-gray-400">Enter your account's email address.</p>
      </div>
      <form>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 font-medium mb-1" htmlFor="email">Email</label>
            <input id="email" className="form-input py-2 w-full" type="email" required />
          </div>
        </div>
        <div className="mt-6">
          <button className="btn-sm text-white bg-sky-800 hover:bg-sky-700 w-full shadow-lg group">
            Reset Password <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
          </button>
        </div>
      </form>    
    </>
  )
}
