import React from 'react'
import { projectText } from '../../Model/ProjectText'
import ProjectCard from './ProjectCard'

const ProjectList:React.FC = () => {
  return (
        <div className='flex flex-col my-10 mx-10 justify-center items-center'>
            {projectText.map((project, id) =>(
                <div 
                data-aos="flip-up"
                data-aos-duration="1500"
                >
                    <ProjectCard key={id}
                        id={project.id}
                        linksrc={`${process.env.PUBLIC_URL}/project`}
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