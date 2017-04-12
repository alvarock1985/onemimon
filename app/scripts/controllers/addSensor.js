/**
 * Created by alvaro on 11-04-17.
 */
'use strict';

angular.module('onemiMonApp')
.controller('AddSensorCtrl', function($scope, $http, stationData){

    $scope.names= ["caudal", "temp", "precip", "hum", "nieve"];
    $scope.name = null;
    $scope.types = ["fluviometrico", "meteorologico"];
    $scope.type = null;
    $scope.stationId = null;
    $scope.status = "";

    $scope.getAllStations = function(){
        stationData.getAllStations().success(function(data){
            $scope.stations = data;
        });
    }

    $scope.postData = function(){

        var data = {
            name: $scope.name,
            type: $scope.type,
            stationid: $scope.stationId

        };

        var toPost = JSON.stringify(data);

        $http.post('http://mon.acmeapps.xyz:8080/EmuSensor/webapi/sensors/add', toPost)
            .success(function(data, status){
                console.log(status);
                $scope.status = "Datos enviados correctamente";
            });

    };

    $scope.getAllStations();
});