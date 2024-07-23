import React, { useEffect } from 'react';
import { backEndStacks } from '../../Model/TechStackText';

const BackEnd:React.FC = () => {

  const getElement = () => {
    const elementType = document.getElementById('front-end')
    if (elementType === null){
      return
    }
    return Math.floor(elementType.getBoundingClientRect().top)
  }

  useEffect(() => {
    const handleScroll = () => {
      console.log("ddd")
      const element = document.getElementById('front-end')
      if (element !== null) {
        const elementTop = Math.floor(element.getBoundingClientRect().top)
        if (window.scrollY >= elementTop) {
          element.classList.add('animate__animated', 'animate__lightSpeedInRight')
        } else {
          element.classList.remove('animate__animated', 'animate__lightSpeedInRight')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // "animate__animated animate__lightSpeedInRight"
  return (
    <div id="front-end" className={`bg-sky-100 dark:bg-slate-800 rounded-lg border-solid border-2 w-full h-98
    `}>

      <h1 className="text-4xl text-center font-bold my-10">BACK-END</h1>
      <div className='grid grid-cols-3 gap-3 my-4 text-center'>
        {backEndStacks.map((stack, index) => (
            <div key={index}>
              <img src={stack.src} className={`h-3/6 sm:h-3/5 ms-5`} alt="BE"/>
              <h1 className='font-bold text-lg me-5 sm:me-5'>{stack.language}</h1>
            </div>
        ))}
      </div>
    </div>
  )
}

export default BackEnd