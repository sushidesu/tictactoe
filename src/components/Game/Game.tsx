import React from "react"
import styled from "@emotion/styled"
import { Player, History, useTicTacToe } from "tictactoe"
import { Board } from "components/Board"

type Props = {
  width: number
  height: number
  firstPlayer: Player
  initHistory: History
}

export const Game: React.FC<Props> = ({ width, height, firstPlayer, initHistory }) => {
  const { status, squares, history, placeMarker, jumpTo } = useTicTacToe(initHistory, firstPlayer)

  return (
    <Wrapper>
      <div className="game-board">
        <Board width={width} height={height} squares={squares} placeMarker={placeMarker} />
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
