/**
 * Created by alvarock on 9/26/16.
 */

'use strict';
angular.module('onemiMonApp')

  .factory('dataSensor',['$http', function($http){
    return $http.get('http://localhost:8080/EmuSensor/webapi/historic')
      .success(function(data){
        return data;
      })
      .error(function(err){
        return err;
      });

  }]);
