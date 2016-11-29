/**
 * Created by alvarock on 9/26/16.
 */

'use strict';
angular.module('onemiMonApp')

  .factory('stationData',['$http', function($http){
    return $http.get('http://localhost:8080/EmuSensor/webapi/stations')
      .success(function(data){
        return data;
      })
      .error(function(err){
        return err;
      });

  }]);



