import React, { useState, useEffect } from "react";
import { useGame } from "@containers/GameContainer";
import Jack from "./Jack";
import Queen from "./Queen";
import King from "./King";
import BackOfTheCard from "./BackOfTheCard";
import Confetti from "react-confetti";
import {AnimatePresence, motion, useAnimation} from "framer-motion"
import Input from "./Input";
export default function Card({ card: { name, value, design } }) {
  const [showThings, setShowThings ] = useState(true)
  const designMap = {
    diamonds: <>&#9830;</>,
    hearts: <>&#9829;</>,
    spades: <>&#9824;</>,
    clubs: <>&#9827;</>,
  };
  const isRed = design === "hearts" || design === "diamonds";
  const icon = designMap[design];
  const GenerateInside = () => {
    const styleChoice = isRed
      ? "  text-3xl text-red-600"
      : "  text-3xl text-black-600";
    var styledIcon = <div className={`${styleChoice} `}>{icon}</div>;
    switch (name) {
      case 2:
        return (
          <div className="flex flex-col justify-between   h-full p-2">
            {styledIcon}
            {styledIcon}
          </div>
        );
        break;
      case 3:
        return (
          <div className="flex flex-col justify-between     h-full p-2">
            {styledIcon}
            {styledIcon}
            {styledIcon}
          </div>
        );
        break;
      case 4:
        return (
          <div className="flex  justify-around  p-2   h-full ">
            <div className="flex flex-col justify-between">
              {styledIcon}
              {styledIcon}
            </div>
            <div className="flex flex-col justify-between  ">
              {styledIcon}
              {styledIcon}
            </div>
          </div>
        );
        break;
      case 5:
        return (
          <div className="flex  justify-evenly  h-full p-2   ">
            <div className="flex flex-col justify-between">
              {styledIcon}
              {styledIcon}
            </div>
            <div className="flex flex-col justify-center   ">{styledIcon}</div>
            <div className="flex flex-col justify-between  ">
              {styledIcon}
              {styledIcon}
            </div>
          </div>
        );
        break;
      case 6:
        return (
          <div className="flex  justify-around    h-full p-2">
            <div className="flex flex-col justify-between">
              {styledIcon}
              {styledIcon}
              {styledIcon}
            </div>
            <div className="flex flex-col justify-between">
              {styledIcon}
              {styledIcon}
              {styledIcon}
            </div>
          </div>
        );
        break;
      case 7:
        return (
          <div id="card7" className="flex  justify-evenly  h-full p-2">
            <div className="flex flex-col justify-between">
              {styledIcon}
              {styledIcon}
              {styledIcon}
            </div>
            <div className="mt-6">{styledIcon}</div>
            <div className="flex flex-col justify-between">
              {styledIcon}
              {styledIcon}
              {styledIcon}
            </div>
          </div>
        );
        break;
      case 8:
        return (
          <div className="flex  justify-evenly  h-full p-2">
            <div className="flex flex-col justify-between">
              {styledIcon}
              {styledIcon}
              {styledIcon}
            </div>
            <div className="flex flex-col justify-center">
              {styledIcon}
              {styledIcon}
            </div>
            <div className="flex flex-col justify-between">
              {styledIcon}
              {styledIcon}
              {styledIcon}
            </div>
          </div>
        );
        break;
      case 9:
        return (
          <div className="flex  justify-evenly  h-full p-2">
            <div className="flex flex-col justify-between">
              {styledIcon}
              {styledIcon}
              {styledIcon}
              {styledIcon}
            </div>
            <div className="my-auto flex  ">{styledIcon}</div>
            <div className="flex flex-col justify-between">
              {styledIcon}
              {styledIcon}
              {styledIcon}
              {styledIcon}
            </div>
          </div>
        );
        break;
      case 10:
        // you should do it like this for all them bro... so its easy to change
        // you didnt change the icon color point is since you want the same style for all the icons, its stupid to
        // repeat the css and html multiple times, and everytime you wanna change it makes sense thanks!
        //iunno scale for 10 looks a littl sus you have to make them smalelr or they will go over the corner number?
        //i think make width of card bigger? yeah that will help and also it doesnt look that bad anyway card is def too small tho
        // actually i think the icons are also big lol im telling you man 4xl is too much
        var face = { styledIcon };
        return (
          <div className="flex  justify-evenly  h-full p-2 px-4  ">
            <div className="flex flex-col justify-between">
              {styledIcon}
              {styledIcon}
              {styledIcon}
              {styledIcon}
            </div>
            <div className=" flex flex-col justify-evenly">
              {styledIcon}
              {styledIcon}
            </div>
            <div className="flex flex-col justify-between">
              {styledIcon}
              {styledIcon}
              {styledIcon}
              {styledIcon}
            </div>
          </div>
        );
        break;
      case "J":
        return (
          <div className="flex flex-col  justify-center pt-[10px]  font-serif h-full p-2 px-4 scale-[2]">
            <Jack black={!isRed} />
          </div>
        );
        break;
      case "Q":
        return (
          <div className="flex flex-col  justify-center  font-serif h-full p-2 px-4 scale-[2]">
            <Queen black={!isRed} />
          </div>
        );
        break;
      case "K":
        return (
          <div className="flex flex-col  justify-center  font-serif h-full p-2 px-4 scale-[2]">
            <King black={!isRed} />
          </div>
        );
        break;
      case "A":
        return (
          <div className="flex flex-col  justify-center scale-[3]  font-serif h-full">
            {styledIcon}
          </div>
        );
        break;
      default:
        break;
    }
  };
  const CornerIcons = ({ flip = false }: { flip?: boolean }) => {
    return (
      <div className={`font-serif  w-full ${flip ? "rotate-180" : ""}`}>
        <div className=" text-xl">{name}</div>
        <div
          className={` leading-3 ${
            design === "hearts" || design === "diamonds"
              ? "text-red-500"
              : "text-black-500"
          } `}
        >
          {icon}
        </div>
      </div>
    );
  };

  const [front, setFront] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const [currentEnterTime, setEnterTime] = useState(undefined);
  const [currentLeaveTime, setLeaveTime] = useState(undefined);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const controls = useAnimation()
  // console.log(1660336410376 -1660336409375 )
  // When enter, write the time using .getTime()
  useEffect(() => {
    if (currentEnterTime >=5) {
      clearInterval(intervalId)
    }
  }, [currentEnterTime])
  // useEffect(() => {
  //   controls.start({
  //     x: "100%",
  //     backgroundColor: "#f00",
  //     transition: {duration: 3},
  //   })
  // }, [])

  const handleMouseEnter = (e) => {
    // const newAudio = new Audio("mixkit-fast-double-click-on-mouse-275.wav");
    // newAudio.play();
    // When enter, write the time using .getTime()
    const firstEntered = new Date().getTime();
    // Start an interval and save it interval variable, just so that variable can be used to stop the interval at somepoint!
    let interval = setInterval(() => {
      //update state using updator function
      setEnterTime((prev) => {
        // After 1 second, get the new time and save it to newTimeValue
        const newTimeValue = new Date().getTime();
        // Find the difference between when we first entered the div vs after after a second
        const millisecondsToSeconds = Math.floor(
          (newTimeValue - firstEntered) / 1000
        );
        //return that time into setEnterTime and have it rerender state
        return millisecondsToSeconds;
      });
      // so this part is correct, you are setting an interval when the guy brings his mouse over, which will calculate the time between the moment the interval started and the current time
      // and sets it to a state variable called currentEnterTime
      //update every second
    }, 1000);
    setIntervalId(interval);
  };

  const handleMouseLeave = () => {
    clearInterval(intervalId);
    setEnterTime(0);
  };


const handleMe = (e) => {
  console.log(e)
}

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    
     {/* <Input x={x} setX={setX}/> */}
      <motion.div />
     {/* <AnimatePresence>
      {showThings && (
              <motion.div
              // variants={variants}
              animate="lol"
              exit={{opacity:0}}
              style={{width: "200px", height: "200px", backgroundColor: 'red'}}
             >
              <motion.p
              style={{width: "100px", height: "100px", backgroundColor: 'blue'}}
              variants={lists}
              animate="haha"
           />
           </motion.div>
             
      )}

    </AnimatePresence> */}
      
      {currentEnterTime}
      <div className="m-1 w-32 rounded bg-white mb-2 relative shadow-md    hover:scale-x-125  cursor-pointer hover:shadow-2xl flex flex-col h-48 justify-between p-2 ">
        <CornerIcons />

        <div
          className={`text-lg text-center   w-full  absolute inset-0  p-2 xl:p-4`}
        >
          {GenerateInside()}
        </div>
        <CornerIcons flip />
      </div>

      <BackOfTheCard />
    </div>
  );
}

