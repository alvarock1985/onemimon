/**
 * Created by Alvarock on 30/09/2016.
 */
'use strict';

angular.module('onemiMonApp')

.controller('WindowCtrl', function($scope, dataArray, sensorData){

    $scope.cauStatus = null;
    $scope.tempStatus = null;
    $scope.humStatus = null;
    $scope.snowStatus = null;
    $scope.precipStatus = null;
    $scope.okIcon = 'http://keysizetest.verisignlabs.com/check.png';
    $scope.failIcon = 'https://www.okentes.cz/inshop/Layout/Pages/__Images/red_cross.png';

    $scope.checkStatus = function(stationId){
        sensorData.getSensors(stationId).success(function(data){
            $scope.sensors = data;
            for(var i in $scope.sensors){
                if($scope.sensors[i].name === 'caudal'){
                    $scope.cauStatus = $scope.sensors[i].status;
                    if($scope.cauStatus === 'FAIL'){
                        $scope.cauStatusIcon = $scope.failIcon;
                    }else{
                        $scope.cauStatusIcon = $scope.okIcon;
                    }
                }else if($scope.sensors[i].name === 'temp'){
                    $scope.tempStatus = $scope.sensors[i].status;
                    if($scope.tempStatus === 'FAIL'){
                        $scope.tempStatusIcon = $scope.failIcon;
                    }else{
                        $scope.tempStatusIcon = $scope.okIcon;
                    }
                }else if($scope.sensors[i].name === 'hum'){
                    $scope.humStatus = $scope.sensors[i].status;
                    if($scope.humStatus === 'FAIL'){
                        $scope.humStatusIcon = $scope.failIcon;
                    }else{
                        $scope.humStatusIcon = $scope.okIcon;
                    }
                }else if($scope.sensors[i].name === 'precip'){
                    $scope.precipStatus = $scope.sensors[i].status;
                    if($scope.precipStatus === 'FAIL'){
                        $scope.precipStatusIcon = $scope.failIcon;
                    }else{
                        $scope.precipStatusIcon = $scope.okIcon;
                    }
                }else{
                    $scope.snowStatus = $scope.sensors[i].status;
                    if($scope.snowStatus === 'FAIL'){
                        $scope.snowStatusIcon = $scope.failIcon;
                    }else{
                        $scope.snowStatusIcon = $scope.okIcon;
                    }
                }
            };
        });


    };


    $scope.init = function(id) {
        $scope.id = id;


        dataArray.getData(id).success(function(data){

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
        $scope.checkStatus($scope.id);
    };



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