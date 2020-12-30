import React from "react"
import ReactDOM from "react-dom"
import App from "./app"
import { BingoProvider } from "./context"
import "./index.css"

document.title = "BINGO!"
ReactDOM.render(
  <BingoProvider>
    <App />
  </BingoProvider>,
  document.getElementById("root")
)
