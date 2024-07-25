import React from 'react'
import ProjectView from '../Component/ProjectTemp/ProjectView'

const Project:React.FC = () => {
  return (
      <div className='container mx-auto px-4 max-w-screen-xl'>
        <div className='flex flex-col min-h-screen items-left justify-center'>
          <ProjectView/>
        </div>
      </div>
  )
}

export default Project