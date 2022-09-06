import React, { useState, useContext } from "react";
import BettingContainer, {
  helloContext,
} from "@containers/BettingContainer/BettingContainer";
import { BetContainer } from "@containers/BettingContainer/BettingContainer";
import {motion} from 'framer-motion'
export default function Coins({handleButtonClick}, {children}, props) {
  const { coinState } = useContext(BetContainer);
  
  return (
    <>
      <motion.div  animate={{ scale: 1.2 }}
  transition={{ type: "spring", stiffness: 100 }}className="absolute w-full top-2/3 p-4 ">
        <ul className="flex justify-center relative ">
          {coinState.map((coin, index, array) => {
            return (
              <>
              <motion.button whileHover={{scale: 1.2}} onClick={(event) => handleButtonClick(event,coin, index)}  className={`${coin.color} text-white inline-block w-11 h-11 rounded-full text-center m-2  brightness-125 text-lg min-w-max`}>{coin.coinValue} 
              <span className="absolute top-0 right-0 inline-block w-6 h-6  opacity-75 rounded-full -m-4 ">{coin.quantity}</span></motion.button>
              
              </>
            );
          })}
        </ul>
      </motion.div>
    </>
  );
}
