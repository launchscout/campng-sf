//////////////////////////
// Controllers
//////////////////////////

angular.module("cookbook").controller("RecipesCtrl", function($scope, Recipe) {
  $scope.recipes = Recipe.all()
});
