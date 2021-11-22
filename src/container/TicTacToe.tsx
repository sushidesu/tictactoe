import React from "react"
import { Game, GameProps } from "components/Game"
import { Player, Marker } from "model/tictactoe-interface"
import { range } from "util/range"

export const TicTacToe = () => {
  const WIDTH = 3
  const HEIGHT = 3
  const INIT_BOARD: Marker[] = [...range(WIDTH * HEIGHT)].map<Marker>(
    () => "BLANK"
  )
  const INIT_HISTORY: Marker[][] = [INIT_BOARD]
  const FIRST_PLAYER: Player = "X"
  const MARK_X = "X"
  const MARK_O = "O"

  const props: GameProps = {
    width: WIDTH,
    height: HEIGHT,
    initHistory: INIT_HISTORY,
    firstPlayer: FIRST_PLAYER,
    markX: MARK_X,
    markO: MARK_O,
  }

  return <Game {...props} />
}
