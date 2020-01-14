class Player{
    constructor() {
      this.ships = []
      this.points = 12
      this.turn = false
    }

    addShip(ship = new Ship(3)){
        if (ship.length < 3 || ship.length > 5) { throw "Ship length must be between 3 and 5 units."}
        (this.ships.length >= 3) ? console.log("Fleet is full") : (this.ships.push(ship))
    }

}