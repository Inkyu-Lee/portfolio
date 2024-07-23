import React, { useState } from 'react';
import CodingBoard from './CodingBoard';
import FreeBoard from './FreeBoard';
import GalleryBoard from './GalleryBoard';
import ProjectBoard from './ProjectBoard';


    interface articleBtns {
        title: string;
        value: string;
        src: string;    // 게시판 별 이미지 아이콘 필요
    }

    const buttons:articleBtns[] = [
        {
        title: "자유게시판",
        value: "freeBoard",
        src: "/images/freeBoard.jpg"
        },
        {
        title: "프로젝트 게시판",
        value: "projectBoard",
        src: "/images/freeBoard.jpg"
        },
        {
        title: "코딩 게시판",
        value: "codingBoard",
        src: "/images/freeBoard.jpg"
        },
        {
        title: "갤러리",
        value: "galleryBoard",
        src: "/images/freeBoard.jpg"
        },
    ]

    const BoardList:React.FC = () => {
    

    const [boardCheck, setBoardCheck] = useState({
        freeBoard: true,
        GalleryBoard: false,
        ProjectBoard: false,
        CodingBoard: false
    })

    const setBoardChecking = (event: EventTarget & HTMLButtonElement)=> {
        const btn = event.value
        console.log(btn)
        if (!btn) return
        
        setBoardCheck({
            freeBoard: btn === 'freeBoard',
            GalleryBoard: btn === 'galleryBoard',
            ProjectBoard: btn === 'projectBoard',
            CodingBoard: btn === 'codingBoard',
        })
    }



    return (


    <div className='grid grid-cols-4'>
        {buttons.map((btn, index) => (
            <button
            id={btn.title}
            key={index}
            value={btn.value}
            type="button"
            onClick={(e) => setBoardChecking(e.currentTarget)}
            className={`dark:text-white text-black hover:bg-cyan-200 
                    hover:dark:bg-gray-600 px-3 py-2 rounded-md font-medium
                    border-solid dark:border-white border-2 border-black mt-5 mx-2
                    ` }
            >{btn.title}
            </button>
        ))}
        <div className="flex flex-col justify-center items-left mt-20">
            {boardCheck.freeBoard ? <FreeBoard/> : null}
            {boardCheck.GalleryBoard ? <GalleryBoard/> : null}
            {boardCheck.ProjectBoard ? <ProjectBoard/> : null}
            {boardCheck.CodingBoard ? <CodingBoard/> : null}
        </div>
    </div>
  )
}

export default BoardList