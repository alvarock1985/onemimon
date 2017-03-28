/**
 * Created by alvaro on 29-11-16.
 */

'use strict';

angular.module('onemiMonApp')

.controller('ReportsCtrl', function($scope,  stationData, dataArray){

    $scope.target2 = 5;
    $scope.id2 =1;
    console.log($scope.id2);
    $scope.init = function(id){

        $scope.id = id;
        console.log(id);
    }



    $scope.getStations = function(){
        stationData.getAllStations().success(function(data){
            $scope.stations = data;
        })
    }

    $scope.loadData2 = function(stationId, timeRange){
        dataArray.getDataTimeRange(stationId, timeRange).success(function(data){
            $scope.datos = data[0];
            //console.log($scope.datos);
            var data2 = data[0];
            $scope.data = [];
            $scope.labels = data2.dataTimestamp;

            $scope.tempdata = data2.dataArrayTemp;
            $scope.data.push($scope.tempdata);
            $scope.humData = data2.dataArrayHum;
            $scope.data.push($scope.humData);
            $scope.cauData = data2.dataArrayHum;
            $scope.data.push($scope.cauData);
        });


    };

    //$scope.getAllData();
    $scope.getStations();
    $scope.loadData2($scope.id2, $scope.target2);


    $scope.series = ['Temperatura', 'Humedad', 'Caudal'];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
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
                },
                {
                    id: 'y-axis-2',
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: {
                        max:30
                    }
                }
            ],
            xAxes : [{
                display: true,
                position: 'bottom',
                ticks: {
                    minRotation: 90,
                    maxRotation: 90
                }
            }],
            legend: [{
                display:true
            }]
        }
    };













});