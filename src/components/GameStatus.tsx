import React from "react"
import styled from "@emotion/styled"
import { Status } from "model/tictactoe-interface"

type GameStatusProps = {
  status: Status
}

export const GameStatus = ({ status }: GameStatusProps): JSX.Element => {
  const renderStatus = (): string => {
    const NEXT_IS = `Next Player: `
    const WINNER = `Winner: `
    switch (status) {
      case "NEXT_X":
        return NEXT_IS + "X"
      case "NEXT_O":
        return NEXT_IS + "O"
      case "DRAW":
        return "Draw"
      case "WIN_X":
        return WINNER + "X"
      case "WIN_O":
        return WINNER + "O"
    }
  }
  return <Wrapper data-testid="status">{renderStatus()}</Wrapper>
}

const Wrapper = styled.p`
  font-weight: bold;
`
