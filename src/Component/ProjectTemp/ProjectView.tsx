import React from 'react'
import { useLocation } from 'react-router-dom'
import { projectText } from '../../Model/ProjectText'

const ProjectView:React.FC = () => {
  
  const location = useLocation()
  const getProjectId = location.state.id

  return (
      <div>
        <div className='grid grid-rows justify-center sm:grid-cols-2 relative bottom-48 border-b-2'>
          <img src={projectText[getProjectId].src} className='mx-12 sm:mx-0 h-36 w-36 rounded-full' alt="myPic"/>
          <div className='px-10 text-center sm:text-left my-2'>
            <h1>{projectText[getProjectId].projectTitle}</h1>
            <h1>{projectText[getProjectId].projectContent}</h1>
            <h1>{projectText[getProjectId].projectDateStart} ~ {projectText[getProjectId].projectDateEnd}</h1>
          </div>
        </div>
        
        <div className='grid grid-cols-2 relative bottom-40 text-center'>
          <div>
            <h1>무엇을 진행했나요?</h1>
            <h2>{projectText[getProjectId].projectContent}</h2>
          </div>
          <div>
            <h1>어려웠던 점이 있었나요?</h1>
            <h2>{projectText[getProjectId].projectContent}</h2>
          </div>
        </div>
      </div>

  )
}

export default ProjectView