import React, {useState} from "react"
import styled from "@emotion/styled"
import { Square } from "./Square"

export const Board: React.FC = () => {
  const WIDTH = 3
  const HEIGHT = 3
  const status = "Next player: X"
  const [squares, setSquares] = useState(Array(WIDTH * HEIGHT).fill(null))
  const [firstPlayerIsNext, setFirstPlayerIsNext] = useState(true)

  const placeMarker = (index: number) => () => {
    setSquares(prev => {
      const next = [...prev]
      next[index] = firstPlayerIsNext ? "X" : "O"
      return next
    })
    setFirstPlayerIsNext(prev => !prev)
  }

  return (
    <Wrapper>
      <div className="status">{status}</div>
      {Array.from({ length: HEIGHT }).map((_, h) => (
        <div key={h} className="board-row">
          {Array.from({ length: WIDTH }).map((_, w) => {
            const index = h * WIDTH + w
            return <Square
              key={index}
              value={squares[index]}
              onClick={placeMarker(index)}
              />
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
