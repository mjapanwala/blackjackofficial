import ButtonContainers from '@containers/ButtonContainer/ButtonContainer'
import React, {useContext} from 'react'
import  {ButtonContext}  from '@containers/ButtonContainer/ButtonContainer'
import {motion, AnimatePresence} from 'framer-motion'

export default function StartGame() {
  const {setStartGame} = useContext(ButtonContext);
 
  return (
    <>
    <AnimatePresence>
    <motion.div key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 , scale: 1.5}} className='fixed bottom-0 left-0 right-0 text-center p-8 mb-4 bg-green-700 '>
    <motion.button  onClick={() => setStartGame(false)} className='w-2/4 h-16 rounded-lg bg-white text-black text-xl'>Start Game</motion.button>
    </motion.div>
    </AnimatePresence>
    </>
  )
}



