import { useState } from "react"
import { Player, Marker } from "../model/tictactoe-interface"

export type History = readonly Marker[][]

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
    const A = squares[a]
    const B = squares[b]
    const C = squares[c]

    if (A !== "BLANK" && A === B && A === C) {
      return A
    }
  }
  return null
}

export type UseTicTacToeProps = {
  initHistory: History
  firstPlayer: Player
  markX: string
  markO: string
}

export const useTicTacToe = ({
  initHistory,
  firstPlayer,
  markX,
  markO,
}: UseTicTacToeProps) => {
  const [xIsNext, setXIsNext] = useState(firstPlayer === "X")
  const [stepNumber, setStepNumber] = useState(0)
  const [history, setHistory] = useState<History>(initHistory)

  const squares = history[stepNumber]
  const winner: Player | null = calculateWinner(squares)

  const placeMarker = (index: number) => {
    if (squares[index] || winner) {
      return
    }
    const newHistory = history.slice(0, stepNumber + 1)
    const newSquares = [...newHistory[newHistory.length - 1]]
    newSquares[index] = xIsNext ? "X" : "O"

    setHistory(newHistory.concat([newSquares]))
    setStepNumber((prev) => prev + 1)
    setXIsNext((prev) => !prev)
  }

  const jumpTo = (step: number) => {
    setStepNumber(step)
    setXIsNext(step % 2 === 0)
  }

  const renderMarker = (mark: Marker) => {
    if (mark) {
      return mark === "X" ? markX : markO
    } else {
      return null
    }
  }

  type Status = `WIN_X` | `WIN_O` | "DRAW" | `NEXT_X` | `NEXT_O`

  const status: Status = winner
    ? `WIN_${winner}`
    : squares.every((square) => square !== "BLANK")
    ? "DRAW"
    : xIsNext
    ? "NEXT_X"
    : "NEXT_O"

  return {
    status,
    squares,
    history,
    xIsNext,
    placeMarker,
    jumpTo,
    renderMarker,
  }
}
