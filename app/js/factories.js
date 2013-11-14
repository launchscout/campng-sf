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
    }
  }

  return recipes
});
