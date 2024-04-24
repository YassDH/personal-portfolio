import React from 'react'
import {motion} from 'framer-motion'
function ProjectCard({title , description, link, techs, image}) {
  return (
    <motion.div className=' m-5' viewport={{ once: true }} initial={{ opacity : 0, y: 40}} whileInView={{ opacity : 1 , y : 0}} transition={{ duration : 1 , delay : 0.2}}>
      <a href={link} >
          <div className=' h-96 w-80 bg-gray-800/80 flex flex-col p-5 rounded-md hover:bg-gray-800/60 transition-all duration-500'>
              <div className=' h-44 w-full flex bg-center bg-cover flex-col rounded-md' style={{ backgroundImage : `url(${image})` }}>
              </div>
              <h2 className=' text-white mt-5 font-bold text-lg md:text-xl'>{title}</h2>
              <h3 className=' text-gray-400'>{description}</h3>
              <div className=' flex flex-wrap'>
                  { techs.map( element => (<div className=' px-1 bg-gray-300 rounded-md text-sm text-slate-800 m-1' key={element}>#{element}</div>))}
              </div>
          </div>
      </a>
    </motion.div>
  )
}

export default ProjectCard