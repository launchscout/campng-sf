//////////////////////////
// Factories
//////////////////////////

angular.module("cookbook").factory("Recipe", function($resource) {
  var recipesResource = $resource('/recipes/:id', { id: '@id' });
  var recipesArr = []
  angular.extend(recipesResource, {
    all: function(){
      recipesResource.query(this.add)
      return recipesArr;
    },

    add: function(recipes){
      angular.forEach(recipes, function(recipe){
        recipesArr.push(recipe)
      });
    },

    find: function(options){
      return this.get(options)
    },

    create: function(recipe){
      recipesArr.push(recipe);
      return recipe.$save();
    }
  });

  return recipesResource
});
