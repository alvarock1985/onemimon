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




            $scope.cauData = data.cauArray;
            $scope.data.push($scope.cauData);
            $scope.humData = data.humArray;
            $scope.data.push($scope.humData);
            $scope.tempData = data.tempArray;
            $scope.data.push($scope.tempData);
            $scope.prepData = data.prepArray;
            $scope.data.push($scope.prepData);
            $scope.otherData = data.otherArray;
            $scope.data.push($scope.otherData);

            console.log($scope.cauData);

        });
    };

    $scope.loadData($scope.id);
    $scope.loadDataQuartile($scope.id);

    riverData.getRivers().success(function(data){
        $scope.rivers = data;
    });


      $scope.labels = ['Min', 'Low', 'Mid', 'High', 'Max'];
      $scope.series = ['Caudal', 'Humedad', 'Temperatura', 'Precipitaciones', 'Nieve'];
      $scope.onClick = function (points, evt) {
          console.log(points, evt);
      };
      $scope.datasetOverride = [{

      }];
      $scope.options = {
          responsive: true,
          scales: {
              yAxes: [
                  {
                      id: 'y-axis-1',
                      type: 'linear',
                      display: true,
                      position: 'left',
                      ticks: {
                          max:30
                      }
                  }

              ],
              xAxes : [{
                  id: 'x-axis',

                  display: true,
                  position: 'bottom'

              }],
              legend: [{
                  display:true
              }]
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


