class Game{
  constructor(player1= new Player, player2 = new Player) {
    this.player1 = player1
    this.player2 = player2
  }

  startGame(){
    this.player1.turn = true
  }

  winner(){
  if(this.player1.points === 0) return ("Player 2 wins!")
  if(this.player2.points === 0) return ("Player 1 wins!")
  }
}