import React from 'react'

function Tool({icon, color}) {
  return (
    <div className=' w-20 h-20 rounded-full flex items-center justify-center overflow-hidden border-2 mx-2 my-2 text-6xl' style={{backgroundColor : color}}>
        {icon}
    </div>
  )
}

export default Tool