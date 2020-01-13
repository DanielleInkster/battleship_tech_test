describe("Player", function() {

    beforeEach(function() {
      player1 = new Player();
    });
  
    it("initiates with 3 ships", function() {
      expect(player1.ships).toEqual(3);
    });

    it("initiates with 12 points", function() {
        expect(player1.points).toEqual(12);
    });
})
