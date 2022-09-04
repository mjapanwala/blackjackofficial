import { useGame } from "@containers/GameContainer/GameContainer";
import React, { useState, useEffect } from "react";
import Card from "./card";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

export default function Deck({}: Props) {
  const [currentEnterTime, setEnterTime] = useState(undefined);
  const { deck, playerHand, getCard, setPlayerHand, setDeck } = useGame();
  const [borderColor, setBorderColor] = useState("");
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const [selectedCard, setSelectedCard] = useState(undefined);

  // class NewNode {
  //     value: number;
  //     next: any;
  //   constructor(value:number) {
  //       this.value = value;
  //       this.next = null;
  //   }
  // }
  // class LinkedList {
  //   value: number;
  //   head: any;
  //   tail: any;
  //   length: number;
  //   constructor(value:number) {
  //     const newNode = new NewNode(value);
  //     this.head = newNode;
  //     this.tail = newNode;
  //     this.length = 1;
  //   }
  //   push(value:number) {
  //     const newNode = new NewNode(value);
  //     if (!this.head) {
  //       this.head = newNode;
  //       this.tail = newNode;
  //     } else {
  //       this.tail.next = newNode;
  //       this.tail = newNode;
  //     }
  //     this.length++
  //     return this     
  //   }
  // }
  
  // const hi = new LinkedList(5);
  // const lol = hi.push(3);
  // console.log(lol)



  // Track the selected card.
  // [selectedCard,setSelectedCard]
  useEffect(() => {
    if (currentEnterTime >= 5) {
      clearInterval(intervalId);
    }
    if (currentEnterTime === 0) {
      setBorderColor("border-gray-400");
    }
  }, [currentEnterTime]);

  function createBorderColor(millisecondsToSeconds: number) {
    switch (millisecondsToSeconds) {
      case 0:
        setBorderColor("border-gray-400");
      case 1:
        setBorderColor("border-green-400");
        break;
      case 2:
        setBorderColor("border-blue-400");
        break;
      case 3:
        setBorderColor("border-yellow-400");
        break;
      case 4:
        setBorderColor("border-orange-400");
        break;
      case 5:
        setBorderColor("border-red-400");
        break;
    }
    return millisecondsToSeconds;
  }

  const handleMouseEnter = (e, index, card) => {
    // const newAudio = new Audio("mixkit-fast-double-click-on-mouse-275.wav");
    // newAudio.play();
    // When enter, write the time using .getTime()
    const firstEntered = new Date().getTime();
    let millisecondsToSeconds: number;
    // Start an interval and save it interval variable, just so that variable can be used to stop the interval at somepoint!
    let interval = setInterval(() => {
      //update state using updator function
      setEnterTime((prev) => {
        // After 1 second, get the new time and save it to newTimeValue
        const newTimeValue = new Date().getTime();
        // Find the difference between when we first entered the div vs after after a second
        millisecondsToSeconds = Math.floor(
          (newTimeValue - firstEntered) / 1000
        );
      });
      createBorderColor(millisecondsToSeconds);
      setSelectedCard(index);
      if (millisecondsToSeconds === 5) {
        setDeck((prev) => {
          var newDeck = prev.filter((deckCard, index, array) => {
            if (
              //card.name = 5
              //card.value = 5
              //card.design =
              card.name == deckCard.name &&
              card.value == deckCard.value &&
              card.design == deckCard.design
            ) {
              return false;
            }
            return true;
          });
 
          return newDeck;
        });
        setPlayerHand([...playerHand, card]);
      }
    }, 1000);
    setIntervalId(interval);
  };

  const handleMouseLeave = (e, index) => {
    clearInterval(intervalId);
    setSelectedCard(undefined);
    setEnterTime(0);
  };

  return (
    <>
      <motion.div  className="flex flex-wrap">
        {deck.map((card, index) => (
          <Card
            currentEnterTime={undefined}
            showFront={false}
            card={card}
            index={index}
            selectedCard={selectedCard}
            handleMouseLeave={(e) => {
              handleMouseLeave(e, index);
            }}
            handleMouseEnter={(e) => {
              handleMouseEnter(e, index, card);
            }}
            borderColor={index == selectedCard ? borderColor : ""}
            playerHand={playerHand}
          />
        ))}
      </motion.div>
    </>
  );
}

// <Card> -> size, color, animation, events
//<Front/> -> generateInside, designs for each card
//<Back/> -> the image for the back of the card.
//</Card>
