/**
 * Created by alvaro.cabrera on 11/8/2016.
 */
'use strict';


angular.module('onemiMonApp')

.controller ('reportCtrl', function($scope, dataSensor){

    dataSensor.success(function(datos){

        $scope.mostrar = datos;
    });

    $scope.getAvgTemp = function(id){
        var data = [];
        for(var i in $scope.mostrar){
            if($scope.mostrar[i].id ===id){
                data = $scope.mostrar[i].data;

            };

        };

        var tempData = [];
        for(var i in data){
            if(data[i].sensorName === 'temp'){
                tempData.push(data[i].sensorData);

            };

        };

        var total = 0;
        var avg = 0;
        for(var i in tempData){
            total += tempData[i];


        };
        avg = total/tempData.length;
        return avg;


    };


    $scope.getAvgHum = function(id){
        var data = [];
        for(var i in $scope.mostrar){
            if($scope.mostrar[i].id ===id){
                data = $scope.mostrar[i].data;

            };

        };

        var tempData = [];
        for(var i in data){
            if(data[i].sensorName === 'humedad'){
                tempData.push(data[i].sensorData);

            };

        };

        var total = 0;
        var avg = 0;
        for(var i in tempData){
            total += tempData[i];


        };
        avg = total/tempData.length;
        return avg;


    };

    $scope.getAvgCau = function(id){
        var data = [];
        for(var i in $scope.mostrar){
            if($scope.mostrar[i].id ===id){
                data = $scope.mostrar[i].data;

            };

        };

        var tempData = [];
        for(var i in data){
            if(data[i].sensorName === 'caudal'){
                tempData.push(data[i].sensorData);

            };

        };

        var total = 0;
        var avg = 0;
        for(var i in tempData){
            total += tempData[i];


        };
        avg = total/tempData.length;
        return avg;


    };





});