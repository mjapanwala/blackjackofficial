import React from 'react'
import PlayerHands from './PlayerHands'

export default function SelectCards() {
  
  return (
    <div className='bg-red-200'>
      <h1>Select {52 - PlayerHands.length} Cards</h1>
      </div>
  )
}
