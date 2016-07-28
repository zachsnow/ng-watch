(function(){
  var module = angular.module('watch', []);
  module.directive('ngWatch', [
    '$compile',
    function($compile) {
      return {
        multiElement: true,
        transclude: 'element',
        priority: 600,
        terminal: true,
        restrict: 'A',
        $$tlb: true,
        link: function(scope, element, attrs, ctrl, transcludeFn) {
          var childScope, childElement;

          scope.$watch(attrs.ngWatch, function(value){
            // Remove previous elements, if any.
            if(childScope) {
              childScope.$destroy();
              childScope = null;
            }
            if(childElement) {
              childElement.remove();
              childElement = null;
            }

            // Re-transclude.
            transcludeFn(function(clone, newScope) {
              childScope = newScope;
              clone[clone.length++] = $compile.$$createComment('end ngWatch', attrs.ngWatch);
              childElement = clone;
              element.after(childElement);
            });
          });
        }
      };
    }
  ]);
})();
