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
});

describe("RecipeDetailCtrl", function() {

  beforeEach(inject(function($controller) {
    this.scope = {}
    this.routeParams = { recipeId: 1 }
    this.controller = $controller("RecipeDetailCtrl", {$scope: this.scope, $routeParams: this.routeParams})
  }));

  describe("currentRecipe", function() {
    it("is the first recipe", function() {
      expect(this.scope.currentRecipe.title).toEqual("Pancakes");
    });
  });
});
