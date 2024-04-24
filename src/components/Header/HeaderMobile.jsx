import React, { useState } from 'react'
import logo from '../../assets/img/logoMobile.png'
import { Link } from 'react-scroll'

function MobileLink({link, text, setOpened}){
    return(
        <>
            <Link to={link} spy={true} smooth={true} offset={-80} duration={100} onClick={()=> setOpened(false)} className=' font-semibold text-lg w-full py-3' href={link}>{text}</Link>
        </>
    );
}

function HeaderMobile() {

    const [opened , setOpened] = useState(false);
    const handleMenu = ()=>{
        setOpened(!opened)
    }
  return (
    <>
        <div className=' bg-white w-full h-20 flex items-center justify-center fixed z-20'>
            <button onClick={handleMenu} className=' absolute left-0 ml-7 text-2xl text-gray-500'><i className="fa-solid fa-bars"></i></button>
            <div className='h-full w-20 bg-contain bg-no-repeat' style={{ backgroundImage : `url(${logo})`}}></div>
            <div className=' text-4xl -ml-5 font-semibold'>ASSINE</div>
        </div>
        <div>
            <div onClick={handleMenu} className={opened ? ' fixed z-20 h-screen bg-black/60 w-full transition-all ' : ' fixed z-20 h-screen bg-black/60 w-full-translate-x-full transition-all '}></div>
            <div className={opened ? ' fixed z-20 h-screen bg-white w-2/3 py-4 px-4 flex flex-col transition-all duration-300' : ' fixed z-20 h-screen bg-white w-2/3 py-4 px-4 flex flex-col -translate-x-full transition-all duration-300'}>
                <div className=' w-2/3 h-14 flex items-center justify-start'>
                    <button onClick={handleMenu} className=' absolute right-0 mr-7 text-xs text-gray-700 border-gray-300 border-2 rounded-full w-8 h-8 flex items-center justify-center'><i className="fa-solid fa-x"></i></button>
                    <div className='h-full w-20 bg-contain bg-no-repeat' style={{ backgroundImage : `url(${logo})`}}></div>
                    <div className=' text-2xl -ml-10 font-semibold'>ASSINE</div>
                </div><br />
                <MobileLink link="home" text="Home" setOpened={setOpened} />
                <hr />
                <MobileLink link="about" text="About" setOpened={setOpened} />
                <hr />
                <MobileLink link="resume" text="Resume" setOpened={setOpened} />
                <hr />
                <MobileLink link="portfolio" text="Portfolio" setOpened={setOpened} />
                <hr />
                <MobileLink link="contact" text="Contact" setOpened={setOpened} />
            </div>
        </div>
    </>
  )
}

export default HeaderMobile