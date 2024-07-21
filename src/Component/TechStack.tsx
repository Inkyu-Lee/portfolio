import React from 'react'

const TechStack:React.FC = () => {
  return (
<div className="container-2xl mx-auto">
  <div className="max-w-screen-2xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 place-items-center">
      <div className="bg-blue-500 w-3/4 h-40 flex items-center justify-center text-white">
        <h1>Front-End</h1>
      </div>
      <div className="bg-red-500 w-3/4 h-40 flex items-center justify-center text-white">Back-End</div>
      <div className="bg-green-500 w-3/4 h-40 flex items-center justify-center text-white">Tools</div>
    </div>
  </div>
</div>
  )
}

export default TechStack