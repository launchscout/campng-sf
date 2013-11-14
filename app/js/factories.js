//////////////////////////
// Factories
//////////////////////////

angular.module("cookbook").factory("Recipe", function() {
  var recipes = {
    all: function(){
      return [
        {
          id: 1,
          title: "Pancakes",
          description: "big and fluffy"
        },
        {
          id: 2,
          title: "Waffles",
          description: ""
        },
        {
          id: 3,
          title: "Chicken",
          description: ""
        }
      ]
    },
    find: function(id){
      var allRecipes = this.all();
      for (var i = 0; i < allRecipes.length; i++){
        if (allRecipes[i].id == id){ return allRecipes[i]; }
      }
    }
  }

  return recipes
});
