/**
 * Created by alvarock on 9/26/16.
 */

'use strict';
angular.module('onemiMonApp')

  .factory('stationData',['$http', function($http){
        var getAllStations = function(){
            return $http.get('http://mon.acmeapps.xyz:8080/EmuSensor/webapi/stations')
                .success(function (data) {
                    return data;
                })
        };

        var getStations = function(riverId){
            return $http.get('http://mon.acmeapps.xyz:8080/EmuSensor/webapi/stations/'+riverId)
                .success(function(data){
                    return data;
                });
        };

        return {
            getAllStations : getAllStations,
            getStations : getStations

        }

  }]);



