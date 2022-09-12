import { BetContainer } from '@containers/BettingContainer/BettingContainer'
import React, {useContext} from 'react'

export default function TotalBet() {
    const {betStateCoin} = useContext(BetContainer)
    const reducer = (accumulator, item) => {
        return accumulator + item.quantity * item.coinValue
      }
     
        const totalValue = betStateCoin.reduce(reducer, 0)
  return (
    <h1 className="p-2 bg-green-300 mb-2">Your Total Bet Is <span className="text-red-green">{totalValue}</span></h1>

  )
}
