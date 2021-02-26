import React from "react"
import styled from "@emotion/styled"
import { Marker } from "tictactoe"
import { Square } from "components/Square"

export type Props = {
  width: number
  height: number
  squares: Marker[]
  onSquareClick: (index: number) => () => void
  renderMarker: (marker: Marker) => string | null
}

export const Board: React.FC<Props> = ({
  width,
  height,
  squares,
  onSquareClick,
  renderMarker,
}) => {
  return (
    <Wrapper>
      {Array.from({ length: height }).map((_, h) => (
        <div key={h} className="board-row">
          {Array.from({ length: width }).map((_, w) => {
            const index = h * width + w
            return (
              <Square
                key={index}
                onClick={onSquareClick(index)}
                marker={renderMarker(squares[index])}
              />
            )
          })}
        </div>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .board-row {
    display: flex;
    flex-direction: row;
  }
`
