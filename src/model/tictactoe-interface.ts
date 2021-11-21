export type Player = "X" | "O"

export type Marker = Player | "BLANK"

export type Status = `WIN_${Player}` | "DRAW" | `NEXT_${Player}`
