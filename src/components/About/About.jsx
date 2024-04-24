import React from 'react'
import {motion} from 'framer-motion'
import Card from './Card'

function About() {
  const cards = [
    { 
      key : 1,
      title : "Full Stack Developer",
      icon : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
              </svg>,
      delay : 1
    },
    { 
      key : 2,
      title : "UX/UI Designer",
      icon : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-full h-full">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>,
      delay : 1.4
    },
    { 
      key : 3,
      title : "ML Enthusiast",
      icon : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-full h-full">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
            </svg>,
      delay : 1.8
    },
    { 
      key : 4,
      title : "CP and CTF Passionate",
      icon : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-full h-full">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>,
      delay : 2.2
    },
  ]
  return (
    <>
    <div id='about' className='md:px-20 lg:px-40 px-5 lg:py-20 min-h-screen'>
        <div className=' flex flex-col items-start justify-center h-full flex-grow'>
            <motion.div viewport={{ once: true }} initial={{ opacity : 0, x: -40}} whileInView={{ opacity : 1 , x : 0}} transition={{ duration : 1}}>
                <h2 className=' text-lg md:text-xl text-gray-300/60 font-semibold'>OVERVIEW</h2>
            </motion.div>
            <motion.div viewport={{ once: true }} initial={{ opacity : 0, x: -40}} whileInView={{ opacity : 1 , x : 0}} transition={{ duration : 1 , delay : 0.2}}>
                <h2 className=' text-5xl md:text-6xl lg:text-7xl text-white font-bold'>ABOUT <span className=' text-rose-600'>ME</span></h2>
            </motion.div>
            <motion.div viewport={{ once: true }} initial={{ opacity : 0, x: -40}} whileInView={{ opacity : 1 , x : 0}} transition={{ duration : 1 , delay : 0.4}}>
                <h6 className=' text-base md:text-xl text-white/80 font-semibold flex flex-col mt-5'><span>I am a Web Developer currently studying Software Engineering</span><span>at the National Institute of AppliedScience and Technology <span className=' text-rose-600'>(INSAT)</span>,</span><span> extremely passionate about Machine Learning and excited to be a part of it's innovation .</span><span>I am a curious person who loves learning new things and having new experiences .</span></h6>
            </motion.div>
            <div className=' flex flex-grow flex-wrap mt-10 w-full items-center justify-center lg:justify-start'>
              {cards.map(card => (<Card key={card.key} title={card.title} content={card.content} icon={card.icon} delay={card.delay} />))}
            </div>
        </div>
    </div>
    </>
  )
}

export default About