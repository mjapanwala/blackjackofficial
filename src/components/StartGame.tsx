import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGame } from "@containers/GameContainer";
export default function StartGame() {
  const {startGameButton} = useGame();
  
  return (
    <AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.2, transition: { duration: 1 } }}
        className="fixed bottom-0 left-0 right-0 p-6 "
      >
        <motion.button  className="bg-green-700 inline-block w-7/12 h-20 rounded-lg text-white">
          Start Game
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}
