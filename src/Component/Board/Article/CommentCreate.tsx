import React from 'react';


// PortFolio Project API (1.0.0)
// API 사용 Notion : https://www.notion.so/PortFolio-API-Docs-73543d8bdf824fd29b2fd7f43af919ff

const CommentCreate:React.FC = () => {
  return (
    <div className='grid grid-cols-3'>
      <p>닉네임</p>
      <p>비밀번호</p>
      <p>댓글내용</p>

    </div>
  )
}

export default CommentCreate;