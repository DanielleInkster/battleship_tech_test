describe("Ship", function() {

    beforeEach(function() {
      ship1 = new Ship(5);
      ship2 = new Ship(3)
    });

    it("can be set to variable lengths", function() {
      expect(ship1.length).toEqual(5);
      expect(ship2.length).toEqual(3);
    });

    it("initializes with an empty array", function() {
      expect(ship1.position).toEqual([]);
    });

    describe('positionShip', function(){
      it('throws an error if the wrong number of coordinates are entered', () => {
        expect(function(){ ship2.positionShip('h1','h2','h3','h4'); } ).toThrow("Number of co-ordinates entered does not equal ship length. Please try again.")
      }) 
    }) 

})