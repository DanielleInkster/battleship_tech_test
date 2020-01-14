class Player{
  constructor(ship1 = new Ship(3), ship2 = new Ship(4), ship3 = new Ship(5) board = new Board) {
    this.ship1 = ship1
    this.ship2 = ship2
    this.ship3 = ship3
    this.points = 12
    this.turn = false
    this.board = board
    this.shipPositions = []
  }
}