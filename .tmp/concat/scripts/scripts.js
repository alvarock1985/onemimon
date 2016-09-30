'use strict';

/**
 * @ngdoc overview
 * @name onemiMonApp
 * @description
 * # onemiMonApp
 *
 * Main module of the application.
 */
angular
  .module('onemiMonApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps'



  ])

  .config(["uiGmapGoogleMapApiProvider", function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyCACDsAHFTvNYxCCZDRgt-GMO12SH1n08k',
      v: '3.20', //defaults to latest 3.X anyhow
      libraries: 'weather,geometry,visualization'
    });
  }])


  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/maps', {
        templateUrl: 'views/maps.html',
        controller: 'MapsCtrl',
        controllerAs: 'maps'
      })
      .when('window', {
        controller: 'WindowsCtrl',
        controllerAs: 'win',
        templateUrl: 'views/window.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name onemiMonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the onemiMonApp
 */
angular.module('onemiMonApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name onemiMonApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the onemiMonApp
 */
angular.module('onemiMonApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';


angular.module('onemiMonApp')

  .controller('MapsCtrl', ["$scope", "$http", "uiGmapGoogleMapApi", "dataSensor", function ($scope, $http, uiGmapGoogleMapApi, dataSensor) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];





    $scope.map = {

        center: {latitude: -27.3771861, longitude:-70.3560286 },
        zoom: 7,
        control: {},
        window: {
            model: {},
            show: false,
            options: {
                pixelOffset: {width: -1, height: -20}
            }

        },
        markers: $scope.markers,
        markersEvents:{
            click: function(marker, eventName, model, args){
                $scope.map.window.model = model;
                $scope.map.window.show = true;
            }
        }
    };


    dataSensor.success(function(datos){
      $scope.markers = datos;


      });






    uiGmapGoogleMapApi.then(function(maps){

    });

  }]);



/**
 * Created by Alvarock on 30/09/2016.
 */
'use strict';

angular.module('onemiMonApp')

.controller('WindowCtrl', ["$scope", function($scope){

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


}]);
/**
 * Created by alvarock on 9/26/16.
 */

'use strict';
angular.module('onemiMonApp')

  .factory('dataSensor',['$http', function($http){
    return $http.get('http://168.232.165.95:8080/EmuSensor/webapi/historic')
      .success(function(data){
        return data;
      })
      .error(function(err){
        return err;
      });

  }]);

/**
 * Created by Alvarock on 29/09/2016.
 */
'use strict';


angular.module('onemiMonApp')

.directive('infoWindow', function(){
    return {
        restrict: 'E',
        scope: {
            info : '='
    },
        templateUrl: 'scripts/directives/infoWindow.html'



};
});
angular.module('onemiMonApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/chart.html',
    ""
  );


  $templateCache.put('views/main.html',
    "<div class=\"jumbotron\"> <h1>Sistema de monitoreo ONEMI Atacama</h1> </div>"
  );


  $templateCache.put('views/maps.html',
    "<div id=\"map_canvas\" ng-controller=\"MapsCtrl\"> <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" events=\"map.events\" options=\"options\"> <ui-gmap-markers models=\"markers\" idkey=\"'id'\" coords=\"'self'\" events=\"map.markersEvents\"> </ui-gmap-markers> <ui-gmap-window show=\"map.window.show\" coords=\"map.window.model\" templateurl=\"'scripts/directives/infoWindow.html'\" templateparameter=\"map.window.model\" options=\"map.window.options\" ng-cloak> </ui-gmap-window> </ui-gmap-google-map> </div>"
  );


  $templateCache.put('views/test.html',
    "<div> <p>hola mundo</p> <p>hola mundo</p> <p>hola mundo</p> <p>hola mundo</p> <p>hola mundo</p> <p>hola mundo</p> <p>hola mundo</p> </div>"
  );


  $templateCache.put('views/window.html',
    "<div> <p>{{historic.stationName}}</p> </div>"
  );

}]);
