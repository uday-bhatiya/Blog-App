import React from 'react'
import {Link} from "react-router-dom"

const Signup = () => {
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
          <form className='flex flex-col gap-4'> 
            <div>
            <label className='block dark:text-white'>Username</label>
            <input className='w-full p-2 border-solid border-2 border-slate-200 rounded-md' type="text" placeholder='username' />
            </div>
            <div>
            <label className='block dark:text-white'>Email</label>
            <input className='w-full p-2 border-solid border-2 border-slate-200 rounded-md' type="email" placeholder='email' />
            </div>
            <div>
            <label className='block dark:text-white'>Password</label>
            <input className='w-full p-2 border-solid border-2 border-slate-200 rounded-md' type="password" placeholder='password' />
            </div>

            <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue"
          >
            Sign Up
          </button>
          </form>
          <div className=' mt-5 text-sm dark:text-white'>
            <span>Already have an account? <Link className='text-blue-600' to="/sign-in">Sign in</Link> </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
