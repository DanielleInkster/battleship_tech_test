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

    describe('checkLength', function(){
      it("checks num of co-ords equals ship length", () =>{
      expect(function(){ ship1.checkLength('a1','a2','a3'); } ).toThrow("This ship requires 5 co-ordinates. Please try again.");
      })
    })

})