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

    isHit(coordinate){
      if (this.coordinates.includes(coordinate)){
        this.coordinates = this.coordinates.filter(function(ele){return ele != coordinate})
         return true
      } else {
          return false
      }
    }

    isSunk(coordinate){
       if (this.coordinates.includes(coordinate)){
          this.coordinates = "Ship sunk"
          this.shipSunk()
            return true
       } else {
          return false
       }
    }

    shipSunk(){
      this.sunk = true
    }
}