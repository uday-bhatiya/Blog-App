import React from 'react'
import { FaFacebook, FaInstagram, FaGithub  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='p-2 bg-white dark:bg-gray-800'>
        <div className='max-w-3xl mx-auto'>
      <div className='flex gap-5 items-start justify-between flex-wrap text-gray-800 dark:text-white'>
      <div className="text-2xl font-bold">
          Blogger
        </div>
        <div className='flex flex-col'>
            <h3 className='text-lg font-bold my-2 uppercase'>about</h3>
            <span className='text-sm'>100 JS Projects</span>
            <span className='text-sm'>Our Blogs</span>
        </div>
        <div className='flex flex-col'>
            <h3 className='text-lg font-bold my-2 uppercase'>follow us</h3>
            <span className='text-sm'>Github</span>
            <span className='text-sm'>Discord</span>
        </div>
        <div className='flex flex-col'>
            <h3 className='text-lg font-bold my-2 uppercase'>legal</h3>
            <span className='text-sm'>Privacy Policy</span>
            <span className='text-sm'>Terms & Conditations</span>
        </div>
      </div>
      <div className='flex items-center justify-between mt-5 border border-t-teal-950 dark:border-gray-800 dark:border-t-teal-100  py-2 text-gray-800 dark:text-white'>
        <div><span>&copy;2024 Copyright</span></div>
        <div className='flex gap-5 '>
            <FaFacebook/>
            <FaInstagram/>
            <FaXTwitter/>
            <FaGithub/>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
