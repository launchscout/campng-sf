//////////////////////////
// Controllers
//////////////////////////

angular.module("cookbook").controller("RecipesCtrl", function($scope, Recipe) {
  $scope.recipes = Recipe.all()
});

angular.module("cookbook").controller("RecipeDetailCtrl", function($scope, $routeParams, Recipe) {
  $scope.currentRecipe = Recipe.find({id: $routeParams.recipeId })
});

angular.module("cookbook").controller("RecipeNewCtrl", function($scope, $location, Recipe) {
  $scope.currentRecipe = new Recipe()

  $scope.submit = function(){
    Recipe.create($scope.currentRecipe).then(function(){
      $location.path( "/recipes" );
    });
  }
});
