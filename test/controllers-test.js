describe("RecipesCtrl", function() {

  beforeEach(inject(function($controller) {
    this.scope = {}
    this.controller = $controller("RecipesCtrl", {$scope: this.scope})
  }));

  describe("recipe", function() {
    it("is Pancakes", function() {
      expect(this.scope.recipe).toEqual("Pancakes");
    });
  });
});
