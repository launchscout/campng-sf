describe('recipe-rating', function() {
  it('returns a rating', inject(function($compile, $rootScope) {
    var element = $compile('<rating value="4"/>')($rootScope);
    expect($('.mask', element).width()).toEqual(80);
  }));
});