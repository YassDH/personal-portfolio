import React from 'react'
import {motion} from 'framer-motion'

function ThreeLoading({progress}) {
  return (
    <motion.div initial={{opacity : 0}} animate={{opacity : 1}} transition={{ duration : 1, delay: 1}} className=' bg-no-repeat h-full w-1/2 grayscale flex items-center justify-center' style={{backgroundImage : `url(https://i.imgur.com/XfqiFcG.png)`}}>
        <h2 className=' text-white bg-black/70 p-10 flex flex-col items-center justify-center rounded-full w-60 h-60'><span>Loading 3D Model</span><span className=' text-2xl font-bold'>{progress}%</span></h2>
    </motion.div>
  )
}

export default ThreeLoading