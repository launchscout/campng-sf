//////////////////////////
// Routes
//////////////////////////

angular.module("cookbook").config(function($routeProvider) {
  $routeProvider.when('/recipes/:recipeId', {
    template: $('#recipe-detail-template').html(),
    controller: 'RecipeDetailCtrl'
  });
});
