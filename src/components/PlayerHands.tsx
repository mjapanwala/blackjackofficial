import {useGame} from '@containers/GameContainer'
import React, {useContext} from 'react'

export default function PlayerHands() {
    const {getCard, deck, setPlayerHands} = useGame();
    
    

  return (
    <div>PlayerHands</div>
  )
}
