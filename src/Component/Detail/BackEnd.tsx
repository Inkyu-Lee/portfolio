import React from 'react'
import { backEndStacks } from '../../Model/TechStackText'

const BackEnd:React.FC = () => {
  return (
    <div className="bg-sky-100 dark:bg-slate-800 rounded-lg border-solid border-2 w-full h-98">
      <h1 className="text-4xl text-center font-bold my-10">BACK-END</h1>
      <div className='grid grid-cols-3 gap-3 my-4 text-center'>
        {backEndStacks.map((stack, index) => (
            <div key={index}>
              <img src={stack.src} className="h-4/4 ms-5" alt="BE"/>
              <h1 className='font-bold text-lg'>{stack.language}</h1>
            </div>
        ))}
      </div>
    </div>
  )
}

export default BackEnd