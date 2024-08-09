import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OtherPageHeader:React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const navigateToggle = useNavigate()

    const toggleNavBar = (event: EventTarget & HTMLButtonElement) => {
      const compareStr = event.value
      console.log(compareStr)
      if (compareStr == null){
        return
      }
      console.log(compareStr)
      navigateToggle( compareStr === "login" ? "/login" :
        compareStr === "about" ? "/about" :
        compareStr === "MyPage" ? "/MyPage" : "contact" )
      
      
    }

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleDarkMode = () => {
      if (darkMode) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.classList.add(savedTheme);
            setDarkMode(savedTheme === 'dark');
        }
    }, []);

  return (
        <nav id="header" className="dark:bg-gray-900 mx-auto bg-white opacity-85 shadow-md fixed top-0 inset-x-0 text-white z-50">
          <div className=" mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-white focus:outline-none"
                onClick={toggleMenu}
                >
                <span className="sr-only">Main Menu</span>
                {isOpen ? (<XMarkIcon className="h-6 w-6" aria-hidden="true" />) :
                (<Bars3Icon className="h-6 w-6" aria-hidden="true" />)}
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0">
                  <a href="/portfolio" className="text-2xl font-bold dark:text-white text-black">Kyu PortFolio</a>
                </div>
                <div className="hidden sm:block sm:ml-6 ">
                  <div className="flex space-x-4">

                    <button
                    type="button"
                    value="login"
                    className={`dark:text-white text-black hover:bg-cyan-200 hover:dark:bg-gray-600 px-3 py-2 rounded-md font-medium`}
                    onClick={(e) => toggleNavBar(e.currentTarget)}
                    >Login</button>

                    <button
                    type="button"
                    value="about"
                    className={`dark:text-white text-black hover:bg-cyan-200 hover:dark:bg-gray-600 px-3 py-2 rounded-md font-medium  `}
                    onClick={(e) => toggleNavBar(e.currentTarget)}
                    >Board</button>

                    <button
                    type="button"
                    value="MyPage"
                    className={`dark:text-white text-black hover:bg-cyan-200 hover:dark:bg-gray-600 px-3 py-2 rounded-md font-medium  `}
                    onClick={(e) => toggleNavBar(e.currentTarget)}
                    >MyPage</button>

                    <button
                    type="button"
                    value="contact"
                    className={`dark:text-white text-black hover:bg-cyan-200 hover:dark:bg-gray-600 px-3 py-2 rounded-md font-medium `}
                    onClick={(e) => toggleNavBar(e.currentTarget)}
                    >Contact</button>
                  
                    <button
                    type="button"
                    className="ml-4 p-2 dark:text-white text-black hover:bg-gray-700 rounded-md"
                    onClick={toggleDarkMode}
                    >
                    {darkMode ? (<SunIcon className="h-6 w-6" aria-hidden="true" />) : (<MoonIcon className="h-6 w-6" aria-hidden="true" />)}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
            <div className="grid grid-rows px-2 pt-2 pb-3 space-y-1">
              <button
                    type="button"
                    value="login"
                    className={`dark:text-white text-black hover:bg-cyan-200 hover:dark:bg-gray-600 px-3 py-2 rounded-md font-medium `}
                    onClick={(e) => toggleNavBar(e.currentTarget)}
                    >Login</button>

              <button
                    type="button"
                    value="board"
                    className={`dark:text-white text-black hover:bg-cyan-200 hover:dark:bg-gray-600 px-3 py-2 rounded-md font-medium  `}
                    onClick={(e) => toggleNavBar(e.currentTarget)}
                    >Board</button>

              <button
                    type="button"
                    value="MyPage"
                    className={`dark:text-white text-black hover:bg-cyan-200 hover:dark:bg-gray-600 px-3 py-2 rounded-md font-medium `}
                    onClick={(e) => toggleNavBar(e.currentTarget)}
                    >My Page</button>

              <button
                    type="button"
                    value="contact"
                    className={`dark:text-white text-black hover:bg-cyan-200 hover:dark:bg-gray-600 px-3 py-2 rounded-md font-medium  `}
                    onClick={(e) => toggleNavBar(e.currentTarget)}
                    >Contact</button>
                  
              <button
                    type="button"
                    className="ml-4 p-2 dark:text-white text-black text-center hover:bg-gray-700 rounded-md w-12 h-12"
                    onClick={toggleDarkMode}
                    >
                    {darkMode ? (<SunIcon className="h-8 w-8" aria-hidden="true" />) : (<MoonIcon className="h-8 w-8" aria-hidden="true" />)}
                    </button>
            </div>
          </div>
        </nav>
  )
}

export default OtherPageHeader