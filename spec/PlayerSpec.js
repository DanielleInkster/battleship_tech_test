describe("Player", function() {

    beforeEach(function() {
      player1 = new Player();
    });

    it("initializes with a new board", function() {
      expect(player1.board).toEqual(new Board);
    });

    it("initializes with ships", function() {
      expect(player1.fleet[0]).toEqual(new Ship);
    });

    it("initializes with points", function() {
      // # of points should be equal to combined length of ships for game play
      expect(player1.points).toEqual(12);
    });

    describe('positionShip', function(){
      it("places a ship on the board", () =>{
      player1.positionShip(0, ['a1','a2','a3'])
      expect(player1.fleet[0].coordinates).toEqual(['a1','a2','a3']);
      })
    })

    describe('checkHit', function(){
      it("checks if player's ship is hit", () =>{
      player1.positionShip(0, ['a1','a2','a3'])
      expect(player1.checkHit(0,'a1')).toEqual("Hit!");
      })
    })

    describe('checkSunk', function(){
      it("checks if player's ship is sunk", () =>{
      player1.positionShip(0, ['a1','a2','a3'])
      player1.fire(0,'a1')
      player1.fire(0,'a2')
      expect(player1.checkSunk(0,'a3')).toEqual("Hit and sunk!");
      })
    })

    describe('addHit', function(){
      it("adds hit coordinate to array", () =>{
      player1.addHit('a1')
      expect(player1.hits[0]).toEqual("a1");
      })
    })

})
