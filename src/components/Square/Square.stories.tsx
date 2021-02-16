import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import { Square, Props } from "./Square"

const meta: Meta<Props> = {
  title: "TicTacToe/Square",
  component: Square,
}

const Template: Story<Props> = (args) => <Square {...args} />

const baseArgs: Props = {
  marker: null,
  onClick: () => {},
}

export const Default = Template.bind({})
Default.args = {
  ...baseArgs,
}
export const X = Template.bind({})
X.args = {
  ...baseArgs,
  marker: "X",
}

export const O = Template.bind({})
O.args = {
  ...baseArgs,
  marker: "O",
}

export default meta
