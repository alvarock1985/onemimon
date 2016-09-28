/**
 * Created by alvarock on 9/26/16.
 */
'use strict';
angular.module('onemiMonApp')

  .controller('WindowCtrl', function($scope, dataSensor){

      dataSensor.success(function(data){

        $scope.dataSensor = data;


      });




  });
