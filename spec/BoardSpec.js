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

  describe('addHit', function(){
    it("adds hit coordinate to availableCoordinates", () =>{
    board.addHit('a1')
    expect(board.availableCoordinates[0]).toEqual("hit");
    })
  })

  describe('addMiss', function(){
    it("adds miss coordinate to array", () =>{
    board.addMiss('b1')
    expect(board.availableCoordinates[8]).toEqual("miss");
    })
  })

  describe('checkIfSequential', function(){
    it("prevents a player from putting ship on non-sequential co-ordinates", () =>{
    expect(function(){ board.checkIfSequential('b1','c2','b3'); } ).toThrow("Please enter sequential coordinates.");
    
    })
  })

})