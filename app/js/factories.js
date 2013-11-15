//////////////////////////
// Factories
//////////////////////////

angular.module("cookbook").factory("Recipe", function() {

  var recipes = {
    all: function(){
      return []
    },
    find: function(id){
      return {}
    }
  }

  return recipes
});
