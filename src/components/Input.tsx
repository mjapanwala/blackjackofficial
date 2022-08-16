import React from 'react'
import {motion} from 'framer-motion'
export default function Input({x, setX}) {
  return (
    <>
    <input onChange={e=> setX(e.target.value)}/>
    <motion.div
    animate={{ x: 100 }}
    transition={{ ease: "easeOut", duration: 2 }}
  />
  </>
  )
}
