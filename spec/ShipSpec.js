describe("Ship", function() {

    beforeEach(function() {
      ship1 = new Ship(5);
      ship2 = new Ship(3)
    });

    it("can be set to variable lengths", function() {
      expect(ship1.length).toEqual(5);
      expect(ship2.length).toEqual(3);
    });

    it("initializes without position", function() {
      expect(ship1.positioned).toEqual(false);
    });

})