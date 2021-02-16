import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import { Game, Props } from "./Game"

export default {
  title: "TicTacToe/Game",
  component: Game,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story<Props> = (args) => <Game {...args} />

const baseArgs: Props = {
  width: 3,
  height: 3,
  firstPlayer: "X",
  initHistory: [Array(9).fill(null)],
}

export const Default = Template.bind({})
Default.args = {
  ...baseArgs,
}

export const WinX = Template.bind({})
WinX.args = {
  ...baseArgs,
  initHistory: [["X", "X", "X", null, null, null, null, null, null]],
}

export const WinO = Template.bind({})
WinO.args = {
  ...baseArgs,
  initHistory: [["O", "O", "O", null, null, null, null, null, null]],
}

export const Draw = Template.bind({})
Draw.args = {
  ...baseArgs,
  initHistory: [["O", "X", "O", "X", "O", "X", "X", "O", "X"]],
}
