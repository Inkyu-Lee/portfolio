import React from 'react'
import BoardList from './BoardList'

// API key = { 등록예정 }


const ProjectBoard:React.FC = () => {
    return (
        <div className='text-sm sm:text-lg'>
            <div className='grid grid-cols-3'>
                <h1>게시글 번호</h1>
                <h1>제목</h1>
                <h1>닉네임</h1>
            </div>
            <BoardList/>
            <hr className='border-black dark:border-white'/>
            
        </div>
    )
}

export default ProjectBoard