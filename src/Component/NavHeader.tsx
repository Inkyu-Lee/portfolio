import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';

const NavHeader:React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [NavScroll, setNavScroll] = useState({
      header: false,
      main: false,
      project: false,
      footer: false,
    });

    const getElementPosition = () => {
      const header = document.getElementById('header');
      const main = document.getElementById('main');
      const project = document.getElementById('project');
      const footer = document.getElementById('footer');
      const scrollY = window.scrollY;

      if(header != null && main != null && project != null && footer != null){
      }else{
        return;
      }

      const headerPosition = Math.floor(scrollY + header.getBoundingClientRect().top) ;
      const mainPosition = Math.floor(scrollY + main.getBoundingClientRect().top) -70;
      const projectPosition = Math.floor(scrollY + project.getBoundingClientRect().top) -70;
      const footerPosition = Math.floor(scrollY + footer.getBoundingClientRect().top) - 70;

      setNavScroll({
        header: scrollY >= headerPosition && scrollY < mainPosition,
        main: scrollY >= mainPosition && scrollY < projectPosition,
        project: scrollY >= projectPosition && scrollY < footerPosition - 250,
        footer: scrollY + 250 >= footerPosition,
      })
    }


    useEffect(() => {
      window.addEventListener('scroll', getElementPosition);
      return () => window.removeEventListener('scroll', getElementPosition);
    }, [NavScroll])


    const toggleNavBar = (event: EventTarget & HTMLButtonElement) => {
      const target = document.getElementById(event.value)
      if (target == null){
        return
      }
      const scrollY = event.value === 'header' ? 0 : window.scrollY
      const setScrollY = Math.floor((target.getBoundingClientRect().top) + scrollY ) - 60;

      window.scrollTo({top: setScrollY,behavior:'smooth',});
      
      
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
        <nav id="header" className="dark:bg-gray-900 bg-white opacity-85 shadow-md fixed top-0 inset-x-0 text-white z-50">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-white focus:outline-none"
                onClick={toggleMenu}
                >
                <span className="sr-only">Main Menu</span>
                {isOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                )}
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0">
                  <a href="/" className="text-2xl font-bold dark:text-white text-black">Kyu PortFolio</a>
                </div>
                <div className="hidden sm:block sm:ml-6 ">
                  <div className="flex space-x-4">

                    <button
                    type="button"
                    value="header"
                    className={`dark:text-white text-black hover:bg-cyan-200 hover:dark:bg-gray-600 px-3 py-2 rounded-md font-medium ${NavScroll.header ? 'bg-cyan-200 dark:bg-gray-600' : ''}`}
                    onClick={(e) => toggleNavBar(e.currentTarget)}
                    >Home</button>

                    <button
                    type="button"
                    value="main"
                    className={`dark:text-white text-black hover:bg-cyan-200 hover:dark:bg-gray-600 px-3 py-2 rounded-md font-medium ${NavScroll.main ? 'bg-cyan-200 dark:bg-gray-600' : ''} `}
                    onClick={(e) => toggleNavBar(e.currentTarget)}
                    >About</button>

                    <button
                    type="button"
                    value="project"
                    className={`dark:text-white text-black hover:bg-cyan-200 hover:dark:bg-gray-600 px-3 py-2 rounded-md font-medium ${NavScroll.project ? 'bg-cyan-200 dark:bg-gray-600' : ''} `}
                    onClick={(e) => toggleNavBar(e.currentTarget)}
                    >Project</button>

                    <button
                    type="button"
                    value="footer"
                    className={`dark:text-white text-black hover:bg-cyan-200 hover:dark:bg-gray-600 px-3 py-2 rounded-md font-medium ${NavScroll.footer ? 'bg-cyan-200 dark:bg-gray-600' : ''} `}
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
                    value="header"
                    className={`dark:text-white text-black hover:bg-cyan-200 hover:dark:bg-gray-600 px-3 py-2 rounded-md font-medium ${NavScroll.header ? 'bg-cyan-200 dark:bg-gray-600' : ''}`}
                    onClick={(e) => toggleNavBar(e.currentTarget)}
                    >Home</button>

                    <button
                    type="button"
                    value="main"
                    className={`dark:text-white text-black hover:bg-cyan-200 hover:dark:bg-gray-600 px-3 py-2 rounded-md font-medium ${NavScroll.main ? 'bg-cyan-200 dark:bg-gray-600' : ''} `}
                    onClick={(e) => toggleNavBar(e.currentTarget)}
                    >About</button>

                    <button
                    type="button"
                    value="project"
                    className={`dark:text-white text-black hover:bg-cyan-200 hover:dark:bg-gray-600 px-3 py-2 rounded-md font-medium ${NavScroll.project ? 'bg-cyan-200 dark:bg-gray-600' : ''} `}
                    onClick={(e) => toggleNavBar(e.currentTarget)}
                    >Project</button>

                    <button
                    type="button"
                    value="footer"
                    className={`dark:text-white text-black hover:bg-cyan-200 hover:dark:bg-gray-600 px-3 py-2 rounded-md font-medium ${NavScroll.footer ? 'bg-cyan-200 dark:bg-gray-600' : ''} `}
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

export default NavHeader