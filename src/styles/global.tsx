import React from "react"
import { Global, css } from "@emotion/react"

export const GlobalStyles: React.VFC = () => (
  <Global
    styles={css`
      body {
        font-family: sans-serif;
      }
    `}
  />
)
