import Link from "next/link";
import React, { useState, useEffect } from "react";
import Form from "@components/form";
import { useGame } from "@containers/GameContainer";
import useLocalStorage from "@components/useLocalStorage";
import Card from "../../v2/src/components/card";
import Deck from "@components/deck";
import BetSection from "@components/Bet";
import PlayerHands from "@components/PlayerHands";
import SelectCards from "@components/SelectCards";
import GamblingChips from "@components/GamblingChips";
import { motion } from "framer-motion";
const Input: React.FC = ({ ...other }) => {
  return (
    <>
      <div className="h-full grid grid-cols-2 grid-rows-2 w-full bg-green-800 overflow-hidden ">
        <div className="col-span-1 row-span-1">
          <Deck />
        </div>
        <div className="col-span-">
          <PlayerHands />
        </div>
        <motion.div className="col-start-1 col-end-3 row-start-2 text-center">
          <BetSection />
        </motion.div>
      </div>
    </>
  );
};

export default Input;
