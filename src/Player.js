class Player{
  constructor(fleet = [ new Ship(3), new Ship(4), new Ship(5)], points = 12, board = new Board) {
    this.fleet = fleet
    this.points = points
    this.turn = false
    this.board = board
    this.hits = []
    this.misses = []
  }

  positionShip(shipNum, [...coordinates]) { 
    this.fleet[shipNum].checkLength(...coordinates),
    this.board.checkIfOccupied(...coordinates),
    this.fleet[shipNum].setPosition()
    coordinates.forEach( item => { this.fleet[shipNum].coordinates.push(item) && this.board.occupiedCoordinates.push(item)}
  )}
}