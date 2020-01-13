class Player{
    constructor() {
      this.ships = []
      this.points = 12
    }

    addShip(ship = new Ship(3)){
        (this.ships.length >= 3) ? console.log("Fleet is full") : (this.ships.push(ship))
      }
}