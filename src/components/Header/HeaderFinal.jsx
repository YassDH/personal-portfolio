import React from 'react'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'

function HeaderFinal({size, progress}) {
  return (
    <>
        { size < 768 ? (<HeaderMobile />) : (<HeaderDesktop />)}       
    </>
  )
}

export default HeaderFinal