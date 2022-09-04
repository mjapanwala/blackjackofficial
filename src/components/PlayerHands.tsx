import { useGame } from "@containers/GameContainer/GameContainer";
import React, { useContext, useEffect } from "react";
import Card from "./card";
import { motion } from "framer-motion";
export default function PlayerHands() {
  const { playerHand } = useGame();

  return (
    <>
      <motion.div
        initial={{ scale: 4 }}
        animate={{ scale: 1 }}
        className="text-center p-4 bg-lime-500 rounded-lg"
      >
        <h1 className="text-white text-xl "> Your Cards</h1>
      </motion.div>
      {playerHand &&
        playerHand.map((item, index, array) => {
          return <Card card={item} showFront />;
        })}
    </>
  );
}
