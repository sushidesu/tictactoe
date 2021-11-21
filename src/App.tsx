import React from "react"
import { GlobalStyles } from "styles/global"
import { TicTacToe } from "container/TicTacToe"

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <TicTacToe />
    </div>
  )
}
