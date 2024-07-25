import React from 'react'
import ProjectList from './ProjectList'

const Project:React.FC = () => {
  return (
    <div id="project" className="container max-w-screen-xl mx-auto my-20">
        <h1 className="text-2xl sm:text-4xl mb-4 mt-2">
            PROJECT
        </h1>
        <div className='mb-20'>
          상세 프로젝트 내용 기입예정 (템플릿만 작성)
          <div className='flex justify-center w-auto h-auto'>
            <ProjectList/>
          </div>
        </div>
        <div className='flex justify-center mx-auto items-center text-center w-32 h-32 bg-slate-300 dark:bg-slate-800 rounded-full'>
          <a href="/portfolio/About">게시판 이동 <br/>(임시)</a>
        </div>
        <hr className="dark:border-white border-black my-20"/>
    </div>
  )
}

export default Project