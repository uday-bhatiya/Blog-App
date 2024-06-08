import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"

const Signin = () => {

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleChange = (e) => {
    // console.log(e.target)
    setFormData(
      {...formData, [e.target.id]: e.target.value.trim() }
    )
  }
  // console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      return setErrorMessage("Please fill out all fields")
    }
    try {
      const res = await fetch('/api/v1/user/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      })
      const data =   await res.json()
      if (res.ok) {
        navigate('/sign-in')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='min-h-screen pt-20 bg-white dark:bg-gray-800 '>
    <div className='flex flex-col p-3 max-w-3xl mx-auto md:flex-row md:items-start md:justify-center md:gap-5'>
      <div className='flex-1 dark:text-white'>
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          Blogger
        </div>
        <p className='text-sm my-5'>This is demo project, you can signup with email and password or with google</p>
      </div>

      <div className='flex-1'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}> 
          <div>
          <label className='block dark:text-white'>Username</label>
          <input id='username' className='w-full p-2 border-solid border-2 border-slate-200 rounded-md' type="text" placeholder='username' onChange={handleChange} />
          </div>
          <div>
          <label className='block dark:text-white'>Password</label>
          <input id='password' className='w-full p-2 border-solid border-2 border-slate-200 rounded-md' type="password" placeholder='password'onChange={handleChange} />
          </div>

          <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue"
        >
          Sign in
        </button>
        </form>
        <div className=' mt-5 text-sm dark:text-white'>
          <span>Don't have an account? <Link className='text-blue-600' to="/sign-up">Sign up</Link> </span>
        </div>
        {
          errorMessage && (
            <div className='w-full bg-red-400 py-2 px-1 text-black rounded-md mt-2'>
              {errorMessage}
            </div>
          )
        }        
      </div>
    </div>
  </div>
  )
}

export default Signin
