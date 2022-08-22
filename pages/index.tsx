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
import GamblingChips from "@components/GamblingChips";

const Input: React.FC = ({ ...other }) => {
  const { playerHand } = useGame();
  return (
    <>
      <div className="h-screen grid grid-cols-2 grid-rows-2 w-full bg-green-800  ">
        <div className="col-span-1 row-span-1">
        <Deck />
        </div>
        <div className=" ">
          <PlayerHands />
        </div>
        <div className="col-span-2 row-span-2">
          <GamblingChips/>
        </div>
      </div>
    </>
  );
};


export default Input;
