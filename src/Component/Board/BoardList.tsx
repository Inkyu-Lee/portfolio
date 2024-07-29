import React, { useEffect, useState } from 'react';
import { Article } from '../api/PostGet';



const BoardList:React.FC = () => {

    const [Articles, setArticles] = useState<Article[]>([])
    const [Article, setArticle] = useState<Article>()
    const [onShow, setShow] = useState<boolean>(false);
    const [getId, setId] = useState<number>(7);

    useEffect(() => {
        fetch('https://inkyuportfolio.duckdns.org/api/articles')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error('요청한 API에 응답할 수 없음! : fetch ', error));
    }, [])

    useEffect(() => {
      console.log(getId + "get Id");
      fetch('https://inkyuportfolio.duckdns.org/api/articles/' + String(getId))
      .then(response => response.json())
      .then(data => setArticle(data))
      .catch(error => console.error('요청한 API에 응답 할 수 없음! : fetch ', error));
    }, [getId])

    const handleArticles = (id:number) => {
      setShow(!onShow);
      setId(id)
    }

  return (
    <div>
        {!onShow ? 
        Articles.map(article => (
          <div className='grid grid-cols-3 my-3' key={article.id}>
              <p>{article.id}</p>
              <a className='hover:font-bold' onClick={() => handleArticles(article.id)}>{article.title}</a>
              <p>Kyu</p>
          </div>
      )): <div className='grid grid-cols-3 my-3'>
            <p>{getId}</p>
            <p>{Article?.content}</p>
            <p>{Article?.title}</p>
          </div>}
        
    </div>
  )
}

export default BoardList