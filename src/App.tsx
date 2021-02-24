import React from "react"
import { GlobalStyles } from "styles/global"
import { Game } from "components/Game"
import { Marker } from "tictactoe"

export const App = () => {
  const WIDTH = 4
  const HEIGHT = 3
  const initBoard: Marker[] = Array(WIDTH * HEIGHT).fill(null)

  return (
    <div>
      <GlobalStyles />
      <Game
        width={WIDTH}
        height={HEIGHT}
        firstPlayer="X"
        initHistory={[initBoard]}
        markX={"X"}
        markO={"O"}
      />
    </div>
  )
}
