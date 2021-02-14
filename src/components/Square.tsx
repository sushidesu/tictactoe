import React from "react"
import styled from "@emotion/styled"

type Props = {
  value: number
}

export const Square: React.FC<Props> = ({ value }) => {
  return <Button>{value}</Button>
}

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #ccc;
  min-width: 40px;
  min-height: 40px;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
`
