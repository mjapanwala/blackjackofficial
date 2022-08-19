import { useGame } from "@containers/GameContainer";
import React, { useState, useEffect } from "react";
import Card from "./card";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

export default function Deck({}: Props) {
  const [currentEnterTime, setEnterTime] = useState(undefined);
  const { deck, playerHand } = useGame();
  const [borderColor, setBorderColor] = useState("");
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
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

  const handleMouseEnter = (e, index) => {
    console.log(index);
    //
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
      });

      if (millisecondsToSeconds === 5) {
        const cardInformation = { name, value, design };
        getCard(cardInformation);
        setPlayerHand((prev) => {
          if (prev) {
            return [...prev, cardInformation];
          } else {
            return [cardInformation];
          }
        });
      }
    }, 1000);
    setIntervalId(interval);
  };

  const handleMouseLeave = (e, index) => {
    clearInterval(intervalId);
    setEnterTime(0);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {playerHand.length < 2 && (
        <motion.div
          exit={{
            scale: [0.5, 1, 1.5, 1],
            x: [5, 0, -5, 0],
            transition: { duration: 2 },
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex flex-wrap"
        >
          {deck.map((card, index) => (
            <Card
              currentEnterTime={undefined}
              showFront={undefined}
              card={card}
              key={index}
              handleMouseLeave={(e) => {
                handleMouseLeave(e, index);
              }}
              handleMouseEnter={(e) => {
                handleMouseEnter(e, index);
              }}
              borderColor={borderColor}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
