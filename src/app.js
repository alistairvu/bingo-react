import React from "react"
import CallNumber from "./components/CallNumber"
import Card from "./components/Card"
import { AppContainer } from "./components/styled"
import SubmitButton from "./components/SubmitButton"

const App = () => {
  return (
    <AppContainer>
      <CallNumber />
      <Card />
      <SubmitButton />
    </AppContainer>
  )
}

export default App
