import React from 'react'

const SkillsTab: React.FC = () => {
    const skills = [
        "Next.js", "React.js", "Javascript", "Python",
        "Java", "R/Data Analysis", "C/C#", "SQL",
        "Unity", "Algorithms", "Cloud Services", "Zapier"
    ]
  return (
    <div className=''>
        <h1 className=' text-xl font-extrabold'>Skills:</h1>
        <ul className='list-disc grid grid-cols-4 gap-4 mt-4 pl-4'>
            {skills.map((skill, index) =>(
                <li key={index}>{skill}</li>
            ))}
        </ul>
    </div>
  )
}

export default SkillsTab