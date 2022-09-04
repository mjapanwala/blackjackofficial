let coins = [
  {
    firstCoin: {
      coinValue: 5,
      color: "bg-white-600",
    },
  },
  {
    secondCoin: {
      coinValue: 10,
      color: 'bg-red-600'
    },
  },
  {
    thirdCoin: {
      coinValue: 20,
      color: 'bg-green-600'
    },
  },
  {
    fourthCoin: {
      coinValue: 50,
      color: 'bg-blue-600'
    },
  },
  {
    fifthCoin: {
      coinValue: 100,
      color: 'bg-black-600'
    },
  },
]


const iteration = coins.map((coin, index, array) => {
  return array[coin]
})
console.log(iteration)