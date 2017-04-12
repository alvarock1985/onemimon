/**
 * Created by Alvarock on 08/04/2017.
 */
'use strict';

angular.module('onemiMonApp')
    .controller('AddStationCtrl', function($scope, riverData, $http, uiGmapGoogleMapApi){

        $scope.data = {};

        $scope.riverId = null;
        $scope.name =  null;
        $scope.description = null;
        $scope.longitude  = $scope.lon;
        $scope.latitude =  $scope.lat;
        $scope.type = null;
        $scope.watershed = 4;
        $scope.status = null;

        $scope.map = {

            center: {latitude: -27.3771861, longitude:-70.3560286 },
            zoom: 7,
            control: {},
            window: {
                model: {},
                show: false,
                options: {
                    pixelOffset: {width: -1, height: -20},
                    maxWidth: 500
                }

            },

            markers: [],
            events: {
                click: function (map, eventName, originalEventArgs) {
                    var e = originalEventArgs[0];
                    var lat = e.latLng.lat(),lon = e.latLng.lng();
                    var marker = {
                        id: Date.now(),
                        coords: {
                            latitude: lat,
                            longitude: lon
                        }
                    };

                    $scope.lat = e.latLng.lat();
                    $scope.lon = e.latLng.lng();
                    $scope.map.markers[0] = marker;
                    console.log($scope.map.markers);
                    $scope.$apply();
                }
            },

            markersEvents:{
                click: function(marker, eventName, model, args){
                    $scope.map.window.model = model;
                    $scope.map.window.show = true;
                }
            }
        };





        $scope.postData = function(){


            var data = {

                name : $scope.name,
                description: $scope.description,
                longitude: $scope.lon,
                latitude: $scope.lat,
                type : $scope.type,
                watershedId: $scope.riverId
            }

            console.log(data.longitude);
            if(data.longitude===undefined){
                $scope.status = "Debe seleccionar ubicacion para la estacion";
            }else{

                var toPost = JSON.stringify(data);
                $http.post('http://mon.acmeapps.xyz:8080/EmuSensor/webapi/stations/add', toPost)
                    .success(function(data, status){
                        console.log(status);
                        $scope.status = "Datos enviados correctamente";
                    })
                    .error(function(data){
                        console.log(data);
                        $scope.status = "Error en el envio de los datos";
                    });
            }





        }

        riverData.getRivers().success(function(data){
            $scope.rivers = data;
        });

        uiGmapGoogleMapApi.then(function(maps){

        });
    });
