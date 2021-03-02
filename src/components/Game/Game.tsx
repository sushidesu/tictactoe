import React from "react"
import styled from "@emotion/styled"
import { calculateWinner, useHandleBoard } from "tictactoe"
import { Board } from "components/Board"

export type Props = ReturnType<typeof useHandleBoard> & {
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
  const {
    status,
    squares,
    history,
    placeMarker,
    jumpTo,
    renderMarker,
  } = useTicTacToe(initHistory, firstPlayer, markX, markO)

  const onSquareClick = (index: number) => () => placeMarker(index)

  return (
    <Wrapper>
      <div className="game-board">
        <Board
          width={width}
          height={height}
          squares={squares}
          onSquareClick={onSquareClick}
          renderMarker={renderMarker}
        />
      </div>
      <div className="game-info">
        <div className="status" data-testid="status">
          {status}
        </div>
        <ol>
          {history.map((_squares, move) => {
            const desc = move ? `Go to # ${move}` : "Go to start"
            return (
              <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
              </li>
            )
          })}
        </ol>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  .game-info {
    margin-left: 1rem;
    .status {
      font-weight: bold;
    }
  }
`
