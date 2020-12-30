import React, { useState, useEffect } from "react"
import { createBoard, createMarked } from "./utils"

const BingoContext = React.createContext()

const BingoProvider = ({ children }) => {
  const [board, setBoard] = useState([])
  const [marked, setMarked] = useState(createMarked)
  const [called, setCalled] = useState([])
  const [current, setCurrent] = useState(0)
  const [turns, setTurns] = useState(40)

  // Initialise the board
  useEffect(() => setBoard(createBoard()), [])

  return (
    <BingoContext.Provider
      value={{
        board,
        marked,
        setMarked,
        called,
        setCalled,
        current,
        setCurrent,
        turns,
        setTurns,
      }}
    >
      {children}
    </BingoContext.Provider>
  )
}

export { BingoProvider, BingoContext }
