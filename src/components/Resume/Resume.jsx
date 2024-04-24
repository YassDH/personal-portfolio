import React from 'react'
import {motion} from 'framer-motion'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Card from './Card'
import Tool from './Tool'

import IFTlogo from '../../assets/img/IFT.jpeg'

import Certificate from './Certificate'

function InsatIcon(){
    return(
        <img src='https://i.imgur.com/t0ozvK0.png' alt="" />
    )
}

function Resume() {
    const education = [
        {
            key: 1,
            title :"Software Engineering",
            date :"2022-2025",
            description :"Focusing on the design, development,deployment, and maintenance of software systems.",
            location :"National Institute of Applied Science and Technology",
            color :"rgb(31 41 55 / 0.7)",
            icon : <InsatIcon/>
        },
        {
            key: 2,
            title :"Pre-Engineering",
            date :"2020-2022",
            description :"Prepares students for the rigors of engineering studies (Mathematics, Physics, and Computer Science).",
            location :"National Institute of Applied Science and Technology",
            color :"rgb(31 41 55 / 0.7)",
            icon :<InsatIcon/>
        },
        {
            key: 3,
            title :"Baccalaureate Degree in Mathematics",
            date :"2016-2020",
            description :"Graduated with A GPA in Mathematics",
            location :"Carthage Byrsa High School",
            color :"rgb(31 41 55 / 0.7)",
            icon :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
          
        }
    ]
    const expirence = [
        {
            key: 1,
            title :"Mobile Developpement Internship",
            date :"Jul 2023 - Aug 2023",
            description :"Deisgned and developped a mobile app for iOS that it used to track technical maintenance for personal vehicules",
            location :"Famy Technologies",
            color :"rgb(31 41 55 / 0.7)",
            icon : <img className=' rounded-full' src='https://i.imgur.com/JZz8HC8.png' alt="" />
          
        },
        {
            key: 2,
            title :"ProblemSetter",
            date :"Dec 2022",
            description :"Took part in the organization team of SheSolves, a competitive programming competition, as a ProblemSetter",
            location :"ACM INSAT",
            color :"rgb(31 41 55 / 0.7)",
            icon : <img className=' rounded-full' src='https://i.imgur.com/HtO4A9I.jpg' alt="" />
          
        },
        {
            key: 3,
            title :"Web Developpment Internship",
            date :"Jul 2022 - Aug 2022",
            description :"Designed, developped and deployed a web app for this company",
            location :"A&F Technology",
            color :"rgb(31 41 55 / 0.7)",
            icon : <img className=' rounded-full' src='https://i.imgur.com/L1SvMJg.png' alt="" />
          
        },
        {
            key: 4,
            title :"Freelancer",
            date :"Dec 2022 - Now",
            description :"Designed and developed a web app for a company to showcase their products",
            location :"ReactJS, TailwindCSS, Firebase, Framer Motion",
            color :"rgb(31 41 55 / 0.7)",
            icon : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
        }
    ]
    const tools = [
        {
            key : 1,
            icon : <img className=' rounded-full' src='https://i.imgur.com/mlzJDil.png' alt="" />,
            color : "#fff"
        },
        {
            key : 2,
            icon : <img className=' rounded-full' src='https://i.imgur.com/4IVyIYW.png' alt="" />,
            color : "#fff"
        },
        {
            key : 3,
            icon : <img className=' rounded-full' src="https://i.imgur.com/8nE8yIV.png" alt="" />,
            color : "#fff"
        },
        {
            key : 4,
            icon : <i className="fa-brands fa-html5 text-orange-700"></i>,
            color : "#fff"
        },
        {
            key : 5,
            icon : <i className="fa-brands fa-css3-alt text-blue-700"></i>,
            color : "#fff"
        },
        {
            key : 6,
            icon : <i className="fa-brands fa-square-js text-yellow-400"></i>,
            color : "#fff"
        },
        {
            key : 7,
            icon : <img className=' rounded-full' src='https://i.imgur.com/IJZTrN4.png' alt="" />,
            color : "#fff"
        },
        {
            key : 8,
            icon : <img className=' rounded-full' src='https://i.imgur.com/gVbse0P.jpg' alt="" />,
            color : "#fff"
        },
        {
            key : 9,
            icon : <img className=' rounded-full' src="https://i.imgur.com/YmmIrUO.png" alt="" />,
            color : "#fff"
        },
        {
            key : 10,
            icon : <img className=' rounded-full' src='https://i.imgur.com/5vXNwSl.png' alt="" />,
            color : "#fff"
        },
        {
            key : 11,
            icon : <img className=' rounded-full' src='https://i.imgur.com/ndG7wge.png' alt="" />,
            color : "#fff"
        },
        {
            key : 12,
            icon : <img className=' rounded-full' src='https://i.imgur.com/Xrfhnsv.png' alt="" />,
            color : "#fff"
        },
        {
            key : 13,
            icon : <img className=' rounded-full' src="https://i.imgur.com/2cIIEMp.png" alt="" />,
            color : "#fff"
        },
        {
            key : 14,
            icon : <i className="fa-brands fa-python text-gray-600"></i>,
            color : "#fff"
        },
        {
            key : 15,
            icon : <img className=' rounded-full' src="https://i.imgur.com/ZVG9K5h.png" alt="" />,
            color : "#fff"
        },
        {
            key : 16,
            icon : <img className=' rounded-full' src='https://i.imgur.com/v8wKXOj.png' alt="" />,
            color : "#fff"
        },
    ]

    const certificates = [
        {
            key : 1,
            title : "Advanced Learning Algorithms",
            code : "WM6QSZ36XFNZ",
            link : "https://www.coursera.org/account/accomplishments/certificate/WM6QSZ36XFNZ",
            logo : <img src='https://i.imgur.com/SJKJ3dL.png' alt=''/>
        },
        {
            key : 2,
            title : "Supervised Machine Learning",
            code : "4LBPTU2AS7AW",
            link : "https://www.coursera.org/account/accomplishments/certificate/4LBPTU2AS7AW",
            logo : <img src='https://i.imgur.com/SJKJ3dL.png' alt=''/>
        },
        {
            key : 3,
            title : "Fundamentals of Accelerated Computing with CUDA",
            code : "0e22cd90d136433396003f62d97eb5e7",
            link : "https://courses.nvidia.com/certificates/0e22cd90d136433396003f62d97eb5e7/",
            logo : <img src='https://i.imgur.com/rcBqKkO.png' alt=''/>
        },
        {
            key : 4,
            title : "TCF - Level C1",
            code : "216001-02-200117-1508002",
            link : "https://drive.google.com/file/d/1vuB0ndiYkQVN66v4dBbBj4gw-5pfHLiQ/view",
            logo : <img src={IFTlogo} alt=''/>
        },
    ]
  return (
    <div id='resume' className='md:px-20 lg:px-40 px-5 lg:mb-20 min-h-screen'>
        <div className=' flex flex-col items-start justify-center h-full flex-grow'>

            {/*EDUCATION*/}

            <motion.div viewport={{ once: true }} initial={{ opacity : 0, x: -40}} whileInView={{ opacity : 1 , x : 0}} transition={{ duration : 1}}>
                <h2 className=' text-lg md:text-xl text-gray-300/60 font-semibold'>WHAT I'VE DONE SO FAR.</h2>
            </motion.div>
            <motion.div viewport={{ once: true }} initial={{ opacity : 0, x: -40}} whileInView={{ opacity : 1 , x : 0}} transition={{ duration : 1 , delay : 0.2}}>
                <h2 className=' text-5xl md:text-6xl lg:text-7xl text-white font-bold'>EDUCA<span className=' text-rose-600'>TION</span></h2>
            </motion.div>
            <div className=' mt-20 flex flex-col w-full'>
                <VerticalTimeline>
                    {education.map( element => (<Card title={element.title} key={element.key} date={element.date} description={element.description} location={element.location} color={element.color} icon={element.icon} />))}
                </VerticalTimeline>
            </div>

            {/*EXPERIENCE*/}

            <motion.div viewport={{ once: true }} initial={{ opacity : 0, x: -40}} whileInView={{ opacity : 1 , x : 0}} transition={{ duration : 1}}>
                <h2 className=' text-lg md:text-xl text-gray-300/60 font-semibold mt-10'>WHAT ABOUT MY</h2>
            </motion.div>
            <motion.div viewport={{ once: true }} initial={{ opacity : 0, x: -40}} whileInView={{ opacity : 1 , x : 0}} transition={{ duration : 1 , delay : 0.2}}>
                <h2 className=' text-5xl md:text-6xl lg:text-7xl text-white font-bold '>EXPERI<span className=' text-rose-600'>ENCE</span></h2>
            </motion.div>
            <div className=' mt-20 flex flex-col w-full'>
                <VerticalTimeline>
                    {expirence.map( element => (<Card title={element.title} key={element.key} date={element.date} description={element.description} location={element.location} color={element.color} icon={element.icon} />))}
                </VerticalTimeline>
            </div>
            
            {/*TOOLS*/}

            <div className=' flex flex-col items-center w-full'>
                <motion.div viewport={{ once: true }} initial={{ opacity : 0, x: -40}} whileInView={{ opacity : 1 , x : 0}} transition={{ duration : 1}}>
                    <h2 className=' text-lg md:text-xl text-gray-300/60 font-semibold mt-10'>FAMILIAR WITH</h2>
                </motion.div>
                <motion.div viewport={{ once: true }} initial={{ opacity : 0, y: 40}} whileInView={{ opacity : 1 , y : 0}} transition={{ duration : 1}}>
                    <div className='flex flex-wrap md:grid md:grid-cols-6 lg:md:grid-cols-8 items-center justify-center mt-5'>
                        {tools.map(tool =>(<Tool key={tool.key} icon={tool.icon} color={tool.color}/>))}
                    </div>
                </motion.div>
            </div>

            {/*CERTIFICATES*/}

            <motion.div viewport={{ once: true }} initial={{ opacity : 0, x: -40}} whileInView={{ opacity : 1 , x : 0}} transition={{ duration : 1}}>
                <h2 className=' text-lg md:text-xl text-gray-300/60 font-semibold mt-10'>SOME OF MY</h2>
            </motion.div>
            <motion.div viewport={{ once: true }} initial={{ opacity : 0, x: -40}} whileInView={{ opacity : 1 , x : 0}} transition={{ duration : 1 , delay : 0.2}}>
                <h2 className=' text-5xl md:text-6xl lg:text-7xl text-white font-bold '>CERTIFI<span className=' text-rose-600'>CATES</span></h2>
            </motion.div>
            <motion.div className=' z-10' viewport={{ once: true }} initial={{ opacity : 0, y: 40}} whileInView={{ opacity : 1 , y : 0}} transition={{ duration : 1}}>
                <div className=' flex w-full items-center justify-center flex-wrap mt-10 '>
                    { certificates.map(element => (<Certificate key={element.key} code={element.code} link={element.link} logo={element.logo} title={element.title} />))}
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Resume