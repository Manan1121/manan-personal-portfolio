import React from 'react'

const CourseworkTab: React.FC = () => {
  const courses =[
    "AP Computer Science (5)",
    "Data Structures",
    "Discrete Structures I & II",
    "Computer Architecture",
    "Systems Programming",
    "Linear Algebra"


  ]
  return (
    <div>
        <h1 className=' text-xl font-bold'>Coursework:</h1>
        <ul className=' list-disc pl-4'>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
    </div>
  )
}

export default CourseworkTab