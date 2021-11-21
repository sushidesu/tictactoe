import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import { action } from "@storybook/addon-actions"

import { Board, Props } from "./Board"

export default {
  title: "TicTacToe/Board",
  component: Board,
} as Meta

const Template: Story<Props> = (args) => <Board {...args} />

const baseArgs: Props = {
  width: 3,
  height: 3,
  onSquareClick: (index) => action(`clicked: ${index}`),
  squares: [],
  renderMarker: (marker) => marker,
}

export const Default = Template.bind({})
Default.args = {
  ...baseArgs,
  squares: Array(9).fill(null),
}

export const AllX = Template.bind({})
AllX.args = {
  ...baseArgs,
  squares: Array(9).fill("X"),
}

export const AllO = Template.bind({})
AllO.args = {
  ...baseArgs,
  squares: Array(9).fill("O"),
}

export const AllTriangle = Template.bind({})
AllTriangle.args = {
  ...baseArgs,
  squares: Array(9).fill("△"),
}
