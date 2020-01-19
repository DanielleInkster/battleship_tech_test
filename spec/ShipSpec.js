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

    describe('setPosition', function(){
      it("fixes ship to board", () =>{
      ship1.positioned = true
      expect(function(){ ship1.setPosition(); } ).toThrow("This ship has already been placed");
      })
    })

    describe('isHit', function(){
      it("checks if a ship has been hit", () =>{
      ship2.coordinates = ['a1','a2','a3']
      expect(ship2.isHit('a1')).toEqual(true)
      })
    })

    describe('isSunk', function(){
      it("checks if a ship has been sunk", () =>{
      ship2.coordinates = ['a1','a2','a3']
      ship2.isHit('a1')
      ship2.isHit('a2')
      expect(ship2.isSunk('a3')).toEqual(true)
      })
    })

    describe('shipSunk', function(){
      it("changes this.sunk to true", () =>{
      ship2.shipSunk()
      expect(ship2.sunk).toEqual(true)
      })
    })

})