import React from 'react'

function ContactCard({ logo, title }) {
  return (
    <div className=' h-24 w-full md:w-96 bg-gray-800/70 flex rounded-md'>
        <div className='h-24 w-16 bg-rose-500/70 rounded-l-md flex items-center justify-center overflow-hidden p-5 text-white text-2xl'>
            {logo}
        </div>
        <div className=' flex-grow px-4 py-2 h-24 flex items-center justify-center '>
            <h2 className=' text-white font-semibold text-sm md:text-xl flex-grow'>{title}</h2>
        </div>
    </div>
  )
}

export default ContactCard