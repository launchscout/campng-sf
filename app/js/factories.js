//////////////////////////
// Factories
//////////////////////////

angular.module("cookbook").factory("Recipe", function() {
  var recipes = {
    all: function(){
      return [
        {
          title: "Pancakes",
          description: "big and fluffy"
        },
        {
          title: "Waffles",
          description: ""
        },
        {
          title: "Chicken",
          description: ""
        }
      ]
    }
  }

  return recipes
});
