/**
 * Created by Alvarock on 08/04/2017.
 */
'use strict';

angular.module('onemiMonApp')
    .controller('AddStationCtrl', function($scope, stationData, $http){

        $scope.name = null;
        $scope.description = null;
        $scope.latitude = null;
        $scope.longitude =  null;
        $scope.type = null;
        $scope.watershed = null;

        $scope.postData = function(name, description, latitude, longitude, type, watershed){
            var data = {
                name: name,
                description: description,
                latitude: latitude,
                longitude: longitude,
                type: type,
                watershed: watershed
            };

        }

        $http.post('http://mon.acmeapps.xyz:8080/EmuSensor/webapi/stations/add', JSON.stringify(data));



    });
