import React from "react";
import Jack from "./Jack";
import Queen from "./Queen";
import King from "./King";
import { motion } from "framer-motion";
export default function FrontOfTheCard({
  name,
  design,
  handleMouseEnter,
  handleMouseLeave,
  borderColor,
}) {
  const isRed = design === "hearts" || design === "diamonds";
  const designMap = {
    diamonds: <>&#9830;</>,
    hearts: <>&#9829;</>,
    spades: <>&#9824;</>,
    clubs: <>&#9827;</>,
  };
  const icon = designMap[design];

  const GenerateInside = () => {
    const styleChoice = isRed
      ? "  text-lg text-red-600"
      : "  text-lg text-black-600";
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
      <div className={`font-serif   ${flip ? "rotate-180" : ""}`}>
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


  return (
    <>
      <CornerIcons />
      <div
        className={`text-lg text-center   w-full  absolute inset-0  p-2 xl:p-4`}
      >
        {GenerateInside()}
      </div>
      <CornerIcons flip />
    </>
  );
}
