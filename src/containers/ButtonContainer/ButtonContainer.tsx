import React, { useState, createContext, useContext } from "react";
import PlaceBet from "@components/Buttons/placeBet";
import StartGame from "@components/Buttons/startGame";
import withLoader from "@components/HOC/withLoader";
import BettingContainer, { BetContainer } from "@containers/BettingContainer/BettingContainer";
import {motion, AnimatePresence} from 'framer-motion'

export const ButtonContext = createContext(null);

export default function ButtonContainer({children}, props) {
  const [startGame, setStartGame] = useState(true);
  const hi = useContext(BetContainer);
console.log(hi)
  return (
    <>
      <ButtonContext.Provider value={{setStartGame, startGame}}>
      {startGame ?
       
        <StartGame/>
      
        :(<>{children}<PlaceBet/></>)
      }
      </ButtonContext.Provider>
    </>
  );
}

