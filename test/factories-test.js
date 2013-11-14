describe("Recipe", function() {
  describe("all", function() {
    
    beforeEach(inject(function(Recipe) {
      this.recipes = Recipe.all()
    }));
    
    it("is an array of 3 recipes", function() {
      expect(this.recipes.length).toEqual(3);
    });

    it("first element title is pancakes", function(){
      expect(this.recipes[0].title).toEqual("Pancakes");
      expect(this.recipes[0].description).toEqual("big and fluffy");
    });
  });

  describe("find", function() {
    beforeEach(inject(function(Recipe) {
      this.recipe = Recipe.find(1)
    }));

    it("returns the first element", function(){
      expect(this.recipe.title).toEqual("Pancakes");
      expect(this.recipe.description).toEqual("big and fluffy");
    });
  });
});
