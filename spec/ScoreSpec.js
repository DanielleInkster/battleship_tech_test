describe("Score", function() {

    beforeEach(function() {
      score = new Score();
    });
 
 describe('changePoints', function(){
    it("points are subtracted", () =>{
    score.changePoints()
    expect(score.points).toEqual(11);
    })
  })
})