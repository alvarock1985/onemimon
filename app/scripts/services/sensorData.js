/**
 * Created by alvaro on 14-04-17.
 */
'use strict';

angular.module('onemiMonApp')
    .factory('sensorData',['$http', function($http){

        var getAllSensors = function(){
            return $http.get('http://mon.acmeapps.xyz:8080/EmuSensor/webapi/sensors')
                .success(function(data){
                    return data;
                })
        };

        var getSensors = function(stationId){
            return $http.get('http://mon.acmeapps.xyz:8080/EmuSensor/webapi/sensors/'+stationId)
                .success(function(data){
                    return data;
                })
        };

        return {
            getAllSensors : getAllSensors,
            getSensors : getSensors
        }


    }]);
