import React, { useEffect, useState } from 'react';
import { Article } from '../api/PostGet';



const BoardList:React.FC = () => {

    const [Articles, setArticles] = useState<Article[]>([])

    useEffect(() => {
        fetch('https://inkyuportfolio.duckdns.org/api/articles')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error('요청한 API에 응답할 수 없음! : fetch ', error));
    }, [])

  return (
    <div>
        {Articles.map(article => (
        <div className='grid grid-cols-3 my-3' key={article.id}>
            <p>{article.id}</p>
            <h2>{article.title}</h2>
            <p>Kyu</p>
        </div>
    ))}
    </div>
  )
}

export default BoardList