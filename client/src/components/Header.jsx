import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import {AiOutlineSearch} from "react-icons/ai"
import { FaMoon, FaSun } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
     <nav className="bg-white dark:bg-gray-800 p-4 shadow-md relative">
      <div className="container mx-auto flex justify-between items-center">
      <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-800 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isMenuOpen ? <MdOutlineClose /> : <RiMenu2Fill />} 
          </button>
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          Blogger
        </div>
        <div className='lg:flex hidden space-x-4 mt-4 sm:mt-0'>
        <Link to="/" className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
          Home
        </Link>
        <Link to="/about" className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
          About
        </Link>
        <Link to="/project" className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
          Project
        </Link>
      </div>
          {
            isMenuOpen && (
              <div className='block lg:hidden h-min w-full left-0 absolute top-16 py-4 sm:mt-0 shadow-md bg-white dark:bg-gray-800'>
              <Link to="/" onClick={ () => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                Home
              </Link>
              <Link to="/about" onClick={ () => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                About
              </Link>
              <Link to="/project" onClick={ () => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                Project
              </Link>
            </div>
            )
          }
        <div className="flex items-center space-x-4">
          <div className={`relative ${isSearchVisible ? 'block' : 'hidden'} sm:block`}>
            <input
              type="text"
              className="input w-full sm:w-auto sm:flex-grow bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search..."
            />
          </div>
          <button
            onClick={toggleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:hidden"
          >
            {isSearchVisible ? <MdOutlineClose /> : <AiOutlineSearch/>}
          </button>
          <button
            className="hidden sm:block bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <AiOutlineSearch/>
          </button>
          <button
            onClick={toggleTheme}
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {darkMode ? <FaSun/> : <FaMoon/>}
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
