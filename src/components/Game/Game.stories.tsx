import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import { Game, Props } from "./Game"

const meta: Meta<Props> = {
  title: "TicTacToe/Game",
  component: Game,
}

const Template: Story<Props> = (args) => <Game {...args} />

const baseArgs: Props = {
  width: 3,
  height: 3,
  squares: Array(9).fill(null),
  xIsNext: true,
  history: [[]],
  placeMarker: () => {},
  renderMarker: (marker) => marker,
  jumpTo: () => {},
}

export const Default = Template.bind({})
Default.args = {
  ...baseArgs,
}
export const WinX = Template.bind({})
WinX.args = {
  ...baseArgs,
  squares: ["X", "X", "X", null, null, null, null, null, null],
}

export const WinO = Template.bind({})
WinO.args = {
  ...baseArgs,
  squares: ["O", "O", "O", null, null, null, null, null, null],
}

export const Draw = Template.bind({})
Draw.args = {
  ...baseArgs,
  squares: ["O", "X", "O", "X", "O", "X", "X", "O", "X"],
}

export default meta
