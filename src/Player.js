class Player{
  constructor(fleet = [ new Ship(3), new Ship(4), new Ship(5)], points = 12, board = new Board) {
    this.fleet = fleet
    this.points = points
    this.turn = false
    this.board = board
  }
}