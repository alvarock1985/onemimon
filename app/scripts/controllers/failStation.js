/**
 * Created by alvaro on 12-04-17.
 */
'use strict';

angular.module('onemiMonApp')
.controller('FailStationCtrl', function($http, $scope, stationData){

    $scope.stationId = null;
    $scope.statusList = ['OK', 'WARN', 'FAIL'];
    $scope.status = "";
    $scope.sendStatus = "";

    $scope.getAllStations = function(){
        stationData.getAllStations().success(function(data){
            $scope.stations = data;
        });
    };

    $scope.postData = function(){
        var data = {
            id: $scope.stationId,
            status: $scope.status
        };

        var toPost = JSON.stringify(data);

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

    $scope.getAllStations();
});