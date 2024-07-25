import React from 'react';
import { useNavigate } from "react-router-dom";
import { ProjectTitle } from "../../Model/Types";

interface ProjectData extends ProjectTitle {
  linksrc: string;
}

const Card:React.FC<ProjectData> = ( {id, src, projectTitle, projectContent, projectDateStart, projectDateEnd, linksrc: linker} ) => {
  
  const navigateProject = useNavigate()

  const handleClick = (id:number) => {
    navigateProject('/Project', { state: { id: id } });
  }

  return (
    <div className="flex flex-col items-center sm:grid sm:grid-cols-2">
        <button onClick={(e) => handleClick(id)} className="flex flex-col items-center
        bg-white border border-gray-200 rounded-lg
        shadow sm:flex-row sm:w-auto hover:bg-gray-100
        dark:border-gray-700 dark:bg-gray-800
        dark:hover:bg-gray-700
        my-10 sm:mx-2"
        >
        <img className="object-cover w-full rounded-t-lg h-96 sm:h-auto sm:w-1/2 sm:rounded-none sm:rounded-s-lg" src={src} alt=""/>
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{projectTitle}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{projectContent}</p>
        </div>
    </button>
        <div className="border-t-2 sm:border-t-0 sm:border-l-2 border-black dark:border-white sm:ms-20">
        <div className="text-center sm:text-right my-10 ">
            <h1 className="text-2xl font-bold sm:text-4xl">PROJECT TITLE</h1>
            <p className="text-xl opacity-75 sm:text-2xl">PROJECT CONTENT</p>
            <p className="text-xl opacity-75 sm:text-2xl">{projectDateStart} ~ {projectDateEnd}</p>
        </div>
        </div>
    </div>
  )
}

export default Card