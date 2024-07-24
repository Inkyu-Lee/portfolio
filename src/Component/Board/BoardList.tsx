import React, { useEffect, useState } from 'react';
import { Post } from '../api/PostGet';



const BoardList:React.FC = () => {

    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        fetch('http://3.235.4.181:8080/api/articles')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('요청한 API에 응답할 수 없음! :' + 'fetch', error));
    }, [])

  return (
    <div>
        {posts.map(post => (
        <div className='grid grid-cols-3 my-3' key={post.id}>
            <p>{post.id}</p>
            <h2>{post.title}</h2>
            <p>Kyu</p>
        </div>
    ))}
    <p>로컬에서 구현완료 https연동 해야 불러오기 가능</p>
    </div>
  )
}

export default BoardList