describe("Player", function() {

    beforeEach(function() {
      player1 = new Player();
      ship1 = new Ship();
      ship2 = new Ship();
      ship3 = new Ship();
      ship4 = new Ship();
    });
  
    it("initiates with an empty array ships", function() {
      expect(player1.ships).toEqual([]);
    });

    it("initiates with 12 points", function() {
        expect(player1.points).toEqual(12);
    });

    describe('addShip', function(){
      it('adds ships to the players array', () => {
        player1.addShip(ship1)
        expect(player1.ships.length).toEqual(1);
      })

      it('wont accept more than 3 ships', () => {
        player1.addShip(ship1)
        player1.addShip(ship2)
        player1.addShip(ship3)
        expect(player1.ships.length).toEqual(3);
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
