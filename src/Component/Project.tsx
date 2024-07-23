import React from 'react'

const Project:React.FC = () => {
  return (
    <div id="project" className="container max-w-screen-xl mx-auto px-4 my-20">
        <h1 className="text-2xl sm:text-4xl mb-4 mt-2">
            PROJECT
        </h1>
        <div className='mb-20'>
          상세 프로젝트 내용 기입예정
          테스트 길이 늘리기~~
          <div className='flex bg-red-500 w-lvh h-lvh'></div>
        </div>
        <div>
          <a href="/About" className='w-32 h-32 bg-blue-500'>버튼임 게시판 바로가기 (임시 수정예정)</a>
        </div>
        <hr className="dark:border-white border-black my-20"/>
    </div>
  )
}

export default Project