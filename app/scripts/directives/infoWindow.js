/**
 * Created by Alvarock on 29/09/2016.
 */
'use strict';


angular.module('onemiMonApp')

.directive('infoWindow', function(){
    return {
        restrict: 'E',
        scope: {
            info : '='
    },
        templateUrl: 'scripts/directives/infoWindow.html'



};
});