import React from 'react'

function Certificate({ link, logo, title, code}) {
  return (
    <a href={link} className=' m-4'>
        <div className=' h-32 w-80 md:w-96 bg-gray-800/70 flex rounded-md'>
            <div className='h-32 w-32 bg-gray-500/70 rounded-l-md flex items-center justify-center overflow-hidden'>
                {logo}
            </div>
            <div className=' flex-grow px-4 py-2 h-32 md:w-64 w-48 flex-col items-center justify-center '>
                <h2 className=' text-white font-semibold text-lg md:text-xl flex-grow'>{title}</h2>
                <h3 className=' mb-4 text-gray-500 text-sm'>Credential ID : {code}</h3>
            </div>
        </div>
    </a>
  )
}

export default Certificate