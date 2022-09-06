
import React, { useState, useEffect } from "react";
import BettingContainer from "@containers/BettingContainer/BettingContainer";
import LetsPlay from "@components/Buttons/letsPlay";
import PlaceBet from "@components/Buttons/placeBet";
import ButtonContainer from "@containers/ButtonContainer/ButtonContainer";

const Layout: React.FC = ({ ...other }) => {
  return (
    <>
      <div className="bg-green-500 h-screen">
          <LetsPlay/>        
          <ButtonContainer>
          <BettingContainer/> 
          </ButtonContainer>
      </div>
    </>
  );
};



export default Layout;


