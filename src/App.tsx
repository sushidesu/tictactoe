import React from "react"
import { Global, css } from "@emotion/react"
import { Game } from "components/Game"

export const App = () => {
  return (
    <div>
      <Global
        styles={css`
          body {
            font-family: sans-serif;
          }
        `}
      />
      <Game />
    </div>
  )
}
