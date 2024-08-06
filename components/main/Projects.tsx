import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibld text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'> My Projects</h1>

        <div className='h-full w-full flex flex-col md:flex-row gapa-10 px-10'>
            <ProjectCard
            src="/NextWebsite.png"
            title='Modern Next.js Portfolio'
            description='A modern portfolio website built with Next.js, Tailwind CSS, and TypeScript'
            />
            <ProjectCard
            src="/CardImage.png"
            title='Modern Next.js Portfolio'
            description='A modern portfolio website built with Next.js, Tailwind CSS, and TypeScript'
            />
            <ProjectCard
            src="/SpaceWebsite.png"
            title='Modern Next.js Portfolio'
            description='A modern portfolio website built with Next.js, Tailwind CSS, and TypeScript'
            />
        </div>

    </div>
  )
}

export default Projects