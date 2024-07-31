import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Article } from '../api/PostGet';



const BoardList:React.FC = () => {

    const [Articles, setArticles] = useState<Article[]>([])
    const [Article, setArticle] = useState<Article>()
    const [getId, setId] = useState<number>(7);

    const navigateArticle = useNavigate()
    useEffect(() => {
        fetch( process.env.REACT_APP_API_KEY_ALL_ARTICLE + 'articles' )
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error('요청한 API에 응답할 수 없음! : fetch ', error));
    }, [])

    const handleArticles = (id:number) => {
      setId(id)
      navigateArticle('/Article/' + String(id), { state: { id: id } });
    }

  return (
    <div>
        {Articles.map(article => (
          <div className='grid grid-cols-3 my-3' key={article.id}>
              <p>{article.id}</p>
              <a className=' hover:font-bold hover:underline hover:cursor-pointer' onClick={() => handleArticles(article.id)}>{article.title}</a>
              <p>Kyu</p>
          </div>
      ))}
    </div>
  )
}

export default BoardList