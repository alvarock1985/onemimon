'use strict';

/**
 * @ngdoc function
 * @name onemiMonApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the onemiMonApp
 */
angular.module('onemiMonApp')
  .controller('AboutCtrl', function ($scope, quartileData) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


      $scope.id =1;


      $scope.loadData = function (id){
            quartileData.getQuartileData(id).success(function(data){
                $scope.quartileData = data;
                console.log(data);
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


      $scope.val = 10
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
                      lineTension: 0
                  }

              ]
          }
      };



  });
