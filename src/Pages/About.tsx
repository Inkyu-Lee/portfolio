import React from 'react'
import Board from '../Component/Board/Board'

const About:React.FC = () => {
  return (
    <div className='container mx-auto px-4 max-w-screen-xl'>
      <div className='flex flex-col min-h-screen items-left justify-center'>
        <img src="https://avatars.githubusercontent.com/u/168569674?v=4" className='h-36 w-36 rounded-full' alt="myPic"/>
        <h1 className='text-4xl font-bold my-2'>안녕하세요!</h1>
        <p className='text-2xl opacity-75 my-2'>여기는 저만의 작업공간 입니다.</p>
        <hr className="dark:border-white border-black"/>
      </div>
        <Board/>
    </div>
  )
}

export default About