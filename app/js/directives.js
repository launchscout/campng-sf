angular.module("cookbook").directive('rating', function() {
  return {
    template: "<div class='mask'><span/><span/><span/><span/><span/></div>",
    restrict: 'E',
    scope: {
      value: "=value"
    },
    link: function(scope, element, attrs) {
      var updateRating = function(){
        percentage = scope.value * 20;
        $('.mask', element).width(percentage + "%");
      }
      updateRating();
      scope.$watch('value', function(value) {
        updateRating();
      });
    }
  };
});
