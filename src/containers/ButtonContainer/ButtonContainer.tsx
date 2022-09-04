import React, { useState, createContext } from "react";
import PlaceBet from "@components/Buttons/placeBet";
import StartGame from "@components/Buttons/startGame";
import withLoader from "@components/HOC/withLoader";
export const ButtonContext = createContext('light');

export default function ButtonContainer() {
  const [startGame, setStartGame] = useState(true);
  const stateOfGame = withLoader(startGame)
  return (
    <>
      <ButtonContext.Provider value={{setStartGame}}>
      { startGame ?
        withLoader(stateOfGame) :
        <PlaceBet />
      }
      </ButtonContext.Provider>
    </>
  );
}
