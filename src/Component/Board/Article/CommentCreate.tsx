import React, { useEffect, useState } from 'react';

// PortFolio Project API (1.0.0)
// API 사용 Notion : https://www.notion.so/PortFolio-API-Docs-73543d8bdf824fd29b2fd7f43af919ff



const CommentCreate:React.FC = () => {

  const [comment, setComment] = useState()

  useEffect(() => {

  }, [])

  return (
    <div className='grid grid-cols-3'>
      <textarea>닉네임</textarea>
      <textarea>비밀번호</textarea>
      <textarea>댓글내용</textarea>
    </div>
  )
}

export default CommentCreate;