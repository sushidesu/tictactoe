import React from "react"
import { action } from "@storybook/addon-actions"
import { Story, Meta } from "@storybook/react/types-6-0"

import { Square, Props } from "./Square"

const meta: Meta<Props> = {
  title: "TicTacToe/Square",
  component: Square,
}

const Template: Story<Props> = (args) => <Square {...args} />

const baseArgs: Props = {
  marker: null,
  onClick: action("clicked"),
}

export const Default = Template.bind({})
Default.args = {
  ...baseArgs,
}
export const X = Template.bind({})
X.args = {
  ...baseArgs,
  marker: "丁",
}

export const O = Template.bind({})
O.args = {
  ...baseArgs,
  marker: "半",
}

export default meta
