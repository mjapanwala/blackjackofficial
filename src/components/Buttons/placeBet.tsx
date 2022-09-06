import React, { useContext } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import  {ButtonContext}  from '@containers/ButtonContainer/ButtonContainer'
export default function PlaceBet() {
  const {setStartGame, startGame} = useContext(ButtonContext);

  return (
    <div className='fixed bottom-0 left-0 right-0 text-center p-8 mb-4 bg-green-700 '>
      <button disabled={startGame?false:true}  onClick={() => setStartGame(true)} className={`w-2/4 h-16 rounded-lg  text-black text-xl ${startGame? 'bg-white':'bg-gray-500'} `}> Place Bet</button>
    </div>

  )
}
