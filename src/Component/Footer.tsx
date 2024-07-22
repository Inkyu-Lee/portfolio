import { ComputerDesktopIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import React from 'react'


const Footer:React.FC = () => {
  return (
    <div id="footer" className="container max-w-screen-xl mx-auto px-4 my-20">
        <h1 className="text-2xl sm:text-4xl mb-4 mt-2">
            CONTACT
        </h1>
          <div className='grid grid-rows place-items-center mt-20'>
              <h1 className='text-3xl sm:text-5xl font-bold my-10'>Thank You For Watching</h1>
              <h1 className='text-3xl sm:text-4xl font-bold mb-10'>:)</h1>
              <h1 className='text-2xl sm:text-4xl font-bold'>끝까지 봐주셔서 감사합니다!</h1>
              <h2 className='text-2xl sm:text-3xl mt-5 opacity-75'>새로운 기술의 대한 두려움 없이</h2>
              <h2 className='text-2xl sm:text-3xl my-5 opacity-75'>항상 도전하고 발전하는 개발자가 되겠습니다.</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 my-2">
                <div
                className='flex mx-2 border-solid border-2 border-black dark:border-white rounded-2xl me-3 w-56 my-3 sm:my-0'>
                  <PhoneIcon className="w-8 h-8 my-2 mx-2"/><p className='my-2'>010 - 0000 - 0000</p>
                </div>

                <div
                className='flex mx-2 border-solid border-2 border-black dark:border-white rounded-2xl me-3 w-56 my-3 sm:my-0'>
                  <EnvelopeIcon className="w-8 h-8 my-2 mx-2"/><p className='my-2 mt-3 text-sm'>inkyulee9704@gmail.com</p>
                </div>

                <div
                className='flex mx-2 border-solid border-2 border-black dark:border-white rounded-2xl me-3 w-56 h-12 my-3 sm:my-0'>
                  <ComputerDesktopIcon className="w-8 h-8 my-2 mx-2"/><p className='my-2'><a href='https://github.com/Inkyu-Lee' target="_blank">Inkyu GitHub</a></p>
                </div>
              </div>
          </div>
    </div>
  )
}

export default Footer