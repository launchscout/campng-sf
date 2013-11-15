//////////////////////////
// Factories
//////////////////////////

angular.module("cookbook").factory("Recipe", function($resource) {
  var recipeResource = $resource('/recipes/:id', { id: '@id' });
  var recipes = {
    all: function(){
      return recipeResource.query()
    },
    find: function(id){
      return recipeResource.get({id: id})
    }
  }

  return recipes
});
