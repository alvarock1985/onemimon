'use strict';


angular.module('onemiMonApp')

  .controller('MapsCtrl', function ($scope, $http, uiGmapGoogleMapApi, stationData, riverData, quartileData, dataOnHours) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.markers = [];
    $scope.id = 1;
    $scope.target2 = 5;
    console.log($scope.id);

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

    $scope.loadData = function(target, id){
        stationData.getStations(id).success(function(datos){
            $scope.markers = datos;
            $scope.loadDataQuartile(id);
            $scope.loadDataAvg(target, id)

        });
      };

    $scope.loadDataQuartile = function(id){
        quartileData.getQuartileData(id).success(function(data){
            $scope.quartiles = data;
            $scope.data = [];



            $scope.cauMin = data.cauMin;
            $scope.cauLow = data.cauLow;
            $scope.cauLowMid = (data.cauMid + data.cauLow)/2;
            $scope.cauMid = data.cauMid;
            $scope.cauMidHigh = (data.cauHigh + data.cauMid)/2;
            $scope.cauHigh = data.cauHigh;
            $scope.cauMax = data.cauMax;
            $scope.data = [
                [{x:$scope.cauLow, y:1}, {x:$scope.cauMid, y:0},{x:$scope.cauLowMid, y:0},
                    {x:$scope.cauMid, y:1},{x:$scope.cauMidHigh, y:0},
                    {x:$scope.cauMid, y:0},{x:$scope.cauHigh, y:1},
                    {x:$scope.cauMax, y:1}]
            ];
            return $scope.cauLow;


        });
    };

    $scope.loadData($scope.id);
    $scope.loadDataQuartile($scope.id);

    riverData.getRivers().success(function(data){
        $scope.rivers = data;
    });


      $scope.labels = ["Bajo", "Medio", "Alto", "Max" ];
      $scope.series = ['Caudal'];

      $scope.onClick = function (points, evt) {
          console.log(points, evt);
      };
      $scope.datasetOverride = [

          {
              xAxisID: 'x-axis-1',
              showLines : true,
              lineTension: 0
          },
          {
              yAxisID: 'y-axis-1',
              showLines: true,
              lineTension: 0
          }
      ];
      $scope.options = {
          scales: {

              xAxes: [
                  {
                      id: 'x-axis-1',
                      type: 'linear',
                      position: 'bottom',
                      showLines: true,
                      lineTension: 0,
                  },
                  {
                      id: 'x-axis-2',
                      position:'top',
                      display: true
                  }
              ],
              yAxes: [
                  {
                      id: 'y-axis-1',
                      showLines: true,
                      display: false,
                      lineTension: 0
                  }

              ]
          }
      };
      $scope.value = function(value){
          $scope.target = value;

      }

      $scope.loadDataAvg = function(target, id){
          dataOnHours.getData(target, id).success(function(data){
              $scope.datos = data;
          });


      }


    uiGmapGoogleMapApi.then(function(maps){

    });

  });


