/**
 * Created by alvarock on 9/15/16.
 */

'use strict';

angular.module('onemiMonApp')
    .service('httpService', function($http, $scope) {
  $scope.getData = function(successHandler, failureHandler) {
    $http.get('http://localhost:8080/EmuSensor/webapi/stations').then(function(response){
      successHandler(response);    //data can't be used outside this function
    }, function(response) {
      failureHandler(response);
    })

  }
});
