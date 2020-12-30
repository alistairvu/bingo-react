import React, { useContext } from "react"
import { BingoContext } from "../context"
import CardCell from "./CardCell"
import { BodyContainer, FreeCell } from "./styled"

const CardBody = () => {
  const { board } = useContext(BingoContext)

  const display = board.map((item, index) => {
    if (item === "FREE") {
      return <FreeCell key={item}>FREE</FreeCell>
    }
    return (
      <CardCell key={item} index={index} value={item}>
        {item}
      </CardCell>
    )
  })

  return <BodyContainer>{display}</BodyContainer>
}

export default CardBody
