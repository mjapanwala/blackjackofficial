import React, { PropsWithChildren, useEffect, useState } from "react";
import dynamic from "next/dynamic";
// const Confetti = dynamic(() => import("../components/CustomConfetti"), {
//   ssr: false,
// });
type Props = {};

 export default function GameContainer({ children }: PropsWithChildren<{}>) {

  const [deck, setDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [startGameButton, setGameButton] = useState(true);

  useEffect(() => setDeck(deckGenerator()), []);
  // const popFromDeck = () => {
  //   const temp = [...deck];
  //   const slicedCard = temp.slice(Math.random() * temp.length);
  // };


  const getCard = (cardInformation) => {
    //Card the customer has hovered on for 5 seconds
    const chosenCard = cardInformation;
    setDeck((prev) => {
      return prev.filter((item, index, array) => {
        return item.name !== chosenCard.name;
      });
    });
  };
  const customFunction = () => {
    setDeck()
  };
 
  return (
    <GameContext.Provider
      value={{
        customFunction,
        startGameButton,
        setGameButton,
    
        
    
        deck,
        getCard,
        setPlayerHand,
        playerHand,
        setDeck,
      }}
    >
      {/* if a boolean is true: <Confetti/> : null */}
      {/* <Confetti /> */}
      {children}
    </GameContext.Provider>
  );
}

const GameContext = React.createContext({
  
  setFormValues: undefined,
  amount: undefined,
  deck: undefined,
  setDeck: undefined,
  getCard: undefined,
  setPlayerHand: undefined,
  playerHand: undefined,
  startGameButton: undefined,
  setGameButton: undefined,
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
