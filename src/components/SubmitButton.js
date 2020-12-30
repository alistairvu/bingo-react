import React, { useContext } from "react"
import { Button } from "./styled"
import { BingoContext } from "../context"

const SubmitButton = () => {
  const { marked } = useContext(BingoContext)

  const bingoCheck = () => {
    console.log(marked)

    const lines = [
      [0, 5, 10, 15, 20],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
      [0, 6, 12, 18, 24],
      [4, 8, 12, 16, 20],
    ]

    for (let i = 0; i < 12; i++) {
      const line = lines[i]
      let sum = 0
      line.map((key) => (sum += marked[key]))
      if (sum === 5) {
        alert("BINGO!")
        return
      }
    }

    alert("No bingo yet...")
  }

  return <Button onClick={bingoCheck}>Submit</Button>
}

export default SubmitButton
