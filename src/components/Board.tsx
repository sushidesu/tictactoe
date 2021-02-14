import React from "react"
import styled from "@emotion/styled"
import { Square } from "./Square"

export const Board: React.FC = () => {
  const status = "Next player: X"
  return (
    <Wrapper>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={0} />
        <Square value={1} />
        <Square value={2} />
      </div>
      <div className="board-row">
        <Square value={3} />
        <Square value={4} />
        <Square value={5} />
      </div>
      <div className="board-row">
        <Square value={6} />
        <Square value={7} />
        <Square value={8} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .status {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
`
