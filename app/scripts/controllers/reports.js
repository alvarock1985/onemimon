/**
 * Created by alvaro on 29-11-16.
 */

'use strict';

angular.module('onemiMonApp')

.controller('ReportsCtrl', function($scope, dataOnHours){

    $scope.target2 = 5;
    $scope.id2 =1;

    $scope.init = function(id){

        $scope.id = id;
        console.log(id);
    }

    $scope.getAllData = function(){
        dataOnHours.getAllData().success(function(data){
            $scope.allData = data;

        })

    }

    $scope.loadData2 = function(target, id){
        dataOnHours.getData2(target, id).success(function(data){
            $scope.datos = data;
            console.log($scope.datos);
            $scope.dataArray = data;
            $scope.data = [];
            $scope.labels = data.dataTimestamp;

            $scope.tempdata = data.dataArrayTemp;
            $scope.data.push($scope.tempdata);
            $scope.humData = data.dataArrayHum;
            $scope.data.push($scope.humData);
            $scope.cauData = data.dataArrayHum;
            $scope.data.push($scope.cauData);
        });


    };

    //$scope.getAllData();
    $scope.loadData2($scope.target2, $scope.id2);


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