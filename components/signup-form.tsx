
'use client'
import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SignupForm(){
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [password, setPassword] = useState("")

    const handleChangeEmail = (e:any) => {
        setEmail(e.target.value)
    }
    const handleChangeName = (e:any) => {
        setName(e.target.value)
    }
    const handleChangeSurname = (e:any) => {
        setSurname(e.target.value)
    }
    const handleChangePassword = (e:any) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e:any) => {
      e.preventDefault()
      router.push("/thankyou")
      axios.post("http://18.216.204.3:3000/auth/signup", {
        email,
        name,
        surname,
        password
      })
    }
    return(
        <form>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 font-medium mb-1" htmlFor="email">Email <span className="text-white">*</span></label>
            <input id="email" className="form-input py-2 w-full" type="email" required />
          </div>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <div className="sm:w-1/2">
              <label className="block text-sm text-gray-400 font-medium mb-1" htmlFor="name">Name <span className="text-white">*</span></label>
              <input id="name" className="form-input py-2 w-full" type="text" required />
            </div>
            <div className="sm:w-1/2">
              <label className="block text-sm text-gray-400 font-medium mb-1" htmlFor="surname">Surname <span className="text-white">*</span></label>
              <input id="surname" className="form-input py-2 w-full" type="text" required />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 font-medium mb-1" htmlFor="password">Password</label>
            <input id="password" className="form-input py-2 w-full" type="password" autoComplete="on" required />
          </div>
        </div>
        <div className="mt-6">
          <button className="btn-sm text-white bg-sky-800 hover:bg-sky-700 w-full shadow-lg group">
            Sign Up <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
          </button>
        </div>
      </form>
    )
}