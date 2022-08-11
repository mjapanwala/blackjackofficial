import React, { PropsWithChildren, useEffect, useState } from "react";
import useLocalStorage from "../components/useLocalStorage";
type Props = {};

export default function GameContainer({ children }: PropsWithChildren<{}>) {
  const [username, setUsername] = useLocalStorage("username", "");
  const [amount, setAmount] = useLocalStorage("amount", 0);
  const [deck, setDeck] = useState([]);
  useEffect(() => setDeck(deckGenerator()), []);
  // const popFromDeck = () => {
  //   const temp = [...deck];
  //   const slicedCard = temp.slice(Math.random() * temp.length);
  // };
  const setFormValues = (values) => {
    setUsername(values.username);
    setAmount(values.amount);
  };
  return (
    <GameContext.Provider value={{ username, amount, setFormValues, deck }}>
      {children}
    </GameContext.Provider>
  );
}

const GameContext = React.createContext({
  username: "",
  setFormValues: undefined,
  amount: undefined,
  deck: undefined,
});

export const useGame = () => React.useContext(GameContext);

function deckGenerator() {
  const names = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const design = ["clubs", "spades", "diamonds", "hearts"];
  const deck = [];
  for (let i = 0; i < names.length; i++) {
    const currentName = names[i];
    for (let j = 0; j < design.length; j++) {
      const currentDesign = design[j];
      const isFaceCard =
        currentName === "J" || currentName === "Q" || currentName === "K";
      const isAce = currentName === "A";

      deck.push({
        name: currentName,
        value: isFaceCard ? 10 : isAce ? [1, 11] : currentName,
        design: currentDesign,
      });
    }
  }

  for (let i = 0; i < deck.length; i++) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    if (i !== randomIndex) {
      const selectedCard = deck[randomIndex]; //D
      deck[randomIndex] = deck[i];
      deck[i] = selectedCard;
    }
  }
 
  return deck;
}
