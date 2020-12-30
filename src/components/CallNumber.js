import React, { useEffect, useContext } from "react"
import { createDisplay } from "../utils"
import { BingoContext } from "../context"
import { Button, DisplayElement } from "./styled"

const CallNumber = () => {
  const {
    current,
    setCurrent,
    called,
    setCalled,
    turns,
    setTurns,
  } = useContext(BingoContext)

  const getNumber = () => {
    if (turns > 0) {
      let num = Math.floor(Math.random() * 75) + 1

      while (called.indexOf(num) !== -1 && called.length < 75) {
        num = Math.floor(Math.random() * 75) + 1
      }

      setCurrent(num)
      setCalled((prev) => [...prev, num])
      setTurns((prev) => prev - 1)
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getNumber, [])

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Turns left: {turns}</h3>
      <DisplayElement>
        {turns >= 0 ? createDisplay(current) : "GAME OVER"}
      </DisplayElement>
      <Button onClick={getNumber}>NEXT</Button>
    </div>
  )
}

export default CallNumber
