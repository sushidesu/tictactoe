import React from "react"
import { Game, Props } from "components/Game"
import { Player, Marker } from "model/tictactoe-interface"
import { History } from "tictactoe"

export const TicTacToe = () => {
  const WIDTH = 3
  const HEIGHT = 3
  const INIT_BOARD: Marker[] = Array(WIDTH * HEIGHT).fill("BLANK")
  const INIT_HISTORY: History = [INIT_BOARD]
  const FIRST_PLAYER: Player = "X"
  const MARK_X = "X"
  const MARK_O = "O"

  const props: Props = {
    width: WIDTH,
    height: HEIGHT,
    initHistory: INIT_HISTORY,
    firstPlayer: FIRST_PLAYER,
    markX: MARK_X,
    markO: MARK_O,
  }

  return <Game {...props} />
}
