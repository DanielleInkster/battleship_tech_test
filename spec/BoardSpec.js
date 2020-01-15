describe("Board", function() {

    beforeEach(function() {
      board = new Board();
    });

describe('checkIfOccupied', function(){
    it("checks if spaces are already occupied", () =>{
    board.occupiedCoordinates = ['a1','a2','a3']
    expect(function(){ board.checkIfOccupied('a3','a4','a5'); } ).toThrow("One or more of the co-ordinates entered is already occupied. Please try again.");
    })
  })

})