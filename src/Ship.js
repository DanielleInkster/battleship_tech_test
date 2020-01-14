class Ship{
    constructor(length = 3) {
      this.length = length
      this.coordinates = []
      this.positioned = false
    }

    checkPosition(...coordinates){
      this.positionCheck()
      this.incorrectCoordinates(...coordinates)
      this.overlappingCoordinates(...coordinates)
    }

    positionCheck(){
      if (this.positioned === true){ throw "Ship has already been placed."} else {this.positioned = true}
    }

    incorrectCoordinates(...coordinates){
      if(arguments.length != this.length) { throw "Number of co-ordinates entered does not equal ship length. Please try again."}
    }

    overlappingCoordinates(...coordinates){
      if(player.shipPositions.filter(value => -1 !== coordinates.indexOf(value)).length > 0) { throw "One or more of these co-ordinates is already filled. Please try again"}
    }
}