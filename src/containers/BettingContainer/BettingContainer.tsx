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
let betCoins = [
  {
    coinValue: 5,
    color: "bg-yellow-600",
    quantity: 0,
  },
  {
    coinValue: 10,
    color: "bg-red-600",
    quantity: 0,
  },
  {
    coinValue: 20,
    color: "bg-purple-600",
    quantity: 0,
  },
  {
    coinValue: 50,
    color: "bg-blue-600",
    quantity: 0,
  },
  {
    coinValue: 100,
    color: "bg-black",
    quantity: 0,
  },
];

let newArray =[];
export default function BettingContainer() {
  const [coinState, setCoinState] = useState(coins);
  const [betStateCoin, setBetCoinState] = useState(betCoins);
  


  const handleButtonClick = (event, coin, index) => {
    let newQuantity = {...coin}
    if (newArray.length < 1){
       newQuantity.quantity = newQuantity.quantity - (newQuantity.quantity-1);
      newArray.push(newQuantity);
      setBetCoinState(newArray)
    }
    else if (newArray.length >=1) {
      newQuantity.quantity = newQuantity.quantity - (newQuantity.quantity-1);
      const arman = [...betStateCoin, newQuantity].sort((a,b) => a.coinValue-b.coinValue)
      setBetCoinState(arman)
    }

    copyAndSetCoinState((coinStateCopy) =>
    coinStateCopy.map((item, index, array) => {
      if (item.coinValue === coin.coinValue && item.quantity >= 1) {
        item.quantity -= 1;
        return item;
      } else {
        return item;
      }
    }));
  };

  const handleRemoveButtonClick = (event, coin, index) => {

  }
  const copyAndSetCoinState = (f: (coinStateCopy) => []) => {
    // create the coinState copy
    const coinStateCopy = coinState.map((coin) => Object.assign({}, coin));

    // pass the coinstate copy to the passed in f and store its response
    const newState = f(coinStateCopy);

    // pass the response to the setCoinState function
    setCoinState(newState);
  };
  

  return (
    <>
      <BetContainer.Provider value={{ coinState: coinState, betStateCoin:betStateCoin }}>
        <Coins handleRemoveButtonClick={handleRemoveButtonClick} handleButtonClick={handleButtonClick}>
     
          <h1>You are going nowhere</h1>
        </Coins>
      </BetContainer.Provider>
    </>
  );
}
