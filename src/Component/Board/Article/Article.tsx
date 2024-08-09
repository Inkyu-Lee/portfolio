import { AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { API_ADDRESS } from '../../../Model/Types';
import { client } from '../../api/ApiList';
import { Article, Comments } from '../../api/PostGet';
import CommentCreate from './CommentCreate';

// PortFolio Project API (1.0.0)
// API 사용 Notion : https://www.notion.so/PortFolio-API-Docs-73543d8bdf824fd29b2fd7f43af919ff

const ShowArticle:React.FC = () => {

    const location = useLocation()
    const [Article, setArticle] = useState<Article>()
    const [comment, setComment] = useState<[Comments]>()

    const API_KEY = "article/"

    const getIdData = () => {
        return location.state.id
    }

    useEffect(() => { 
    const getData = async (url: string, config?: AxiosRequestConfig) => {
        try {
            const response = await client.get<Article>(url, config);
            console.log(response.data)
            console.log(process.env.REACT_APP_API_KEY)
            setArticle(response.data)
            return response.data;
        } catch (error:any) {
            throw new Error(error.message);
        }
        }
        getData(API_ADDRESS + API_KEY + String(getIdData()));

        


    }, [getIdData()])

    return (
        <div className='flex flex-col min-h-screen items-center justify-center m-auto max-w-2xl'>
            <div className='grid grid-row'>
                <div className='grid grid-cols-3 my-10'>
                    <p>No. {Article?.id}</p>
                    <p>{Article?.articleTitle}</p>
                    <p>조회수: Article?.Hits(체크필요) </p>
                </div>
                <p>{Article?.articleContent}</p>
                <hr className='my-5 border-black dark:border-white'/>
                <div className='grid grid-rows'>
                    <div className='grid grid-cols-3'>
                        {comment?.map((comment, idx) => (
                        <div className='border-solid border-2'>
                            <p key={idx}>번호</p>
                            <p>{comment.nickname}</p>
                            <p>{comment.content}</p>
                        </div>
                        ))}
                        <p>Dog Bichon</p>
                        <p>안녕하세요 댓글내용 입니다.</p>
                    </div>
                <div className='grid grid-cols-2'>
                    <CommentCreate/>
                </div>
                </div>
            </div>
        </div>
        )
}

export default ShowArticle