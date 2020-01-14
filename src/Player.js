class Player{
    constructor( ship1 = new Ship(3), ship2 = new Ship(4), ship1 = new Ship(5)) {
      this.ship1 = ship1
      this.ship2 = ship2
      this.ship3 = ship3
      this.points = 12
      this.turn = false
      this.board = new Board
      this.shipPositions = []
    }

    positionShip(ship, ...coordinates){
      if(ship.positioned === true) { throw "Ship has already been placed."}
      if(arguments.length != this.length) { throw "Number of co-ordinates entered does not equal ship length. Please try again."}
      if(this.position.includes(...coordinates)) { throw "One or more of these co-ordinates is already filled. Please try again"}
      this.shipPositions << coordinates
      }

}