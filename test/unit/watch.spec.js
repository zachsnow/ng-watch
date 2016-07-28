(function(){
  'use strict';

  var text = function(e){
    return angular.element(e).text();
  };

  describe('ng-watch', function(){
    beforeEach(module('watch'));

    it('should have some tests, probably', inject(function($compile, $rootScope){
      // But it doesn't yet.
    }));
  });

})();
