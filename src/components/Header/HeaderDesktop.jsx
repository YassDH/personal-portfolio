import React, { useState } from 'react'
import HeaderLink from './HeaderLink'
import Logo from '../../assets/img/logo.png'
import { motion } from 'framer-motion';

function HeaderDesktop() {
  const [hovered, setHovered] = useState(false);
  const itemInitial = { y : -50 , opacity : 0}
  const itemWhileInView = { y : 0 , opacity : 1}
  return (
    <>
        <motion.div initial={{ x : -50, opacity :0  }} animate={{ x : 0 , opacity : 1}} transition={{duration : 1 , delay : 1}} className=' float-left bg-gray-800/70 h-screen w-28 flex flex-col items-center justify-between pb-10 shadow-lg fixed'>
          <motion.div  className='w-full h-24  bg-rose-600 font-MuseoModerno bg-no-repeat bg-contain bg-center shadow-lg' style={{backgroundImage : `url(${Logo})`}}></motion.div>
          <div>
            <motion.div initial={itemInitial} animate={itemWhileInView} transition={{duration : 1, delay : 0.5}}>
              <HeaderLink text="HOME" href="home" icon="house" />
            </motion.div>
            <motion.div initial={itemInitial} animate={itemWhileInView} transition={{duration : 1, delay : 0.6}}>
              <hr className=' border-gray-700 w-32' />
              <HeaderLink text="ABOUT" href="about" icon="user"  />
            </motion.div>
            <motion.div initial={itemInitial} animate={itemWhileInView} transition={{duration : 1, delay : 0.7}}>
              <hr className=' border-gray-700 w-32' />
              <HeaderLink text="RESUME" href="resume" icon="file-lines"  />
            </motion.div>
            <motion.div initial={itemInitial} animate={itemWhileInView} transition={{duration : 1, delay : 0.8}}>
              <hr className=' border-gray-700 w-32' />
              <HeaderLink text="PORTFOLIO" href="portfolio" icon="suitcase"  />
            </motion.div>
            <motion.div initial={itemInitial} animate={itemWhileInView} transition={{duration : 1, delay : 0.9}}>
              <hr className=' border-gray-700 w-32' />
              <HeaderLink text="CONTACT" href="contact" icon="comments"  />
            </motion.div>
          </div>
          <a href="https://drive.google.com/file/d/1L488DUVZzy3PE5iGHc8Ph67Fa9O1fuOO/view">
            <motion.div onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{setHovered(false)}} className='bg-rose-600 w-20 h-20 rounded-full text-center text-white items-center flex flex-col justify-center'>
              <div className={!hovered ? ' duration-300 z-10 w-full h-full items-center justify-center flex flex-col rounded-full font-semibold text-lg opacity-0 -translate-y-5 transition-all ' : ' z-10 transition-all w-full h-full items-center justify-center flex flex-col rounded-full font-semibold text-lg  duration-300'}>RESUME</div>
              <div className=' absolute bg-rose-600 animate-ping w-14 h-14 rounded-full'></div>
              <i className={!hovered ? "fa-solid  duration-300 fa-file-arrow-down text-white text-4xl absolute transition-all" : "fa-solid fa-file-arrow-down text-white text-4xl absolute opacity-0 translate-y-5 transition-all  duration-300" }></i>
            </motion.div>
          </a>
        </motion.div>
    </>
  )
}

export default HeaderDesktop