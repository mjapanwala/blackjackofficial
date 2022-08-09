import Link from "next/link";
import { useState, useEffect } from "react";
import Form from "@components/form";
import { useGame } from "@containers/GameContainer";
import useLocalStorage from "@components/useLocalStorage";
import Card from "../../v2/src/components/card";
import Deck from "@components/deck";
const Input: React.FC = ({ ...other }) => {
  const [input, setInput] = useState("");
  const { username, amount, deck } = useGame();

  const modal = (
    <div>
      <Form />
    </div>
  );

  return (
    <>
      <div className="h-screen fixed w-full bg-green-800 overflow-scroll">
        <div></div>
        <h1>fgsdg</h1>
        current username: {username}
        <br />
        current amount: {amount}
        {!username && modal}
        <Deck />
      </div>
    </>
  );
};

export default Input;
