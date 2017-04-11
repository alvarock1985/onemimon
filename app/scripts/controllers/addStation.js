/**
 * Created by Alvarock on 08/04/2017.
 */
'use strict';

angular.module('onemiMonApp')
    .controller('AddStationCtrl', function($scope, stationData, $http){

        $scope.data = {};


        $scope.name =  "hola";
        $scope.description = "hola";
        $scope.longitude  = 123.4;
        $scope.latitude =  123.4;
        $scope.type = "hola";
        $scope.watershed = 4;

        $scope.postData = function(){
            console.log("executing");
/*            var data = $.param({
                json: JSON.stringify({
                    name : $scope.name,
                    description: $scope.description,
                    longitude: $scope.longitude,
                    latitude: $scope.latitude,
                    type : $scope.type,
                    watershedid: $scope.watershed
                })

            });*/

            var data = {

                name : $scope.name,
                description: $scope.description,
                longitude: $scope.longitude,
                latitude: $scope.latitude,
                type : $scope.type,
                watershedId: $scope.watershed
            }



            var toPost = JSON.stringify(data);
             console.log(toPost);

            $http.post('http://mon.acmeapps.xyz:8080/EmuSensor/webapi/stations/add', toPost)
                .success(function(data, status){
                    console.log(status);
                    console.log("hola");
                })
                .error(function(data){
                    console.log(data);
                    console.log("error");
                });

        }


    });
