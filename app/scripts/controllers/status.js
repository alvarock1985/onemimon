/**
 * Created by alvaro.cabrera on 11/8/2016.
 */
'use strict';


angular.module('onemiMonApp')

.controller ('StatusCtrl', function($scope, dataOnHours){

    //$scope.target = 5;

    $scope.value = function(value){
        $scope.target = value;

    }

    $scope.loadData = function(target){
        dataOnHours.getData(target).success(function(data){
            $scope.datos = data;
        });


    }




    console.log($scope.datos);






});