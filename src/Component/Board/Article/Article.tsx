import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Article } from '../../api/PostGet';

const ShowArticle:React.FC = () => {

    const location = useLocation()
    const [Article, setArticle] = useState<Article>()
    const articleEditorNav = useNavigate()
    const getIdData = () => {
        
        return location.state.id
    }

    useEffect(() => {
        fetch('https://inkyuportfolio.duckdns.org/api/articles/' + String(getIdData()))
        .then(response => response.json())
        .then(data => setArticle(data))
        .catch(error => console.error('요청한 API에 응답 할 수 없음! : fetch ', error));
        }, [getIdData()])

        const handleClick = () =>{
            articleEditorNav('/Article/Edit', { state: {id: 1} })
        }

  return (
    <div className='flex flex-col min-h-screen items-center justify-center m-auto'>
        <div className='grid grid-row'>
            <div className='grid grid-cols-3 my-5'>
                <p>번호</p>
                <p>게시글 제목</p>
                <p>게시글 내용</p>
            </div>
            <div className='grid grid-cols-3'>
                <p>{Article?.id}</p> 
                <p>{Article?.content}</p>
                <p>{Article?.title}</p>
                <button onClick={handleClick}>
                    게시글 작성 테스트 버튼
                </button>
            </div>
        </div>
    </div>
  )
}

export default ShowArticle