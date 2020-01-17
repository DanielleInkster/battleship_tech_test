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
    it("adds hit coordinate to array", () =>{
    board.addHit('a1')
    expect(board.hits[0]).toEqual("a1");
    })
  })

  describe('addMiss', function(){
    it("adds miss coordinate to array", () =>{
    board.addMiss('b1')
    expect(board.misses[0]).toEqual("b1");
    })
  })

})