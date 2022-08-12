import { useGame } from "@containers/GameContainer";
import React from "react";
import Card from "./card";

type Props = {};

export default function Deck({}: Props) {
  const { deck } = useGame();
  return (
    <div className="flex flex-wrap">
      {deck.map((card, index) => (
        
        <Card card={card} key={index} />
       
      ))}
    </div>
  );
}
