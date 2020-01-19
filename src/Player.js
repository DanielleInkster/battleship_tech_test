class Player{
  constructor(fleet = [ new Ship(3), new Ship(4), new Ship(5)], board = new Board, score = new Score) {
    this.fleet = fleet
    this.turn = false
    this.board = board
    this.score = score
  }

  positionShip(shipNum, [...coordinates]) { 
    this.fleet[shipNum].checkLength(...coordinates),
    this.board.checkIfValid(...coordinates),
    this.board.checkIfOccupied(...coordinates),
    this.fleet[shipNum].setPosition()
      coordinates.forEach( item => { this.fleet[shipNum].coordinates.push(item) && this.board.occupiedCoordinates.push(item)}
  )}

  fire(coordinate){
    let shipNum;
      for (shipNum = 0; shipNum < this.fleet.length; shipNum++) {
        if(this.fleet[shipNum].coordinates.length > 1){return this.checkHit(coordinate)}
        if(this.fleet[shipNum].coordinates.length===1){return this.checkSunk(coordinate)}
    }
  }

  checkHit(coordinate){
    let shipNum;
      for (shipNum = 0; shipNum < this.fleet.length; shipNum++) {
        if(this.fleet[shipNum].isHit(coordinate)===true){
          this.shipHit(coordinate)
            return "Hit!"
        } else {
          this.board.addMiss(coordinate)
            return "Miss!"
        }
      }
  }

  checkSunk(coordinate){
    let shipNum;
      for (shipNum = 0; shipNum < this.fleet.length; shipNum++) {
        if (this.fleet[shipNum].isSunk(coordinate) === true){
          this.shipHit(coordinate)
            return "Hit and sunk!"}
        else {
          this.board.addMiss(coordinate)
             return "Miss!"
        }
      }
  }

  shipHit(coordinate){
    this.board.addHit(coordinate)
    this.score.changePoints()
  }
}