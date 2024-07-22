import React from 'react'
import BackEnd from './Detail/BackEnd'
import FrontEnd from './Detail/FrontEnd'
import Learning from './Detail/Learning'
import Tools from './Detail/Tools'

const TechStack:React.FC = () => {
  return (
<div className="container max-w-screen-xl mx-auto px-4 my-20">
  <h1 className="text-2xl sm:text-4xl mb-4 mt-2">
    SKILLS
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <FrontEnd/>
    <BackEnd/>
    <Tools/>
    <Learning/>
  </div>
  <hr className="dark:border-white border-black my-3"/>
</div>



  )
}

export default TechStack