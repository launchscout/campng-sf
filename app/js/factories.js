//////////////////////////
// Factories
//////////////////////////

angular.module("cookbook").factory("Recipe", function($resource) {
  var recipes = $resource('/recipes/:id', { id: '@id' }, {
    all: { method:'GET', isArray: true },
    find: { method:'GET' }
  });

  return recipes
});
