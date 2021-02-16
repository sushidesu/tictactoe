import React, { useState } from "react"
import styled from "@emotion/styled"
import { Marker, calculateWinner } from "tictactoe"
import { Square } from "./Square"

export const Board: React.FC = () => {
  const WIDTH = 3
  const HEIGHT = 3
  const [squares, setSquares] = useState<Marker[]>(Array(WIDTH * HEIGHT).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const winner = calculateWinner(squares)
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`

  const placeMarker = (index: number) => () => {
    if (squares[index] || winner) {
      return
    }
    setSquares((prev) => {
      const next = [...prev]
      next[index] = xIsNext ? "X" : "O"
      return next
    })
    setXIsNext((prev) => !prev)
  }

  return (
    <Wrapper>
      <div className="status">{status}</div>
      {Array.from({ length: HEIGHT }).map((_, h) => (
        <div key={h} className="board-row">
          {Array.from({ length: WIDTH }).map((_, w) => {
            const index = h * WIDTH + w
            return <Square key={index} marker={squares[index]} onClick={placeMarker(index)} />
          })}
        </div>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .status {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  .board-row {
    display: flex;
    flex-direction: row;
  }
`
