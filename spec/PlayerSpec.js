describe("Player", function() {

    beforeEach(function() {
      player1 = new Player();
      ship1 = new Ship();
      ship2 = new Ship();
      ship3 = new Ship();
      ship4 = new Ship();
    });

    it("initializes with 12 points", function() {
        expect(player1.points).toEqual(12);
    });

    it("initializes with a new board", function() {
      expect(player1.board).toEqual(new Board);
  });

})
