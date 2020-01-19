describe("Game", function() {

  beforeEach(function() {
    game = new Game();
    player = new Player
  });

  it("initiates with 2 players", function() {
    expect(game.player1).toEqual(player);
    expect(game.player2).toEqual(player);
  });

  describe('startGame', function(){
    it("initiates player1 turn", () =>{
    game.startGame()
    expect(game.player1.turn).toEqual(true);
    })
  })

  describe('winner', function(){
    it("declares a winner", () =>{
    game.player1.points = 5
    game.player2.points = 0
    expect(game.winner()).toEqual("Player 1 wins!");
    })
  })

  describe('player1Turn', function(){
    //player2Turn has similar functionality
    it("allows players to take turn", () =>{
    game.startGame()
    game.player2.fleet[0].coordinates = ['a1','a2','a3']
    expect(game.player1Turn('a1')).toEqual("Hit!");
    expect(game.player2.score.points).toEqual(11);
    expect(game.player2.board.hits).toEqual(['a1']);
    })
  })
})