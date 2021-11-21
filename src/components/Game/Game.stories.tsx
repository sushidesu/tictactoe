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
  firstPlayer: "X",
  initHistory: [[]],
  markX: "X",
  markO: "O",
}

export const Default = Template.bind({})
Default.args = {
  ...baseArgs,
}
export const WinX = Template.bind({})
WinX.args = {
  ...baseArgs,
  initHistory: [
    ["X", "X", "X", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK"],
  ],
}

export const WinO = Template.bind({})
WinO.args = {
  ...baseArgs,
  initHistory: [
    ["O", "O", "O", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK", "BLANK"],
  ],
}

export const Draw = Template.bind({})
Draw.args = {
  ...baseArgs,
  initHistory: [["O", "X", "O", "X", "O", "X", "X", "O", "X"]],
}

export default meta
