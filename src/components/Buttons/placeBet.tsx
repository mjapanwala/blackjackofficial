import React, { useContext } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import  {ButtonContext}  from '@containers/ButtonContainer/ButtonContainer'
export default function PlaceBet() {
  const {setStartGame} = useContext(ButtonContext);
 
  return (
    <div className='fixed bottom-0 left-0 right-0 text-center p-8 mb-4 bg-green-700 '>
      <button onClick={() => setStartGame(true)} className='w-2/4 h-16 rounded-lg bg-white text-black text-xl'> Place Bet</button>
    </div>

  )
}
