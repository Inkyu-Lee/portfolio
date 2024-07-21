import { CareerText, CodeEducation } from "../Model/TextInfo"

const Career:React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
        <div className="flex flex-row justify-start">
            <h1 className="text-2xl sm:text-4xl mb-4 mt-2">
                EDUCATION & CERTIFICATE
            </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <div className="flex flex-col ">
                <h1 className="text-sm sm:text-lg">{CareerText.date}</h1>
                <h1 className="text-2xl sm:text-3xl">{CareerText.graduate}</h1>
            </div>
            
            <div className="flex flex-col">
                <h1>{CareerText.major}</h1>
                <h1>{CareerText.score}</h1>
            </div>
            
            
            <div className="flex flex-col my-2">
                <h1 className="text-sm sm:text-lg">{CodeEducation.date}</h1>
                <h1 className="text-2xl sm:text-3xl">{CodeEducation.company}</h1>
            </div>
            <div className="flex flex-col my-2">
                <h1>{CodeEducation.education}</h1>
                <h1>{CodeEducation.education2}</h1>
            </div>

            <div className="flex flex-col my-2">
                <h1 className="text-sm sm:text-lg">{CareerText.certificationsDate[0]}</h1>
                <h1 className="text-2xl sm:text-3xl">{CareerText.certifications[0]}</h1>
            </div>
            <div className="flex flex-col my-2">
                <h1>{CareerText.certificationsText}</h1>
            </div>

            <div className="flex flex-col my-2">
                <h1 className="text-sm sm:text-lg">{CareerText.certificationsDate[1]}</h1>
                <h1 className="text-2xl sm:text-3xl">{CareerText.certifications[1]}</h1>
            </div>
            <div className="flex flex-col my-2">
                <h1>{CareerText.certificationsText}</h1>
            </div>
        </div>
        <hr/>
    </div>

  )
}

export default Career