import React, { useEffect, useContext } from 'react'

import { useGame } from '@containers/GameContainer';
export default function BackOfTheCard() {
  const {deck} = useGame()

  const handleMouse = () => {
    const newAudio = new Audio("\mixkit-fast-double-click-on-mouse-275.wav")
    newAudio.play()
  }
  function checkToSeeUserCard() {
    
  }
  return (
    <>
    <div onMouseOver={handleMouse} className='transition-all hover:rotate-180  m-1 w-32 rounded bg-white mb-2 absolute inset-0 shadow-md cursor-pointer h-full justify-between p-2 hover:scale-x-125 hover:shadow-2xl'>
    <div className='scale-50 absolute w-full '>
      <img src="\2028480-3f51b5.png"/>
    </div>
   </div>
    </>
  )
}

