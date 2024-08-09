import React from 'react'


//JWT RefreshToken HTTPSave
//JWT AccessToken Header

const LoginForm:React.FC = () => {

    const postLogin = () => {

    }

  return (
    <form className='flex justify-center items-center m-auto min-h-screen'>
        <div className='grid grid-rows text-black'>
            <input className='my-3 bg-slate-300 w-64 h-8' type='text' placeholder='아이디' />
            <input className='mb-2 bg-slate-300 w-64 h-8' type='password' placeholder='비밀번호' />
            <button className='mb-20 dark:text-white w-45 h-12 bg-slate-300 dark:bg-slate-800 rounded-lg' type='submit'>로그인</button>
            <a className='dark:text-white' href='/about'>뒤로가기</a>
        </div>
    </form>
  )
}

export default LoginForm
