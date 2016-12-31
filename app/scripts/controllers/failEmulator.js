/**
 * Created by alvaro on 30-12-16.
 */
'use strict';

angular.module('onemiMonApp')

    .controller('FailCtrl', function($scope, stationData){

        $scope.id = 1;
        $scope.minutes = 0;
        $scope.getStationData = function(){
            stationData.getStations().success(function(data){
                $scope.stationData = data;
                console.log(data);
            })

        }

        $scope.getStationData();
        console.log($scope.stationData);
    });