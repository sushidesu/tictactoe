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
  const [stepNumber, setStepNumber] = useState(0)
  const [history, setHistory] = useState<History>(initHistory)

  const secondPlayer: Player = firstPlayer === "X" ? "O" : "X"
  const nextPlayer: Player = stepNumber % 2 === 0 ? firstPlayer : secondPlayer

  const squares = history[stepNumber]
  const winner: Player | undefined = calculateWinner(squares)

  const placeMarker = (index: number) => {
    if (squares[index] !== "BLANK" || winner) {
      return
    }
    const newHistory = history.slice(0, stepNumber + 1)
    const newSquares = [...newHistory[newHistory.length - 1]]
    newSquares[index] = nextPlayer

    setHistory(newHistory.concat([newSquares]))
    setStepNumber((prev) => prev + 1)
  }

  const jumpTo = (step: number) => {
    setStepNumber(step)
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
    : squares.some((square) => square === "BLANK")
    ? `NEXT_${nextPlayer}`
    : "DRAW"

  return {
    status,
    board,
    histories,
    renderMarker,
  }
}
