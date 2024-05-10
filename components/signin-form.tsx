'use client'
import axios from "axios"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"



export default function SigninForm(){
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleChangeEmail = (e:any) => {
        setEmail(e.target.value)
    }
    const handleChangePassword = (e:any) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e:any) => {
      e.preventDefault()

      axios
        .post("http://18.216.204.3:3000/auth/signin", {
          email,
          password
        })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
        router.push("/thankyou")

    }
    return(
    <form>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 font-medium mb-1" htmlFor="email" >Email</label>
            <input id="email" className="form-input py-2 w-full" type="email" required />
          </div>
          <div>
            <div className="flex justify-between">
              <label className="block text-sm text-gray-400 font-medium mb-1" htmlFor="password">Password</label>
              <Link className="text-sm font-medium text-white hover:text-gray-300 ml-2" href="/reset-password">Forgot your password?</Link>
            </div>
            <input id="password" className="form-input py-2 w-full" type="password" autoComplete="on" required />
          </div>
        </div>
        <div className="mt-6">
          <button className="btn-sm text-white bg-sky-800 hover:bg-sky-700 w-full shadow-lg group" onClick={handleSubmit}>
            Sign In <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
          </button>
        </div>
      </form>
    )
}