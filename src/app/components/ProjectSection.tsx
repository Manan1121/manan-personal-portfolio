import React, { Component } from 'react'
import Image from 'next/image';
interface projectTypes {
    id: number;
    name: string;
    summary: string;
    technologies: string[];
    imageUrl: string;
    githubUrl: string;
} 

const projects: projectTypes[] = [
    {
        id: 1,
        name: "VoiceGPT",
        summary: "AI Voice Assistant, speak to ChatGPT and it will speak back to you!",
        technologies: ["Next.js", "Node.js", "OpenAI", "WebSockets"],
        imageUrl: "/ProjectsSectionPhotos/VoiceGPTImage.png",
        githubUrl: "Coming Soon"
    },
    {
        id: 2,
        name: "myMalloc",
        summary: "Custom implementaion of malloc() and free(), with added features such as error catching and more!",
        technologies: ["C", "GDB",],
        imageUrl: "/ProjectsSectionPhotos/DALL·E 2024-02-26 16.38.35 - Create an image that symbolizes the project 'mymalloc' which involves creating a custom version of malloc and free functions in C programming language.webp",
        githubUrl: "https://github.com/Manan1121/myMallocProject2"
    },
    {
        id: 3,
        name: "ScreenTimeExtension",
        summary: "Screen time extension, chrome extension which tracks users time spent on each tab.",
        technologies: ["Chrome API", "HTML", "CSS", "Javascript"],
        imageUrl: "/ProjectsSectionPhotos/DALL·E 2024-02-26 18.33.58 - Create a purple-themed image for a Chrome extension called 'Screen Time Extension' that tracks the amount of time users spend on each tab. The design .webp",
        githubUrl: "https://github.com/Manan1121/screenTimeExtension"
    },

]

const ProjectSection: React.FC = () => {
    return (
      <div className='container mx-auto p-4'>
        <h2 className=' text-xl font-extrabold text-center mb-8 mt-8'>My Projects: </h2>
        <div className='grid md:grid-cols-3 gap-4'> 
        {
            projects.map((project) => (
                <a
                    href={project.githubUrl}
                    key={project.id}
                    target='_blank'
                    className='block shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden cursor-pointer'
                >

                    <Image
                    src={project.imageUrl}
                    width={500}
                    height={500}
                    alt={project.name}
                    quality={100}
                    className=' w-full h-25'
                    />
                    <div className='p-4'>
                        <h3 className=' text-xl text-center text-bold font-helvetica underline'>
                            {project.name}
                        </h3>
                        <p className=' text-center font-helvetica py-2'>
                            {project.summary}
                        </p>
                        <div className='flex flex-wrap gap-2 mt-2 justify-center'>
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className=' bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-charcoal mr-2 mb-2 '>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                    </div>

                </a>
            ))
        }
        </div>
      </div>
    )
  }

  export default ProjectSection
