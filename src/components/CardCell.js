import { Cell } from "./styled"
import React, { useState, useContext } from "react"
import { BingoContext } from "../context"

const CardCell = (props) => {
  const [selected, setSelected] = useState(false)
  const { marked, setMarked, called } = useContext(BingoContext)

  const handleClick = () => {
    const { index, value } = props
    if (called.indexOf(value) > -1) {
      setSelected((prev) => !prev)
      const arr = [...marked]
      arr[index] = 1 - arr[index]
      setMarked(arr)
    } else {
      alert("Wrong number!")
    }
  }

  return (
    <Cell selected={selected} onClick={handleClick}>
      {props.children}
    </Cell>
  )
}

export default CardCell
