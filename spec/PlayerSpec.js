describe("Player", function() {

    beforeEach(function() {
      player1 = new Player();
      ship1 = new Ship();
      ship2 = new Ship();
      ship3 = new Ship();
      ship4 = new Ship();
    });
  
    it("initializes with an empty array ships", function() {
      expect(player1.ships).toEqual([]);
    });

    it("initializes with 12 points", function() {
        expect(player1.points).toEqual(12);
    });

    it("initializes with a new board", function() {
      expect(player1.board).toEqual(new Board);
    });

    it("initializes with an empty array", function() {
      expect(player1.shipPositions).toEqual([]);
    });

    describe('addShip', function(){
      it('adds ships to the players array', () => {
        player1.addShip(ship1)
        expect(player1.ships.length).toEqual(1);
      }) 

      it('will only accept ships with a length of 3-5', () => {
        let ship5 = new Ship(8)
        expect(function(){ player1.addShip(ship5); } ).toThrow("Ship length must be between 3 and 5 units.");
      }) 

      it('wont accept more than 3 ships', () => {
        player1.addShip(ship1)
        player1.addShip(ship2)
        player1.addShip(ship3)
        player1.addShip(ship4)
        expect(player1.ships.length).toEqual(3);
      })
    })
})
