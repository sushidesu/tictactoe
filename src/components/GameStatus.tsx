import React from "react"
import styled from "@emotion/styled"

export const GameStatus = ({
  children,
}: {
  children?: string
}): JSX.Element => {
  return <Status data-testid="status">{children}</Status>
}

const Status = styled.p`
  font-weight: bold;
`
