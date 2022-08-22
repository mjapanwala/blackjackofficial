import React, { useState, useEffect } from "react";
import BackOfTheCard from "./BackOfTheCard";
import PlayerHands from "./PlayerHands";
import FrontOfTheCard from "./FrontOfTheCard"

interface CardProps {
  card: {
    name: string;
    value: number;
    design: string;
  };
  showFront?: boolean;
  handleMouseEnter: React.MouseEventHandler<HTMLDivElement>;
  handleMouseLeave: React.MouseEventHandler<HTMLDivElement>;
  setEnterTime: Function;
  borderColor: string;
  currentEnterTime: number;
  index: number;
  selectedCard: number;
  playerHand: any
}
export default function Card({
  card:{name, value, design},
  index,
  showFront = false,
  handleMouseEnter,
  handleMouseLeave,
  borderColor,
  currentEnterTime,
  selectedCard,
  playerHand
}: CardProps) {

  return (
    <>
    <div>
      <FrontOfTheCard name={name} value={value} design={design} showFront={showFront} index={index} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} borderColor={borderColor} currentEnterTime={currentEnterTime} selectedCard={selectedCard} playerHand={playerHand} />
      <BackOfTheCard/>
    </div>
   </>
  );
}


