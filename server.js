var express = require('express');
var app = express();
app.use(express.bodyParser());

var recipes = [
  {
    "id": 1,
    "title": "Pancakes",
    "description": "big and fluffy"
  },
  {
    "id": 2,
    "title": "Waffles",
    "description": ""
  },
  {
    "id": 3,
    "title": "Chicken",
    "description": ""
  }
]

var findRecipe = function(id){
  return recipes.filter(function(recipe){
    return recipe.id == id
  })[0];
}

app.use(express.static(__dirname));

app.get('/recipes', function(req, res){
  res.send(recipes);
});

app.get('/recipes/:id', function(req, res){
  recipe = findRecipe(req.params.id)
  if (recipe) {
    res.send(recipe);
  } else {
    res.send(404, "no recipe found")
  }
});

app.post('/recipes', function(req, res){
  recipe = {
    id: recipes.length + 1,
    title: req.body.title,
    description: req.body.description
  }
  recipes.push(recipe)
  console.log("Recipe created: ", recipe)
  res.send(recipe);
});

app.del('/recipes/:id', function(req, res){
  recipe = findRecipe(req.params.id)
  if (recipe) {
    console.log("Recipe deleted: ", recipe)
    recipes.splice(recipes.indexOf(recipe), 1);
    res.send(200, "deleted");
  } else {
    res.send(404, "no recipe found")
  }
});

app.listen(3000);
console.log("Cookbook server running at localhost:3000");