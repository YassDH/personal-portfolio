import React from 'react'
import Typewriter from 'typewriter-effect';

import SpaceShipCanvas from '../SpaceShip/SpaceShip'
import { motion } from 'framer-motion';
import ThreeLoading from './ThreeLoading';

function Home({width, progress, show}) {
  return (
    <div id='home' className=' w-full h-full flex -mt-20 md:mt-0'>
        <div className=' w-full flex justify-center lg:justify-start items-center lg:px-40'>
            <div className=' flex flex-col z-10'>
                <motion.div initial={{ opacity : 0, x: -40}} animate={{ opacity : 1 , x : 0}} transition={{ duration : 1 , delay : 2}}>
                    <h2 className=' text-lg md:text-xl text-gray-300/60 font-semibold'>Hello I am</h2>
                </motion.div>
                <motion.div initial={{ opacity : 0, x: -40}} animate={{ opacity : 1 , x : 0}} transition={{ duration : 1 , delay : 2.2}}>
                    <h1 className=' text-5xl md:text-6xl lg:text-7xl text-white font-bold'>DHAOUADI</h1>
                </motion.div>
                <motion.div initial={{ opacity : 0, x: -40}} animate={{ opacity : 1 , x : 0}} transition={{ duration : 1 , delay : 2.4}}>
                    <h1 className=' text-5xl md:text-6xl lg:text-7xl text-white font-bold'>YASSINE</h1>
                </motion.div>
                <motion.div initial={{ opacity : 0, x: -40}} animate={{ opacity : 1 , x : 0}} transition={{ duration : 1 , delay : 2.6}}>
                    <h2 className=' text-lg md:text-xl text-gray-300/60 font-semibold'>
                        <Typewriter
                            onInit={(typewriter) => {
                            typewriter.typeString("Software Engineering Student")
                            .pauseFor(2500)
                            .deleteAll()
                            .typeString("Web Developper")
                            .pauseFor(2500)
                            .deleteAll()
                            .typeString("Machine Learning Enthusiast")
                            .pauseFor(2500)
                            .deleteAll()
                            .start();
                            }}
                            options={{autoStart: true,
                                loop: true}}
                        />
                    </h2>
                </motion.div>
            </div>
        </div>
        { show ? null :
         width < 1024 ? (null) : (<div className=' absolute w-screen h-screen flex pr-10'><div className=' flex-grow'></div>{progress < 100 ? <ThreeLoading progress={(Math.round(progress * 100) / 100).toFixed(2)} /> : <SpaceShipCanvas /> }</div>)}
    </div>
  )
}

export default Home