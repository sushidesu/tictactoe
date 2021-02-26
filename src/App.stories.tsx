import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"

import { App } from "./App"

const meta: Meta = {
  title: "TicTacToe/App",
  component: App,
}

const Template: Story = (args) => <App {...args} />

export const Default = Template.bind({})

export default meta
