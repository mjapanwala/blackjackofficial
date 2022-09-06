import React, { useState, useEffect, useContext, createContext } from "react";
import Coins from "@components/coins/coins";
import PlaceBet from "@components/Buttons/placeBet";
import LetsPlay from "@components/Buttons/letsPlay";
import { ButtonContext } from "@containers/ButtonContainer/ButtonContainer";
export const BetContainer = createContext({});
let coins = [
  {
    coinValue: 5,
    color: "bg-yellow-600",
    quantity: 20,
  },
  {
    coinValue: 10,
    color: "bg-red-600",
    quantity: 15,
  },
  {
    coinValue: 20,
    color: "bg-purple-600",
    quantity: 10,
  },
  {
    coinValue: 50,
    color: "bg-blue-600",
    quantity: 5,
  },
  {
    coinValue: 100,
    color: "bg-black",
    quantity: 1,
  },
];

export default function BettingContainer() {
  const [coinState, setCoinState] = useState(coins);

  const handleButtonClick = (event, coin, index) => {
    const decreaseFunction = (coinStateCopy) =>
      coinStateCopy.map((item, index, array) => {
        if (item.coinValue === coin.coinValue && item.quantity >= 1) {
          item.quantity -= 1;
          return item;
        } else {
          return item;
        }
      });
    
    copyAndSetCoinState(decreaseFunction);
    // setCoinState (n => [...totalChips, n])
  };
  const copyAndSetCoinState = (f: (coinStateCopy) => []) => {
    // create the coinState copy
    const coinStateCopy = coinState.map((coin) => Object.assign({}, coin));

    // pass the coinstate copy to the passed in f and store its response
    const newState = f(coinStateCopy);

    // pass the response to the setCoinState function
    setCoinState(newState);
  };
  const [betCoins, setBetCoinState] = useState(undefined);

  return (
    <>
      <BetContainer.Provider value={{ coinState: coinState }}>
        <Coins handleButtonClick={handleButtonClick} />
      </BetContainer.Provider>
    </>
  );
}
