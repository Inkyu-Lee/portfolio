import React from 'react'
import { myTools } from '../../Model/TechStackText'

const Tools:React.FC = () => {
  return (
    <div className="bg-slate-200 dark:bg-slate-800 rounded-lg border-solid border-2 w-full h-98">
      <h1 className="text-xl text-center">Tools</h1>
      <div className='grid grid-cols-3 gap2 my-4 text-center'>
        {myTools.map((stack, id) => (
                <div key={id}>
                  <img src={stack.src} className="h-3/4" alt="FR"/>
                  {stack.language}
                </div>
            ))}
      </div>
    </div>
  )
}

export default Tools