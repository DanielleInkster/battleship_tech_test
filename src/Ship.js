class Ship{
    constructor(length = 3) {
      this.length = length
      this.position = []
    }

    positionShip(...coordinates){
    if(arguments.length != this.length) { throw "Number of co-ordinates entered does not equal ship length. Please try again."}
    }
}