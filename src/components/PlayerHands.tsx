import { useGame } from "@containers/GameContainer";
import React, { useContext, useEffect } from "react";
import Card from "./card";
export default function PlayerHands() {
  const { playerHand } = useGame();

  return (
    <>
      <h1> This is a Player Hands Okay</h1>
      {playerHand &&
        playerHand.map((item, index, array) => {
          return <Card card={item} showFront />;
        })}
    </>
  );
}
