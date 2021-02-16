import React from "react"
import { Global, css } from "@emotion/react"
import { Game } from "components/Game"
import { Marker } from "tictactoe"

export const App = () => {
  const WIDTH = 3
  const HEIGHT = 3
  const initBoard: Marker[] = Array(WIDTH * HEIGHT).fill(null)

  return (
    <div>
      <Global
        styles={css`
          body {
            font-family: sans-serif;
          }
        `}
      />
      <Game width={WIDTH} height={HEIGHT} firstPlayer="X" initHistory={[initBoard]} />
    </div>
  )
}
