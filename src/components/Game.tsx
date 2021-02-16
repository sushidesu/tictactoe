import React, { useState } from "react"
import styled from "@emotion/styled"
import { History, calculateWinner } from "tictactoe"
import { Board } from "./Board"

export const Game: React.FC = () => {
  const WIDTH = 3
  const HEIGHT = 3
  const [xIsNext, setXIsNext] = useState(true)
  const [stepNumber, setStepNumber] = useState(0)
  const [history, setHistory] = useState<History>([Array(WIDTH * HEIGHT).fill(null)])

  const squares = history[stepNumber]
  const winner = calculateWinner(squares)
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`

  const placeMarker = (index: number) => {
    if (squares[index] || winner) {
      return
    }
    setHistory((prev) => {
      const newHistory = [...prev].slice(0, stepNumber + 1)
      const current = newHistory[newHistory.length - 1]
      const _squares = [...current]
      _squares[index] = xIsNext ? "X" : "O"

      setStepNumber(newHistory.length)
      return newHistory.concat([_squares])
    })
    setXIsNext((prev) => !prev)
  }

  const jumpTo = (step: number) => {
    setStepNumber(step)
    setXIsNext(step % 2 === 0)
  }

  return (
    <Wrapper>
      <div className="game-board">
        <Board width={WIDTH} height={HEIGHT} squares={squares} placeMarker={placeMarker} />
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
