import React from "react"
import { Game } from "components/Game"
import { Marker, History, Player, useHandleBoard } from "tictactoe"

export const TicTacToe = () => {
  const WIDTH = 3
  const HEIGHT = 3
  const INIT_BOARD: Marker[] = Array(WIDTH * HEIGHT).fill(null)
  const INIT_HISTORY: History = [INIT_BOARD]
  const FIRST_PLAYER: Player = "X"
  const MARK_X = "X"
  const MARK_O = "O"

  const props = useHandleBoard(INIT_HISTORY, FIRST_PLAYER, MARK_X, MARK_O)

  return (
    <Game
      width={WIDTH}
      height={HEIGHT}
      {...props}
    />
  )
}
