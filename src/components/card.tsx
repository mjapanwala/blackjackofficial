import React, { useState, useEffect } from "react";
import BackOfTheCard from "./BackOfTheCard";
import PlayerHands from "./PlayerHands";
import FrontOfTheCard from "./FrontOfTheCard";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
interface CardProps {
  card: {
    name: string;
    value: number;
    design: string;
  };
  showFront?: boolean;
  handleMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  handleMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  setEnterTime: Function;
  borderColor: string;
  currentEnterTime: number;
  index: number;
  selectedCard: number;
  playerHand: any;
}
export default function Card({
  card: { name, value, design },
  index,
  showFront = false,
  handleMouseEnter,
  handleMouseLeave,
  borderColor,
  currentEnterTime,
  selectedCard,
  playerHand,
}: CardProps) {
  const cardFrontCss = `${borderColor} border-4  h-full rounded bg-white mb-2 relative shadow-md  cursor-pointer  flex flex-col  justify-between p-2`;

  return (
    <motion.div
      animate={{ scale: 1 }}
      className="w-20 h-28"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      layoutId={`${name}-${value}-${design}`}
      id={`${name}-${value}-${design}`}
    >
      <div className={`${cardFrontCss}`}>
        {showFront ? (
          <FrontOfTheCard
            name={name}
            value={value}
            design={design}
            index={index}
            borderColor={borderColor}
            currentEnterTime={currentEnterTime}
            selectedCard={selectedCard}
            playerHand={playerHand}
          />
        ) : (
          <BackOfTheCard />
        )}
      </div>
    </motion.div>
  );
}
