class Player{
    constructor() {
      this.ships = []
      this.points = 12
    }

    addShip(ship = new Ship(3)){
        if(this.ships.length >= 3){
        console.log("Fleet full.")
        }
        else {
        this.ships.push(ship)
        }
      }
}