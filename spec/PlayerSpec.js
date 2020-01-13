describe("Player", function() {

    beforeEach(function() {
      player1 = new Player();
    });
  
    it("initiates with an empty array ships", function() {
      expect(player1.ships).toEqual([]);
    });

    it("initiates with 12 points", function() {
        expect(player1.points).toEqual(12);
    });
})
