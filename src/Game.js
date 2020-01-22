class Game{
  constructor(player1= new Player, player2 = new Player) {
    this.player1 = player1
    this.player2 = player2
  }

  startGame(){
    this.player1.turn = true
  }

  player1Turn(coordinate){
    if(this.player1.turn ===true){
    this.player1.turn = false
    this.player2.turn = true
      return this.player2.fire(coordinate)
    } else {
      throw "Not your turn. Please wait."
    }
  }

  player2Turn(coordinate){
    if(this.player2.turn ===true){
    this.player2.turn = false
    this.player1.turn = true
      return this.player1.fire(coordinate)
    } else {
      throw "Not your turn. Please wait."
    }
  }

  winner(){
    if(this.player1.points === 0){
      this.endGame()
        return "Player 2 wins!"
    } else if(this.player2.points === 0){
      this.endGame()
        return "Player 1 wins!"
    }
  }

  endGame(){
    this.player1.turn = false
    this.player2.turn = false
  }
}