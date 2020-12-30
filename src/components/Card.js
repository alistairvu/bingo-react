import CardHeader from "./CardHeader"
import { CardContainer } from "./styled"
import React from "react"
import CardBody from "./CardBody"

const Card = () => {
  return (
    <CardContainer>
      <CardHeader />
      <CardBody />
    </CardContainer>
  )
}

export default Card
