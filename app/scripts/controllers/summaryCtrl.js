/**
 * Created by alvaro on 16-04-17.
 */
'use strict'

angular.module('onemiMonApp')
.controller('SummaryCtrl', function($scope, stationData, sensorData){

    $scope.stationId = null;

    $scope.getAllStations = function(){
        stationData.getAllStations().success(function(data){
            $scope.stations = data;
            for(var i in $scope.stations){
                $scope.stations[i].checkStatus = false;
            }
        })
    };

    $scope.getSensors = function(stationId){
        sensorData.getSensors(stationId).success(function(data){
            $scope.sensors = data;
        });

    };

    $scope.getAllStations();

});