import { AcademicCapIcon } from "@heroicons/react/24/outline"
import { CareerText, CodeEducation } from "../Model/TextInfo"

const Career:React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-screen-2xl">
        <div className="flex flex-row justify-center items-center mx-2">
            <AcademicCapIcon className="h-12 w-12" aria-hidden="true"/>
            <h1 className="text-2xl sm:text-4xl mb-4 text-center mt-2">
                학력사항 및 자격증
            </h1>
        </div>
        <div className="grid place-items-center">
            <hr className="border-t-1 sm:border-t-2 border-black my-2 dark:border-white w-full max-w-screen-2xl" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 my-5">
            <div className="flex flex-col items-center border-solid border-2 rounded-2xl border-black dark:border-white">
                <h1 className="text-xl sm:text-2xl font-bold">{CareerText.graduate}</h1>
                <p className="text-lg sm:text-xl">{CareerText.major}</p>
                <p className="text-lg sm:text-xl">{CareerText.date}</p>
            </div>
            <hr className="block sm:hidden border-t2 border-black dark:border-white "/>
            <div className="flex flex-col items-center border-solid border-2 rounded-2xl border-black dark:border-white">
                <h1 className="text-lg sm:text-xl font-bold">{CodeEducation.company}</h1>
                <p className="text-lg sm:text-xl">{CodeEducation.date}</p>
                <p className="text-lg sm:text-lg">{CodeEducation.education}</p>
            </div>
            <hr className="block sm:hidden border-t2 border-black dark:border-white"/>
            <div className="flex flex-col items-center border-solid border-2 rounded-2xl border-black dark:border-white">
                <h1 className="text-xl sm:text-2xl font-bold">{CareerText.certifications[0]}</h1>
                <p className="text-lg sm:text-2xl">{CareerText.certifications[1]}</p>
                
            </div>
        </div>
    </div>

  )
}

export default Career