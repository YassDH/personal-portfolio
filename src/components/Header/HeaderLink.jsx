import React, { useState } from 'react'
import { Link } from 'react-scroll'

function HeaderLink({ text , href, icon}) {
    const [hovered , setHovered] = useState(false);
  return (
    
    <Link to={href} spy={true} smooth={true} offset={-80} duration={100} >
        <div onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} className=' cursor-pointer w-full text-center text-white justify-center items-center flex'>
            <i className={!hovered ? `fa-solid fa-${icon} text-2xl text-center absolute transition-all duration-300` : `fa-solid fa-${icon} text-2xl text-center absolute translate-x-10 opacity-0 transition-all duration-300`}></i>
            <div className={!hovered ?  "px-8 py-5 font-semibold text-center -translate-x-5 opacity-0 transition-all duration-300" : "px-8 py-5 font-semibold text-center transition-all duration-300"}>{text}</div>
        </div>
    </Link>
  )
}

export default HeaderLink