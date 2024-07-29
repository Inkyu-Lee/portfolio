import React, { useState } from 'react';
import { buttons } from '../../Model/BoardText';
import CodingBoard from './CodingBoard';
import FreeBoard from './FreeBoard';
import GalleryBoard from './GalleryBoard';
import ProjectBoard from './ProjectBoard';

    const Board:React.FC = () => {
    
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

        <div className='relative top-60'>
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
                            text-sm sm:text-lg` }
                    >{btn.title}
                    </button>
                ))}
            </div>
            <div className="mt-20 text-center">
                
                {boardCheck.freeBoard ? <FreeBoard/> : null}
                {boardCheck.GalleryBoard ? <GalleryBoard/> : null}
                {boardCheck.ProjectBoard ? <ProjectBoard/> : null}
                {boardCheck.CodingBoard ? <CodingBoard/> : null}
            </div>
        </div>
        )
}

export default Board