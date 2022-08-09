import React from "react";
import { useGame } from "@containers/GameContainer";

export default function Card({ card: { name, value, design } }) {
  const { deck } = useGame();
  const designMap = {
    diamonds: <>&#9830;</>,
    hearts: <>&#9829;</>,
    spades: <>&#9824;</>,
    clubs: <>&#9827;</>,
  };

  const icon = designMap[design];

  const GenerateInside = () => {
    const styleChoice =
      design === "hearts" || design === "diamonds"
        ? "  text-3xl text-red-600"
        : "  text-3xl text-black-600";
    switch (name) {
      case 2:
        return (
          <div className="flex flex-col justify-between   h-full p-2">
            <div className={`${styleChoice} `}>{icon}</div>
            <div className={`${styleChoice}`}>{icon}</div>
          </div>
        );
        break;
      case 3:
        return (
          <div className="flex flex-col justify-between     h-full p-2">
            <div className={`${styleChoice}`}>{icon}</div>
            <div className={`${styleChoice}`}>{icon}</div>
            <div className={`${styleChoice}`}>{icon}</div>
          </div>
        );
        break;
      case 4:
        return (
          <div className="flex  justify-around  p-2   h-full ">
            <div className="flex flex-col justify-between">
              <div className={`${styleChoice}`}>{icon}</div>
              <div className={`${styleChoice}`}>{icon}</div>
            </div>
            <div className="flex flex-col justify-between  ">
              <div className={`${styleChoice}`}>{icon}</div>
              <div className={`${styleChoice}`}>{icon}</div>
            </div>
          </div>
        );
        break;
      case 5:
        return (
          <div className="flex  justify-evenly  h-full p-2   ">
            <div className="flex flex-col justify-between">
              <div className={`${styleChoice}`}>{icon}</div>
              <div className={`${styleChoice}`}>{icon}</div>
            </div>
            <div className="flex flex-col justify-center   ">
              <div className={`${styleChoice}`}>{icon}</div>
            </div>
            <div className="flex flex-col justify-between  ">
              <div className={`${styleChoice}`}>{icon}</div>
              <div className={`${styleChoice}`}>{icon}</div>
            </div>
          </div>
        );
        break;
      case 6:
        return (
          <div className="flex  justify-around    h-full p-2">
            <div className="flex flex-col justify-between">
              <div className={`${styleChoice}`}>{icon}</div>
              <div className={`${styleChoice}`}>{icon}</div>
              <div className={`${styleChoice}`}>{icon}</div>
            </div>
            <div className="flex flex-col justify-between">
              <div className={`${styleChoice}`}>{icon}</div>
              <div className={`${styleChoice}`}>{icon}</div>
              <div className={`${styleChoice}`}>{icon}</div>
            </div>
          </div>
        );
        break;
      case 7:
        return (
          <div className="flex  justify-evenly  h-full p-2">
            <div className="flex flex-col justify-between">
              <div className={`${styleChoice}`}>{icon}</div>
              <div className={`${styleChoice}`}>{icon}</div>
              <div className={`${styleChoice}`}>{icon}</div>
            </div>
            <div className="mt-6">
              <div className={`${styleChoice}`}>{icon}</div>
            </div>
            <div className="flex flex-col justify-between">
              <div className={`${styleChoice}`}>{icon}</div>
              <div className={`${styleChoice}`}>{icon}</div>
              <div className={`${styleChoice}`}>{icon}</div>
            </div>
          </div>
        );
        break;
      case 8:
        return (
          <div className="flex  justify-evenly  h-full p-2">
            <div className="flex flex-col justify-between">
              <div className={`${styleChoice}`}>{icon}</div>
              <div className={`${styleChoice}`}>{icon}</div>
              <div className={`${styleChoice}`}>{icon}</div>
            </div>
            <div className="flex flex-col justify-center">
              <div className={`${styleChoice}`}>{icon}</div>
              <div className={`${styleChoice}`}>{icon}</div>
            </div>
            <div className="flex flex-col justify-between">
              <div className={`${styleChoice}`}>{icon}</div>
              <div className={`${styleChoice}`}>{icon}</div>
              <div className={`${styleChoice}`}>{icon}</div>
            </div>
          </div>
        );
        break;
      case 9:
        return (
          <div className="flex  justify-evenly  h-full p-2">
            <div className="flex flex-col justify-between">
              <div className={`${styleChoice}`}>{icon}</div>
              <div className={`${styleChoice}`}>{icon}</div>
              <div className={`${styleChoice}`}>{icon}</div>
              <div className={`${styleChoice}`}>{icon}</div>
            </div>
            <div className="my-auto flex  ">
              <div className={`${styleChoice}`}>{icon}</div>
            </div>
            <div className="flex flex-col justify-between">
              <div className={`${styleChoice}`}>{icon}</div>
              <div className={`${styleChoice}`}>{icon}</div>
              <div className={`${styleChoice}`}>{icon}</div>
              <div className={`${styleChoice}`}>{icon}</div>
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
        var face = <div className={`${styleChoice}`}>{icon}</div>;
        return (
          <div className="flex  justify-evenly  h-full p-2 px-4  ">
            <div className="flex flex-col justify-between">
              {face}
              {face}
              {face}
              {face}
            </div>
            <div className=" flex flex-col justify-evenly">
              {face}
              {face}
            </div>
            <div className="flex flex-col justify-between">
              {face}
              {face}
              {face}
              {face} asdasda
            </div>
          </div>
        );
        break;
      case "J":
        return (
          <div className="flex flex-col h-48 justify-center  font-serif">
            JACK
          </div>
        );
        break;
      case "Q":
        return (
          <div className="flex flex-col h-48 justify-center  font-serif">
            QUEEN
          </div>
        );
        break;
      case "K":
        return (
          <div className="flex flex-col h-48 justify-center  font-serif">
            KING
          </div>
        );
        break;
      case "A":
        return (
          <div className="flex flex-col h-48 justify-center  font-serif">
            ACE
          </div>
        );
        break;
      default:
        break;
    }
  };
  return (
    <div className="m-1 w-32 rounded bg-white mb-2 relative shadow-md hover:scale-105 cursor-pointer hover:shadow-2xl flex flex-col h-48 justify-between p-2 ">
      <div className="font-serif text-lg  w-full  h-11 leading-9">
        <div className="leading-none text-xl">{name}</div>
        <span
          className={`text-lg  ${
            design === "hearts" || design === "diamonds"
              ? "text-red-500"
              : "text-black-500"
          } `}
        >
          {icon}
        </span>
      </div>
      <div
        className={`text-lg text-center  w-full  absolute inset-0  p-2 xl:p-4`}
      >
        {GenerateInside()}
      </div>
      <div className="text-lg text-right">
        <div className="rotate-180 inline-block">{name}</div>
      </div>
    </div>
  );
}
