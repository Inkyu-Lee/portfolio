import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';

const NavHeader:React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [darkMode, setDarkMode] = useState<boolean>(false);

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
        console.log(savedTheme)
    }, []);

  return (
    <nav className="fixed top-0 inset-x-0 bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <a href="#home" className="text-2xl font-bold">MySite</a>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a href="#home" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#services" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#about" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#contact" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                <button
                  type="button"
                  className="ml-4 p-2 text-gray-300 hover:bg-gray-700 rounded-md"
                  onClick={toggleDarkMode}
                >
                  {darkMode ? (
                    <SunIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MoonIcon className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#home" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#services" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="#about" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#contact" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default NavHeader