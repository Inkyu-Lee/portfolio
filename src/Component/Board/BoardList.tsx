import { AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_ADDRESS } from '../../Model/Types';
import { client } from '../api/ApiList';
import { Article } from '../api/PostGet';

const API_KEY = 'article/all'

const BoardList:React.FC = () => {

    const [Articles, setArticles] = useState<Article[]>([])
    const [Article, setArticle] = useState<Article>()
    const [getId, setId] = useState<number>(7);

    const navigateArticle = useNavigate()

    useEffect(() => {
      console.log(API_ADDRESS + API_KEY)
      const getData = async (url: string, config?: AxiosRequestConfig) => {
      try {
        const response = await client.get<Article[]>(url, config);
        console.log(response.data)
        setArticles(response.data)
        return response.data;
      } catch (error:any) {
        throw new Error(error.message);
      }
    }
    getData(API_ADDRESS + API_KEY);
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
              <a className=' hover:font-bold hover:underline hover:cursor-pointer' onClick={() => handleArticles(article.id)}>{article.articleTitle}</a>
              <p>Kyu</p>
          </div>
      ))}
    </div>
  )
}

export default BoardList