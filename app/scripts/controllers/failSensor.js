/**
 * Created by alvaro on 12-04-17.
 */
'use strict';

angular.module('onemiMonApp')
.controller('FailSensorCtrl', function($http, $scope, stationData, sensorData){


    $scope.stationId = null;
    $scope.sensorId = null;
    $scope.statusList = ['OK', 'FAIL'];
    $scope.status = "";
    $scope.sendStatus = "";
    $scope.numFail = null;



    $scope.getAllStations = function(){
        stationData.getAllStations().success(function(data){
            $scope.stations = data;
        });
    };

    $scope.getSensors = function(stationId){
        sensorData.getSensors(stationId).success(function(data){
           $scope.sensors = data;

        });

    };




    $scope.updateStation = function(){
        var data = {
            id : $scope.stationId,
            status: ""
        };
        var numFails = $scope.sensors.reduce(function(n, sensor){
            return n + (sensor.status === 'FAIL');
        }, 0);

        if(numFails === $scope.sensors.lenght){
            data.status = 'FAIL';
        }else if (numFails > 1 || numFails < $scope.sensors.lenght){
            data.status = 'WARN';
        }else{
            data.status = 'OK';
        }

        var toPost = JSON.stringify(data);
        console.log(data.status);
        $http.post('http://mon.acmeapps.xyz:8080/EmuSensor/webapi/stations/updateStatus', toPost)
            .success(function(data, status){
                console.log(status);
                $scope.sendStatus = "Datos enviados correctamente";
            })
            .error(function(data, status){
                $scope.sendStatus = "Error al enviar los datos";
                console.log(status);
            });


    };

    $scope.postData = function(){
        var data = {
            id: $scope.sensorId,
            status: $scope.status
        };

        var toPost = JSON.stringify(data);

        $http.post('http://mon.acmeapps.xyz:8080/EmuSensor/webapi/sensors/updateStatus', toPost)
            .success(function(data, status){
                console.log(status);
                $scope.sendStatus = "Datos enviados correctamente";
            })
            .error(function(data, status){
                $scope.sendStatus = "Error al enviar los datos";
                console.log(status);
            });
    };




    $scope.getAllStations();

});