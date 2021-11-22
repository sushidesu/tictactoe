import React from "react"

type HistoryButtonProps = {
  index: number
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const HistoryButton = ({
  index,
  onClick,
}: HistoryButtonProps): JSX.Element => {
  const text = index === 0 ? "Go to start" : `Go to # ${index}`
  return <button onClick={onClick}>{text}</button>
}
