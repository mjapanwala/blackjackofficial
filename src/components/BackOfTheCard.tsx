import React, { useEffect, useContext, useState } from 'react'

import { useGame } from '@containers/GameContainer';
export default function BackOfTheCard() {
  const [flipCount, setFlipCount] = useState(0)
  const {deck} = useGame()
  const handleMouse = (e) => {

    console.log(e)
    const newAudio = new Audio("\mixkit-fast-double-click-on-mouse-275.wav")
    newAudio.play()
  }
  
  return (
    <>
    <div onMouseOver={handleMouse} className='rotational backface-hidden border-double border-2 border-indigo-600 transition-all  m-1 w-32 rounded bg-white mb-2 relative  shadow-md cursor-pointer h-full justify-between p-2 '>
    <div className=' '>
      <img src="\2028480-3f51b5.png"/>
    </div>
   </div>
    </>
  )
}

