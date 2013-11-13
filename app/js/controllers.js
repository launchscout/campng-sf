//////////////////////////
// Controllers
//////////////////////////

angular.module("cookbook").controller("RecipesCtrl", function($scope, Recipe) {
  $scope.recipes = Recipe.all()
  $scope.currentRecipe = null

  $scope.showRecipe = function(recipe){
    $scope.currentRecipe = recipe;
  }
});
