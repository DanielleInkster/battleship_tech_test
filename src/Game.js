class Game{
  constructor(player1= new Player, player2 = new Player) {
    this.player1 = player1
    this.player2 = player2
    this.player1Points = player1.points
    this.player2Points = player2.points
  }

  startGame(){
    this.player1.turn = true
  }
}