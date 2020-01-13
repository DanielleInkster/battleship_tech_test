describe("Game", function() {

  beforeEach(function() {
    game = new Game();
    player = new Player
  });

  it("initiates with 2 players", function() {
    expect(game.player1).toEqual(player);
    expect(game.player2).toEqual(player);
  });

  it("initiates with player points", function() {
    expect(game.player1Points).toEqual(player.points);
    expect(game.player2Points).toEqual(player.points);
  });
})