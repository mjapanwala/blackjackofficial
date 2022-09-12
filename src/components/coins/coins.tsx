import React, { useState, useContext, useEffect } from "react";
import BettingContainer, {
  helloContext,
} from "@containers/BettingContainer/BettingContainer";
import { BetContainer } from "@containers/BettingContainer/BettingContainer";
import {motion} from 'framer-motion'
import TotalBet from "@components/totalBet";
export default function Coins({handleButtonClick, handleRemoveButtonClick}, {children}, props)

 {
  
  const { coinState, betStateCoin } = useContext(BetContainer);
 
 class Node {
   constructor(value) {
    this.value = value;
    this.next = null;
   }
 }
  class LinkedList {
    constructor(value) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    }
    push(value) {
      const newNode = new Node(value)
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode
      }
      this.length++;
      return this;
    }
    pop() {
      if (!this.head) {
        return undefined;
      }
      let temp = this.head;
      let pre = this.head;
      while(temp.next) {
        pre = temp;
        temp = temp.next;
      }
      this.tail = pre;
      this.tail.next = null;
      this.length--
    }
    unshift(value) {
      if (!this.head) {
        const newNode = new Node(value)
        this.head = newNode;
        this.tail = newNode;
        this.length++
        return this
      }
      else  {
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode;
        this.length++
        return this
      }
    }
    shift() {
      if (!this.head) {
        return undefined;
      } else if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length--;
        return this;
      }
        let temp = this.head;
        this.head = temp.next;
        temp = null;
        this.length--
        return this
    }

    get(index) {
      if (index < 0 || index >= this.length) {
        return undefined   
      } 
        let temp = this.head;
        for (let i = 0; i <index; i++) {
          temp = temp.next;
        }
        return temp
      
    }
    set(index, value) {
      const newNode = new Node(value)
      if (index < 0 || index >= this.length) {
        return undefined   
      }
      let temp = this.head
      
      for (let i =0; i <index; i++) {
          
          temp = temp.hext
      }
      
      this.head = null;
      this.head = newNode;
      return this;
    }
  }


const mehran = new LinkedList(7);
mehran.push(10);
mehran.push(20);
mehran.push(30);
console.log(mehran.set(0,9))

  


  return (
    <>
      <motion.div  animate={{ scale: 1.2 }}
  transition={{ type: "spring", stiffness: 100 }}className="absolute w-full top-2/3 p-4 ">
        <ul className="flex justify-center relative ">
          {coinState.map((coin, index, array) => {
            return (
              <>
              <motion.button disabled={coin.quantity === 0? true:false} whileHover={{scale: 1.2}} onClick={(event) => handleButtonClick(event,coin, index)}  className={`${coin.color} text-white inline-block w-11 h-11 rounded-full text-center m-2  brightness-125 text-lg min-w-max`}>{coin.coinValue} 
              <span className="absolute top-0 right-0 inline-block w-6 h-6  opacity-75 rounded-full -m-4 ">{coin.quantity}</span></motion.button>
              
              </>
            );
          })}
        </ul>
        </motion.div>

        <motion.div className="absolute w-full top-1/4">
        <TotalBet/>
        {betStateCoin.map((coin, index, array) => {
            return (
              <>
              
              <motion.button whileHover={{scale: 1.2}} onClick={(event) => handleRemoveButtonClick(event,coin, index)}  className={`${coin.color} text-white inline-block w-11 h-11 rounded-full text-center m-2  brightness-125 text-lg min-w-max`}>{coin.coinValue} 
              <span className="absolute top-0 right-0 inline-block w-6 h-6  opacity-75 rounded-full -m-4 ">{coin.quantity}</span></motion.button>
              
              </>
            );
          })}
        </motion.div>
    </>
  );
}
