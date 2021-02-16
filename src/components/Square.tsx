import React from "react"
import styled from "@emotion/styled"

type Props = {
  value: number
  onClick: () => void
}

export const Square: React.FC<Props> = ({ value, onClick }) => {
  return <Button onClick={onClick}>{value}</Button>
}

const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: 1px solid #999;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin: -1px -1px 0 0;
  padding: 0;
  text-align: center;
  width: 34px;

  &:focus {
    outline: none;
  }
`
