import React from 'react'

const TechStack:React.FC = () => {
  return (
<div className="container max-w-screen-xl mx-auto px-4 my-5">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <div className="border-solid border-2 w-full h-40">
      <h1 className="text-xl text-center">Front-End</h1>
    </div>
    <div className="border-solid border-2 w-full h-40">
      <h1 className="text-xl text-center">Back-End</h1>
    </div>
    <div className="border-solid border-2 w-full h-40">
      <h1 className="text-xl text-center">Tools</h1>
    </div>
  </div>
</div>



  )
}

export default TechStack