import React from "react"
import styled from "@emotion/styled"
import { Status } from "model/tictactoe-interface"

type GameStatusProps = {
  status: Status
  markX?: string
  markO?: string
}

export const GameStatus = ({
  status,
  markX = "X",
  markO = "O",
}: GameStatusProps): JSX.Element => {
  const renderStatus = (): string => {
    const NEXT_IS = `Next Player: `
    const WINNER = `Winner: `
    switch (status) {
      case "NEXT_X":
        return NEXT_IS + markX
      case "NEXT_O":
        return NEXT_IS + markO
      case "DRAW":
        return "Draw"
      case "WIN_X":
        return WINNER + markX
      case "WIN_O":
        return WINNER + markO
    }
  }
  return <Wrapper data-testid="status">{renderStatus()}</Wrapper>
}

const Wrapper = styled.p`
  font-weight: bold;
`
