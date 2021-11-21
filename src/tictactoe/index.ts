import { useState } from "react"
import { range } from "util/range"
import { Player, Marker, Status } from "model/tictactoe-interface"
import { calculateWinner } from "model/calculate-winner"

export type History = readonly Marker[][]

export type UseTicTacToeProps = {
  initHistory: History
  firstPlayer: Player
  width: number
  height: number
  markX: string
  markO: string
}

export const useTicTacToe = ({
  initHistory,
  firstPlayer,
  width,
  height,
  markX,
  markO,
}: UseTicTacToeProps) => {
  const [xIsNext, setXIsNext] = useState(firstPlayer === "X")
  const [stepNumber, setStepNumber] = useState(0)
  const [history, setHistory] = useState<History>(initHistory)

  const squares = history[stepNumber]
  const winner = calculateWinner(squares)

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

  type Cell = {
    index: number
    marker: Marker
    handler: () => void
  }

  const board: readonly Cell[][] = [...range(height)].map((h) =>
    [...range(width)].map((w) => {
      const index = h * width + w
      return {
        index,
        marker: squares[index],
        handler: () => {
          placeMarker(index)
        },
      }
    })
  )

  type HistoryItem = {
    index: number
    handler: () => void
  }
  const histories: readonly HistoryItem[] = [...range(history.length)].map(
    (index) => ({
      index,
      handler: () => {
        jumpTo(index)
      },
    })
  )

  const status: Status = winner
    ? `WIN_${winner}`
    : squares.every((square) => square !== "BLANK")
    ? "DRAW"
    : xIsNext
    ? "NEXT_X"
    : "NEXT_O"

  return {
    status,
    board,
    histories,
    renderMarker,
  }
}
