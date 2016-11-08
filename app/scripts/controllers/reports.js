/**
 * Created by alvaro.cabrera on 11/8/2016.
 */
'use strict';


angular.module('onemiMonApp')

.controller ('reportCtrl', function($scope, dataSensor){

    dataSensor.success(function(datos){

        $scope.mostrar = datos;
    });



    console.log($scope.mostrar);







});