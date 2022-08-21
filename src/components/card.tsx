import React, { useState, useEffect } from "react";
import Jack from "./Jack";
import Queen from "./Queen";
import King from "./King";
import BackOfTheCard from "./BackOfTheCard";
import PlayerHands from "./PlayerHands";

interface CardProps {
  card: {
    name: string;
    value: number;
    design: string;
  };
  showFront?: boolean;
  handleMouseEnter: React.MouseEventHandler<HTMLDivElement>;
  handleMouseLeave: React.MouseEventHandler<HTMLDivElement>;
  setEnterTime: Function;
  borderColor: string;
  currentEnterTime: number;
  index: number;
  selectedCard: number;
  playerHand: any
}
export default function Card({
  card:{name, value, design},
  index,
  showFront = false,
  handleMouseEnter,
  handleMouseLeave,
  borderColor,
  currentEnterTime,
  selectedCard,
  playerHand
}: CardProps) {

  const withoutBorder = 'border-4  w-32 rounded bg-white mb-2 relative shadow-md  cursor-pointer  flex flex-col h-48 justify-between ';
  const withBorder = `${borderColor} border-4  w-32 rounded bg-white mb-2 relative shadow-md  cursor-pointer  flex flex-col h-48 justify-between p-2`


const selectCardCSS = selectedCard === index ? withBorder: withoutBorder

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
  
  const back = <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  <div className={`${selectCardCSS}`}><BackOfTheCard /></div>
  </div>

  const front = 
  <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <div className={`${selectCardCSS}`}>
 <CornerIcons />
 <div
   className={`text-lg text-center   w-full  absolute inset-0  p-2 xl:p-4`}
 >
   {GenerateInside()}
 </div>
 <CornerIcons flip />
</div>
</div>
  return (
    <>
    <div>
      <div>
      {back}
      </div>
      <div>
       
      {/* {front} */}
      </div>
    </div>
   </>
  );
}


