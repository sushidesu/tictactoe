import React from "react"
import { Game } from "components/Game"
import { Marker } from "tictactoe"

export const TicTacToe = () => {
  const WIDTH = 3
  const HEIGHT = 3
  const initBoard: Marker[] = Array(WIDTH * HEIGHT).fill(null)

  return (
    <Game
      width={WIDTH}
      height={HEIGHT}
      firstPlayer="X"
      initHistory={[initBoard]}
      markX={"X"}
      markO={"O"}
    />
  )
}
