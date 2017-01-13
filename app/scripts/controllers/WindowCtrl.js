/**
 * Created by Alvarock on 30/09/2016.
 */
'use strict';

angular.module('onemiMonApp')

.controller('WindowCtrl', function($scope, dataArray){


    $scope.init = function(id){
        $scope.id = id;
        console.log($scope.id);






        dataArray.getData(id).success(function(data){
            $scope.dataArray = data;
            $scope.data = [];
            $scope.labels = data.dataTimestamp;

            $scope.tempdata = data.dataArrayTemp;
            $scope.data.push($scope.tempdata);
            $scope.humData = data.dataArrayHum;
            $scope.data.push($scope.humData);
            $scope.cauData = data.dataArrayHum;
            $scope.data.push($scope.cauData);



        })


    }




    //console.log($scope.dataTemp);
    //console.log($scope.labels);
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
                    ticks:{
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