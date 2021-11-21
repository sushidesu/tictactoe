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
  const { status, histories, board } = useTicTacToe({
    initHistory,
    firstPlayer,
    width,
    height,
    markX,
    markO,
  })

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
        <GameStatus status={status} />
        <ol>
          {histories.map((h) => (
            <li key={h.index}>
              <HistoryButton index={h.index} onClick={h.handler} />
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
