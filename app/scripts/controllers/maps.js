'use strict';


angular.module('onemiMonApp')

  .controller('MapsCtrl', function ($scope, $http, uiGmapGoogleMapApi, stationData, riverData, quartileData, dataOnHours, sensorData) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.pinColor = "00FF00";
    $scope.markers = [];
    $scope.id = 1;
    $scope.target2 = 5;
    $scope.icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2%7C'+$scope.pinColor;
    console.log($scope.id);

    $scope.map = {

        center: {latitude: -27.3771861, longitude:-70.3560286 },
        zoom: 7,
        control: {},
        window: {
            model: {},
            show: false,
            options: {
                pixelOffset: {width: -1, height: -20},
                maxWidth: 500
            }

        },
        markerOptions: {

        },
        markers: $scope.markers,
        markersEvents:{
            click: function(marker, eventName, model, args){
                $scope.map.window.model = model;
                $scope.map.window.show = true;
            }
        }
    };

    $scope.updateStationStatus = function(){
        $scope.sensors = [];
        console.log("getting stations");
        stationData.getAllStations().success(function(data){
           $scope.stations = data;
           for(var i in $scope.stations){
               var sensors = [];

               sensorData.getSensors($scope.stations[i].id).success(function(datos){
                   sensors = datos;
                   var numFails = datos.reduce(function(n, sensor){
                       return n + (sensor.status === 'FAIL');
                   }, 0);
                   var data = {
                       id : datos[0].stationid,
                       status: ""
                   };




                   if(numFails === sensors.length){
                       data.status = 'FAIL';
                   }else if (numFails > 1 || numFails < datos.lenght){
                       data.status = 'WARN';
                   }else{
                       data.status = 'OK';
                   }

                   var toPost = JSON.stringify(data);
                   $http.post('http://mon.acmeapps.xyz:8080/EmuSensor/webapi/stations/updateStatus', toPost)
                       .success(function(data, status){
                           $scope.sendStatus = "Datos enviados correctamente";
                       })
                       .error(function(data, status){
                           $scope.sendStatus = "Error al enviar los datos";
                       });
               });
           }
        });


    };

    $scope.loadData = function(target, id){
        stationData.getStations(id).success(function(datos){
            $scope.markers = datos;

            for(var i in datos){
                if(datos[i].status==="FAIL"){
                    datos[i].icon = "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2%7CFF0000"
                }else if(datos[i].status==="WARN"){
                    datos[i].icon = "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2%7CFFFF00"
                }else {
                    datos[i].icon = "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2%7C00FF00"
                }
            }


            $scope.loadDataQuartile(id);
            $scope.loadDataAvg(target, id);

        });
      };

    $scope.loadDataQuartile = function(id){
        quartileData.getQuartileData(id).success(function(data){

            $scope.quartiles = data;
            $scope.data = [];



            $scope.cauMin = data.cauMin;
            $scope.cauLow = data.cauLow;
            $scope.cauLowMid = (data.cauMid + data.cauLow)/2;
            $scope.cauMid = data.cauMid;
            $scope.cauMidHigh = (data.cauHigh + data.cauMid)/2;
            $scope.cauHigh = data.cauHigh;
            $scope.cauMax = data.cauMax;

            $scope.tempMin = data.tempMin;
            $scope.tempLow = data.tempLow;
            $scope.tempLowMid = (data.tempMid + data.tempLow)/2;
            console.log($scope.tempLowMid);
            $scope.tempMid = data.cauMid;
            $scope.tempMidHigh = (data.tempHigh + data.tempMid)/2;
            $scope.tempHigh = data.tempHigh;
            $scope.tempMax = data.tempMax;


            $scope.humMin = data.humMin;
            $scope.humLow = data.humLow;
            $scope.humLowMid = (data.humMid + data.humLow)/2;
            $scope.humMid = data.cauMid;
            $scope.humMidHigh = (data.humHigh + data.humMid)/2;
            $scope.humHigh = data.humHigh;
            $scope.humMax = data.humMax;


            $scope.prepMin = data.prepMin;
            $scope.prepLow = data.prepLow;
            $scope.prepLowMid = (data.prepMid + data.prepLow)/2;
            $scope.prepMid = data.cauMid;
            $scope.prepMidHigh = (data.prepHigh + data.prepMid)/2;
            $scope.prepHigh = data.prepHigh;
            $scope.prepMax = data.prepMax;


            $scope.otherMin = data.otherMin;
            $scope.otherLow = data.otherLow;
            $scope.otherLowMid = (data.otherMid + data.otherLow)/2;
            $scope.otherMid = data.cauMid;
            $scope.otherMidHigh = (data.otherHigh + data.otherMid)/2;
            $scope.otherHigh = data.otherHigh;
            $scope.otherMax = data.otherMax;
            
            
            $scope.dataCau = [
                [{x:$scope.cauLow, y:1}, {x:$scope.cauMid, y:0},{x:$scope.cauLowMid, y:0},
                    {x:$scope.cauMid, y:1},{x:$scope.cauMidHigh, y:0},
                    {x:$scope.cauMid, y:0},{x:$scope.cauHigh, y:1},
                    {x:$scope.cauMax, y:1}]
            ];

            $scope.dataHum = [
                [{x:$scope.humLow, y:1}, {x:$scope.humMid, y:0},{x:$scope.humLowMid, y:0},
                    {x:$scope.humMid, y:1},{x:$scope.humMidHigh, y:0},
                    {x:$scope.humMid, y:0},{x:$scope.humHigh, y:1},
                    {x:$scope.humMax, y:1}]
            ];

            $scope.dataTemp = [
                [{x:$scope.tempLow, y:1}, {x:$scope.tempMid, y:0},{x:$scope.tempLowMid, y:0},
                    {x:$scope.tempMid, y:1},{x:$scope.tempMidHigh, y:0},
                    {x:$scope.tempMid, y:0},{x:$scope.tempHigh, y:1},
                    {x:$scope.tempMax, y:1}]
            ];

            $scope.dataPrep = [
                [{x:$scope.prepLow, y:1}, {x:$scope.prepMid, y:0},{x:$scope.prepLowMid, y:0},
                    {x:$scope.prepMid, y:1},{x:$scope.prepMidHigh, y:0},
                    {x:$scope.prepMid, y:0},{x:$scope.prepHigh, y:1},
                    {x:$scope.prepMax, y:1}]
            ];

            $scope.dataOther = [
                [{x:$scope.otherLow, y:1}, {x:$scope.otherMid, y:0},{x:$scope.otherLowMid, y:0},
                    {x:$scope.otherMid, y:1},{x:$scope.otherMidHigh, y:0},
                    {x:$scope.otherMid, y:0},{x:$scope.otherHigh, y:1},
                    {x:$scope.otherMax, y:1}]
            ];
            
            return $scope.cauLow;


        });
    };

    $scope.loadData($scope.id);
    $scope.loadDataQuartile($scope.id);

    riverData.getRivers().success(function(data){
        $scope.rivers = data;
    });


      $scope.labels = ["Bajo", "Medio", "Alto", "Max" ];
      $scope.series = ['Caudal'];

      $scope.onClick = function (points, evt) {
          console.log(points, evt);
      };
      $scope.datasetOverride = [

          {
              xAxisID: 'x-axis-1',
              showLines : true,
              lineTension: 0
          },
          {
              yAxisID: 'y-axis-1',
              showLines: true,
              lineTension: 0
          }
      ];
      $scope.options = {
          scales: {

              xAxes: [
                  {
                      id: 'x-axis-1',
                      type: 'linear',
                      position: 'bottom',
                      showLines: true,
                      lineTension: 0,
                  },
                  {
                      id: 'x-axis-2',
                      position:'top',
                      display: true
                  }
              ],
              yAxes: [
                  {
                      id: 'y-axis-1',
                      showLines: true,
                      display: false,
                      lineTension: 0
                  }

              ]
          }
      };
      $scope.value = function(value){
          $scope.target = value;

      };

      $scope.loadDataAvg = function(target, id){
          dataOnHours.getData(target, id).success(function(data){
              $scope.datos = data;
          });


      };
      $scope.updateStationStatus();
    uiGmapGoogleMapApi.then(function(maps){

    });

  });


