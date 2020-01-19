class Player{
  constructor(fleet = [ new Ship(3), new Ship(4), new Ship(5)], points = 12, board = new Board, score = new Score) {
    this.fleet = fleet
    this.turn = false
    this.board = board
    this.score = score
  }

  positionShip(shipNum, [...coordinates]) { 
    this.fleet[shipNum].checkLength(...coordinates),
    this.board.checkIfOccupied(...coordinates),
    this.fleet[shipNum].setPosition()
    coordinates.forEach( item => { this.fleet[shipNum].coordinates.push(item) && this.board.occupiedCoordinates.push(item)}
  )}

  fire(coordinate){
    let shipNum;
      for (shipNum = 0; shipNum < this.fleet.length; shipNum++) {
        if(this.fleet[shipNum].coordinates.length > 1){return this.checkHit(shipNum, coordinate)}
        if(this.fleet[shipNum].coordinates.length===1){return this.checkSunk(shipNum, coordinate)}
    }
  }

  checkHit(coordinate){
    let shipNum;
      for (shipNum = 0; shipNum < this.fleet.length; shipNum++) {
        return((this.fleet[shipNum].checkHit(coordinate)===true)?"Hit!":"Miss!")
      }
  }

  checkSunk(coordinate){
    let shipNum;
      for (shipNum = 0; shipNum < this.fleet.length; shipNum++) {
        return(this.fleet[shipNum].checkHit(coordinate) === true)?"Hit and sunk!":"Miss!"
      }
  }
}