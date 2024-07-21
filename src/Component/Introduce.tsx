import 'animate.css';
import { IntroduceText } from '../Model/TextInfo';


const Introduce : React.FC = () => {
  return (
    <div className='container mx-auto px-4'>
    <div className='flex flex-col min-h-screen items-center justify-center'>
        <div className='text-center animate__animated animate__fadeInUp'>
            <img 
                src="assets/images/memoticon.png" 
                className="mb-10 mx-auto w-1/2" 
                alt="memoticon"
            />
            <p className='mb-1 text-lg sm:text-xl'>{IntroduceText.backEndText}</p>
            <h1 className='text-4xl sm:text-5xl font-bold mb-2'>
                {IntroduceText.greetings}
            </h1>
            <h1 className='text-xl sm:text-3xl font-bold '>
                {IntroduceText.introduceText}
            </h1>
            <div className='grid grid-cols-3 mt-4 text-sm sm:text-lg'>
                <p className='border-solid border-2 border-black dark:border-white rounded-2xl me-3'>{IntroduceText.skill1}</p>
                <p className='border-solid border-2 border-black dark:border-white rounded-2xl me-3'>{IntroduceText.skill2}</p>
                <p className='border-solid border-2 border-black dark:border-white rounded-2xl me-3'>{IntroduceText.skill3}</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Introduce