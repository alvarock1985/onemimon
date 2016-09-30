/**
 * Created by Alvarock on 30/09/2016.
 */
'use strict';

angular.module('onemiMonApp')

.controller('WindowCtrl', function($scope){

    $scope.dataTemp = new Array();
    $scope.dataHum = new Array();
    $scope.dataCau = new Array();
    $scope.saveData = function(data){

        for(var i in data) {
            //console.log(data[i].sensorName);
            if(data[i].sensorName === 'temp'){
                $scope.dataTemp.push(data[i].sensorData);
            }else if(data[i].sensorName === 'humedad'){
                $scope.dataHum.push(data[i].sensorData);
            }else{
                $scope.dataCau.push(data[i].sensorData);
            }
        }




    };


    $scope.avgTemp = function(){
        var total = 0;
        var avg = 0;
        for(var i=0;i<$scope.dataTemp.length; i++){
            console.log($scope.dataTemp.length);
            total += $scope.dataTemp[i];
        }avg = total/$scope.dataTemp.length;
        //console.log(total);
        //console.log(avg);
        return avg;

    };

    $scope.avgHum = function(){
        var total = 0;
        var avg = 0;
        for(var i=0;i<$scope.dataHum.length; i++){
            console.log($scope.dataHum.length);
            total += $scope.dataHum[i];
        }avg = total/$scope.dataHum.length;
        //console.log(total);
        //console.log(avg);
        return avg;

    };

    $scope.avgCau = function(){
        var total = 0;
        var avg = 0;
        for(var i=0;i<$scope.dataCau.length; i++){
            console.log($scope.dataCau.length);
            total += $scope.dataCau[i];
        }avg = total/$scope.dataCau.length;
        //console.log(total);
        //console.log(avg);
        return avg;

    };


});