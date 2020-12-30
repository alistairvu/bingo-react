import React, { useEffect, useContext } from "react"
import { createDisplay } from "../utils"
import { BingoContext } from "../context"
import { Button, DisplayElement } from "./styled"

const CallNumber = () => {
  const { current, setCurrent, called, setCalled } = useContext(BingoContext)

  const getNumber = () => {
    let num = Math.floor(Math.random() * 75) + 1

    while (called.indexOf(num) !== -1 && called.length < 75) {
      num = Math.floor(Math.random() * 75) + 1
    }

    setCurrent(num)
    setCalled((prev) => [...prev, num])
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getNumber, [])

  return (
    <div>
      <DisplayElement>{createDisplay(current)}</DisplayElement>
      <Button onClick={getNumber}>NEXT</Button>
    </div>
  )
}

export default CallNumber
