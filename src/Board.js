class Board{
    constructor(row = 8) {
      this.availableCoordinates = [
        'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 
        'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 
        'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 
        'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 
        'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 
        'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 
        'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8'
        ]
      this.row = row
      this.occupiedCoordinates =[]
      this.hits = []
      this.misses = []
    }

    checkIfOccupied(...coordinates){
      coordinates.forEach(item => {if (this.occupiedCoordinates.includes(item)){
        throw "One or more of the co-ordinates entered is already occupied. Please try again."
        }
      })
    }

    checkIfValid(...coordinates){
      coordinates.forEach(item => {if (!this.availableCoordinates.includes(item)){
        throw "Co-ordinates can only include letters A-H and numbers 1-8 (Ex: 'A1', 'C7')"
        }
      })
    }

    checkIfSequential(...coordinates){
      for (var i = 0; i < coordinates.length-1; i++) {
        var first = this.availableCoordinates.indexOf(coordinates[i])
        var second = this.availableCoordinates.indexOf(coordinates[i+1])
        if(((first+1)!=second)&&(first+this.row!= second)){
          throw "Please enter sequential coordinates."
        }
      }
    }

    addHit(coordinate){
      let index = this.availableCoordinates.indexOf(coordinate);
        if (index !== -1) {
          this.availableCoordinates[index] = "hit";
        } 
      }

    addMiss(coordinate){
      let index = this.availableCoordinates.indexOf(coordinate);
        if (index !== -1) {
          this.availableCoordinates[index] = "miss";
        } 
    }

    returnBoard(){
      return this.availableCoordinates
    }
}