/**
 * Created by alvarock on 9/26/16.
 */
'use strict';

angular.module('onemiMonApp')

  .directive('chart', function(){
  return {
    restrict: 'E',
    templateUrl: 'views/infoWindow.html',
    scope: {
      info: '='

    },
    link: function(scope, element, attrs){


    }
  };

  });
