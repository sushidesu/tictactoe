import { useState } from "react"

export type Player = "X" | "O"

export type Marker = Player | null

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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export const useHandleBoard = (initHistory: History, firstPlayer: Player, markX: string, markO: string) => {
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
      return mark === "X"
        ? markX
        : markO
    } else {
      return null
    }
  }

  return {
    squares,
    history,
    xIsNext,
    placeMarker,
    jumpTo,
    renderMarker,
  }
}
