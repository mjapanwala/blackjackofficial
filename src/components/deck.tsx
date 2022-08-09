import { useGame } from "@containers/GameContainer";
import React from "react";
import Card from "./card";

type Props = {};

export default function Deck({}: Props) {
  const { deck } = useGame();
  return (
    <div className="flex flex-wrap">
      {deck.map((card) => (
        <Card  card={card}/>
      ))}
    </div>
  );
}
