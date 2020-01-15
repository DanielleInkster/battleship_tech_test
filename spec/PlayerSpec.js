describe("Player", function() {

    beforeEach(function() {
      player1 = new Player();
    });

    it("initializes with 12 points", function() {
        expect(player1.points).toEqual(12);
    });

    it("initializes with a new board", function() {
      expect(player1.board).toEqual(new Board);
    });

    it("initializes with ships", function() {
      expect(player1.fleet[0]).toEqual(new Ship);
    });

})
