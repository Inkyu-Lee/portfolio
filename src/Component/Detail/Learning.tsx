import React from 'react'
import { learningStacks } from '../../Model/TechStackText'

const Learning:React.FC = () => {
  return (
    <div className="bg-slate-200 dark:bg-slate-800 rounded-lg border-solid border-2 w-full h-98">
    <h1 className="text-xl text-center">Learning</h1>
    <div className='grid grid-cols-3 gap2 my-4 text-center'>
      {learningStacks.map((stack, index) => (
              <div key={index}>
                <img src={stack.src} className="h-3/4" alt="FR"/>
                {stack.language}
              </div>
          ))}
    </div>
  </div>
  )
}

export default Learning