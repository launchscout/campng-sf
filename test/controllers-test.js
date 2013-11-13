describe("RecipesCtrl", function() {

  beforeEach(inject(function($controller) {
    this.scope = {}
    this.controller = $controller("RecipesCtrl", {$scope: this.scope})
  }));

  describe("recipes", function() {
    it("is an array of 3 recipes", function() {
      expect(this.scope.recipes.length).toEqual(3);
    });
  });

  describe("showRecipe", function() {
    beforeEach(function(){
      this.scope.showRecipe(this.scope.recipes[0])
    });
    
    it("sets the currenctRecipe", function() {
      expect(this.scope.currentRecipe).toEqual(this.scope.recipes[0]);
    });
  });
});
