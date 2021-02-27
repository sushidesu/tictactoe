import React from "react"
import styled from "@emotion/styled"
import { useTicTacToe } from "tictactoe"
import { Board } from "components/Board"

export type Props = ReturnType<typeof useTicTacToe> & {
  width: number
  height: number
}

export const Game: React.FC<Props> = ({
  width,
  height,
  squares,
  history,
  winner,
  xIsNext,
  placeMarker,
  jumpTo,
  renderMarker,
}) => {

  const onSquareClick = (index: number) => () => placeMarker(index)
  const status = winner
    ? `Winner: ${renderMarker(winner)}`
    : squares.every((square) => square !== null)
    ? `Draw`
    : `Next player: ${xIsNext ? renderMarker("X") : renderMarker("O")}`

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
        <div className="status">{status}</div>
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
