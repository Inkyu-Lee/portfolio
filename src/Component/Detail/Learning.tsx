import React from 'react'
import { learningStacks } from '../../Model/TechStackText'

const Learning:React.FC = () => {
  return (
    <div
    className="bg-sky-100 dark:bg-slate-800 rounded-lg border-solid border-2 w-full h-98"
    data-aos-duration="1000"
    data-aos="zoom-in-up">
      <h1 className="text-4xl text-center font-bold my-10">LEARNING & INTEREST</h1>
      <div className='grid grid-cols-3 gap-3 my-4 text-center'>
        {learningStacks.map((stack, index) => (
            <div key={index}>
              <img src={stack.src} className={`h-3/6 p-2 sm:h-3/5 ms-5 ${stack.language === 'django' || stack.language === 'Kotlin' ? 'dark:bg-white' : ''}`} alt="LEARN"/>
              <h1 className='font-bold text-lg sm:me-5'>{stack.language}</h1>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Learning