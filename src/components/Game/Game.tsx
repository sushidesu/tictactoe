import React from "react"
import styled from "@emotion/styled"
import { useTicTacToe, UseTicTacToeProps } from "hooks/useTicTacToe"
import { BoardRow } from "components/BoardRow"
import { Square } from "components/Square"
import { GameStatus } from "components/GameStatus"
import { HistoryButton } from "components/HistoryButton"

export type GameProps = UseTicTacToeProps & {
  markX?: string
  markO?: string
}

export const Game: React.FC<GameProps> = ({
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
                markX={markX}
                onClick={cell.handler}
              />
            ))}
          </BoardRow>
        ))}
      </div>
      <div className="game-info">
        <GameStatus status={status} markX={markX} markO={markO} />
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
