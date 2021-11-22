import { Marker, Player } from "./tictactoe-interface"

export const calculateWinner = (squares: Marker[]): Player | undefined => {
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
  return undefined
}
