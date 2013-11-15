//////////////////////////
// Routes
//////////////////////////

angular.module("cookbook").config(function($routeProvider) {
  $routeProvider.when('/recipes/new', {
    template: $('#recipe-new-template').html(),
    controller: 'RecipeNewCtrl'
  });

  $routeProvider.when('/recipes/:recipeId', {
    template: $('#recipe-detail-template').html(),
    controller: 'RecipeDetailCtrl'
  });
});
