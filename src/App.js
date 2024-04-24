import { useEffect, useState } from 'react';
import HeaderFinal from './components/Header/HeaderFinal';
import StarsCanvas from './components/Stars/Stars';
import LoadingScreen from './components/SpaceShip/LoadingScreen';
import { useProgress } from '@react-three/drei'
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
  const [showTimer, setShowTimer] = useState(true);
  
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(()=>{
    setTimeout(()=>{
      setShowTimer(false)
    },4000)
  },[showTimer])


  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });
  
  const { progress } = useProgress();
  
  return (
    <div className=" w-full h-full p-0 bg-fixed bg-gray-950 overflow-x-hidden" >
        <LoadingScreen show={showTimer} />
        <StarsCanvas />
        <div className='md:flex md:flex-row'>
          { showTimer ? null : (
            <div className=' h-20 md:w-28'>
              <HeaderFinal size={width}/>
            </div>
          )}          
          <div className='md:flex-grow'>
            <div className=' max-w-screen-2xl h-screen'>
              {/* HOME START */}
                { showTimer ? null : (
                  <Home width={width} progress={progress} show={showTimer}/>
                )} 
              {/* HOME END */}
            </div>
            {/* ABOUT START */}
              { showTimer ? null : (
                <About />
              )} 
            {/* ABOUT END */}
            {/* RESUME START */}
              { showTimer ? null : (
                <Resume />
              )} 
            {/* RESUME END */}
            {/* PORTFOLIO START */}
              { showTimer ? null : (
                <Portfolio />
              )} 
            {/* PORTFOLIO END */}
            {/* CONTACT START */}
              { showTimer ? null : (
                <Contact />
              )} 
            {/* CONTACT END */}
          </div>
        </div>
    </div>
  );
}

export default App;
