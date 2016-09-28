'use strict';


angular.module('onemiMonApp')

  .controller('MapsCtrl', function ($scope, $http, uiGmapGoogleMapApi, dataSensor) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

 //   $scope.obj = [{"description":"Embalse Santa Juana","id":1,"latitude":-28.68076,"longitude":-70.60984,"name":"Juana"},{"description":"Rio Jorquera","id":2,"latitude":-27.700869,"longitude":-69.55061,"name":"Jorquera"},{"description":"Rio Figueroa","id":3,"latitude":-27.46769,"longitude":-69.41238,"name":"Figueroa"}];
    $scope.markers = new Array();
    var getdata = function(){
        $http.get('http://localhost:8080/EmuSensor/webapi/stations').success(function(data){
          $scope.data = data;

          for (var i=0;i<$scope.data.length; i++){
            var m={
              id: i,
              coords:{
                latitude: $scope.data[i].latitude,
                longitude: $scope.data[i].longitude
              }
            };

            $scope.markers[i] = m;

          }

        });
    };

    getdata();

    $scope.marca = 0;
    $scope.map = {center: {latitude: -27.3771861, longitude:-70.3560286 },
      zoom: 7};


    $scope.windowOptions = {
      visible: false
    };

    $scope.onClick = function() {
      $scope.windowOptions.visible = !$scope.windowOptions.visible;
    };

    $scope.closeClick = function() {
      $scope.windowOptions.visible = false;
    };

    $scope.title = "Window Title!";



    dataSensor.success(function(datos){
      $scope.historic = datos;
      $scope.chData = {
        series:['Temperatura', 'Humedad', 'Caudal'],
        data:[]

      };

      var equis = "";
      var ye = [];
      var dataObj = [];
      for(var i = 0; i<datos.length;i++){
        for(var dat in datos[i].data){
              dataObj[dat] = datos[i].data[dat];
          }
        }

      for (var ind in dataObj) {




      }



    });




    uiGmapGoogleMapApi.then(function(maps){

    });

  });


