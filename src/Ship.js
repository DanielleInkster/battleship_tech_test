class Ship{
    constructor(length = 3) {
      this.length = length
      this.coordinates = []
      this.positioned = false
      this.sunk = false
    }

    checkLength(...coordinates){
      if (coordinates.length != this.length) {throw `This ship requires ${this.length} co-ordinates. Please try again.`}
    }

    setPosition(){
      if (this.positioned === true) {throw "This ship has already been placed"} else {this.positioned = true}
    }

    checkHit(coordinate){
      if (this.coordinates.includes(coordinate) && this.coordinates.length > 1 ){
        this.coordinates = this.coordinates.filter(function(ele){return ele != coordinate})
        return 'Hit!'
      } else if (this.coordinates.includes(coordinate) && this.coordinates.length === 1){
        this.coordinates = "Ship sunk"
        return 'Hit and sunk!'
      } else {
        return "Miss!"
      }
    }
}