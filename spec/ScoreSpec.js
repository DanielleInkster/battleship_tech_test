describe("Score", function() {

    beforeEach(function() {
      score = new Score();
    });

  it("initializes with points", function() {
    // # of points should be equal to combined length of ships for game play
    expect(score.points).toEqual(12);
  });
 
 describe('changePoints', function(){
    it("points are subtracted", () =>{
    score.changePoints()
    expect(score.points).toEqual(11);
    })
  })
})