import Link from "next/link";
import React, { useState, useEffect } from "react";
import Form from "@components/form";
import { useGame } from "@containers/GameContainer";
import useLocalStorage from "@components/useLocalStorage";
import Card from "../../v2/src/components/card";
import Deck from "@components/deck";
import Bet from "@components/Bet";
import PlayerHands from "@components/PlayerHands";
import SelectCards from "@components/SelectCards";

const Input: React.FC = ({ ...other }) => {
  const { playerHand } = useGame();
  return (
    <>
      <div className="h-screen fixed w-full bg-green-800 overflow-scroll  ">
        <div className="p-4">
        <Deck />
        </div>
        <div>
          <PlayerHands />
        </div>
        
      </div>
    </>
  );
};

export default Input;
