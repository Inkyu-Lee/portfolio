import React from 'react';
import BoardList from './BoardList';

// API key = { http://3.235.4.181:8080/api/ }
// articles , article by id, comment, plus comment
//


const CodingBoard:React.FC = () => {
    
    return (
        <div className='text-sm sm:text-lg'>
            <h1>코딩 게시판</h1>
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

export default CodingBoard