import React from "react"
import { GlobalStyles } from "../src/styles/global"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

type Decorator = (story: () => JSX.Element) => JSX.Element

export const decorators: Decorator[] = [
  (Story) => (
    <div>
      <GlobalStyles />
      <Story />
    </div>
  ),
]
