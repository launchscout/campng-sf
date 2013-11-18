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
  $scope.currentRecipe = new Recipe({ ingredients: [] });
  $scope.newIngredient = {};

  $scope.addIngredient = function(ingredient){
    $scope.currentRecipe.ingredients.push(ingredient);
    $scope.newIngredient = {};
  }

  $scope.removeIngredient = function(ingredient){
    index = $scope.currentRecipe.ingredients.indexOf(ingredient)
    $scope.currentRecipe.ingredients.splice(index, 1);
  }

  $scope.submit = function(){
    Recipe.create($scope.currentRecipe).then(function(){
      $location.path( "/recipes" );
    });
  }
});
