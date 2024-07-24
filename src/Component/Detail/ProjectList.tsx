import React from 'react'
import { projectText } from '../../Model/ProjectText'
import Card from '../Card'

const ProjectList:React.FC = () => {
  return (
        <div className='flex flex-col my-10 mx-10 justify-center items-center'>
            {projectText.map((project, index) =>(
                <div 
                data-aos="flip-up"
                data-aos-duration="1500"
                >
                    <Card key={index}
                        src={project.src}
                        projectTitle={project.projectTitle}
                        projectContent={project.projectContent}
                        projectDateStart={project.projectDateStart}
                        projectDateEnd={project.projectDateEnd}
                    />
                </div>
            ))}
        </div>
  )
}

export default ProjectList