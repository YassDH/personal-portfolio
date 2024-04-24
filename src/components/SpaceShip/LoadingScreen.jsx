import logoLoading from '../../assets/img/logo.png'
import React from 'react'

function LoadingScreen({show}) {
  
  const Loading = 'fixed w-screen h-screen z-50 bg-slate-900 flex flex-col justify-center items-center';
  const afterLoading = ' fixed w-screen h-screen bg-slate-900 -z-10 flex flex-col justify-center items-center opacity-0 duration-300';
  
  return (
    <div className={ show ? Loading : afterLoading}> 
        <div style={{backgroundImage : `url(${logoLoading})`}} className=' w-28 h-28 bg-no-repeat bg-center bg-contain animate-pulse'></div>
        <div className=' text-gray-200 mt-5 animate-pulse font-light'>Loading Essential Components</div>
    </div>
  )
}

export default LoadingScreen