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
  }