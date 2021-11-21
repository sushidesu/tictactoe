import React from "react"
import styled from "@emotion/styled"
import { useTicTacToe, UseTicTacToeProps } from "tictactoe"
import { BoardRow } from "components/BoardRow"
import { Square } from "components/Square"
import { GameStatus } from "components/GameStatus"
import { HistoryButton } from "components/HistoryButton"

export type Props = UseTicTacToeProps & {
  width: number
  height: number
}

export const Game: React.FC<Props> = ({
  width,
  height,
  firstPlayer,
  initHistory,
  markX = "X",
  markO = "O",
}) => {
  const { status, history, board, jumpTo } = useTicTacToe({
    initHistory,
    firstPlayer,
    width,
    height,
    markX,
    markO,
  })

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

  return (
    <Wrapper>
      <div className="game-board">
        {board.map((row, row_i) => (
          <BoardRow key={row_i}>
            {row.map((cell) => (
              <Square
                key={cell.index}
                index={cell.index}
                marker={cell.marker}
                onClick={cell.handler}
              />
            ))}
          </BoardRow>
        ))}
      </div>
      <div className="game-info">
        <GameStatus>{renderStatus()}</GameStatus>
        <ol>
          {history.map((_, index) => (
            <li key={index}>
              <HistoryButton index={index} onClick={() => jumpTo(index)} />
            </li>
          ))}
        </ol>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  .game-info {
    margin-left: 1rem;
  }
`
