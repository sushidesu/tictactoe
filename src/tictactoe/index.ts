import { useState } from "react"

export type Player = "X" | "O"

export type Marker = Player | null

export type History = Marker[][]

export const calculateWinner = (squares: Marker[]): Player | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (const line of lines) {
    const [a, b, c] = line
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export const useTicTacToe = (initHistory: History, firstPlayer: Player) => {
  const [xIsNext, setXIsNext] = useState(firstPlayer === "X")
  const [stepNumber, setStepNumber] = useState(0)
  const [history, setHistory] = useState<History>(initHistory)

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

  return {
    status,
    squares,
    history,
    placeMarker,
    jumpTo,
  }
}
