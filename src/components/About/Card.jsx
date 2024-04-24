import React from 'react'
import {motion} from 'framer-motion'

function Card({title, icon, delay}) {
  return (
    <motion.div viewport={{ once: true }} initial={{ opacity : 0, x: -40}} whileInView={{ opacity : 1 , x : 0}} transition={{ duration : 1, delay : delay}}>
        <div className=' absolute h-40 w-40 md:h-60 md:w-60 bg-gray-800/70 blur-xl '>
        </div>
        <div className=' h-40 w-40 md:h-60 md:w-60 bg-gray-800/70 rounded-md  mr-5 mb-5 border border-gray-600 text-white flex flex-col items-center justify-start px-5 py-5 '>
            <div className=' h-14 w-14 md:w-24 md:h-24 rounded-full '>
                {icon}
            </div>
            <div className=' flex-grow flex flex-col items-center justify-center text-center font-semibold text-xl'>
                {title}
            </div>
        </div>
        
    </motion.div>
  )
}

export default Card