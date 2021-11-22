import { useState } from "react"
import { range } from "util/range"
import { Player, Marker, Status } from "model/tictactoe-interface"
import { calculateWinner } from "model/calculate-winner"

type History = readonly Marker[][]

export type UseTicTacToeProps = {
  width: number
  height: number
  firstPlayer: Player
  initHistory: History
}

type Cell = {
  index: number
  marker: Marker
  handler: () => void
}

type HistoryItem = {
  index: number
  handler: () => void
}

type UseTicTacToeResponse = {
  status: Status
  board: readonly Cell[][]
  histories: readonly HistoryItem[]
}

export const useTicTacToe = (
  props: UseTicTacToeProps
): UseTicTacToeResponse => {
  const { width, height, initHistory, firstPlayer } = props

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

  const status: Status = winner
    ? `WIN_${winner}`
    : squares.some((square) => square === "BLANK")
    ? `NEXT_${nextPlayer}`
    : "DRAW"

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

  const histories: readonly HistoryItem[] = [...range(history.length)].map(
    (index) => ({
      index,
      handler: () => {
        jumpTo(index)
      },
    })
  )

  return {
    status,
    board,
    histories,
  }
}
