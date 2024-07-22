import React from 'react'
import { learningStacks } from '../../Model/TechStackText'

const Learning:React.FC = () => {
  return (
    <div className="bg-sky-100 dark:bg-slate-800 rounded-lg border-solid border-2 w-full h-98">
      <h1 className="text-4xl text-center font-bold my-10">LEARNING & INTEREST</h1>
      <div className='grid grid-cols-3 gap-3 my-4 text-center'>
        {learningStacks.map((stack, index) => (
            <div key={index}>
              <img src={stack.src} className="h-3/4 ms-5" alt="BE"/>
              <h1 className='font-bold text-lg'>{stack.language}</h1>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Learning