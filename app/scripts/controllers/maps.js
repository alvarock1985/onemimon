'use strict';


angular.module('onemiMonApp')

  .controller('MapsCtrl', function ($scope, $http, uiGmapGoogleMapApi, stationData) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];





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
        markers: $scope.markers,
        markersEvents:{
            click: function(marker, eventName, model, args){
                $scope.map.window.model = model;
                $scope.map.window.show = true;
            }
        }
    };


    stationData.success(function(datos){
      $scope.markers = datos;


      });







    uiGmapGoogleMapApi.then(function(maps){

    });

  });


