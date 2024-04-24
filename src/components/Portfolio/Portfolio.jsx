import React from 'react'
import {motion} from 'framer-motion'
import ProjectCard from './ProjectCard'

function Portfolio() {
    const projects = [
        {
            key : 1,
            title : "Web app for showcasing products",
            description : "A web app to showcase a company's products, with a built in Dashboard to manage the products.",
            link : "https://curious-swan-7e0d9d.netlify.app/",
            techs : ["ReactJS","TailwindCSS","Firebase"],
            image : "https://i.imgur.com/mtXtY9S.png"
        },
        {
            key : 2,
            title : "Portfolio",
            description : "This digital portfolio website was both designed and coded by me.",
            link : "/",
            techs : ["ReactJS","TailwindCSS","ThreeJS"],
            image : "https://i.imgur.com/ksTGqGY.png"
        },
        {
            key : 3,
            title : "E-Commerce",
            description : "An E-Commerce website where users can create accounts, admins can add products and the payment process is handled by Stripe",
            link : "https://github.com/YassDH/E-Commerce",
            techs : ["ReactJS","NestJS","JWT","Stripe"],
            image : "https://i.imgur.com/N1YapmO.png"
        },
        {
            key : 4,
            title : "Car Maintenance Reminder",
            description : "A mobile app for iOS aimed at simplifying the technical maintenance tracking of personal vehicles",
            link : "https://github.com/YassDH/carMaintenanceReminder",
            techs : ["Swift","Play Framework","JWT","SQL"],
            image : "https://i.imgur.com/ddASTxa.png"
        },
        {
            key : 5,
            title : "MangaFlix",
            description : "A mobile app for Android that offers a vast library of manga and manhwa titles with the latest updates ",
            link : "https://drive.google.com/drive/folders/1X426BAVoHo6P0ulNnkSpVnOh4DHX-KW3?usp=drive_link",
            techs : ["React Native","Express","Node","MongoDB","TailwindCSS","AdMob"],
            image : "https://i.imgur.com/qHW2i6o.jpg"
        },
    ]
  return (
    <div id='portfolio' className='md:px-20 lg:px-40 px-5 min-h-screen'>
        <div className=' flex flex-col items-start justify-center h-full flex-grow'>
            <motion.div viewport={{ once: true }} initial={{ opacity : 0, x: -40}} whileInView={{ opacity : 1 , x : 0}} transition={{ duration : 1}}>
                <h2 className=' text-lg md:text-xl text-gray-300/60 font-semibold'>MY WORK</h2>
            </motion.div>
            <motion.div viewport={{ once: true }} initial={{ opacity : 0, x: -40}} whileInView={{ opacity : 1 , x : 0}} transition={{ duration : 1 , delay : 0.2}}>
                <h2 className=' text-5xl md:text-6xl lg:text-7xl text-white font-bold'>PROJ<span className=' text-rose-600'>ECTS</span></h2>
            </motion.div>
            <motion.div viewport={{ once: true }} initial={{ opacity : 0, x: -40}} whileInView={{ opacity : 1 , x : 0}} transition={{ duration : 1 , delay : 0.4}}>
                <h2 className=' text-lg md:text-xl text-gray-300/60 font-semibold'>The following projects showcases my skill. Each project is briefly described with live demos in it.<br />It reflects my ability to solve complex problems, work with diffrent technologies, and manage projects effectively.</h2>
            </motion.div>
            <div className=' mt-10 z-10 flex flex-wrap items-center justify-center'>
                {projects.map(element => (<ProjectCard key={element.key} title={element.title} description={element.description} link={element.link} techs={element.techs} image={element.image}/>))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio