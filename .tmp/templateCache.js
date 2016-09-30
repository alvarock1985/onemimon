angular.module('onemiMonApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/chart.html',
    ""
  );


  $templateCache.put('views/infoWindow.html',
    "<div ng-controller=\"WindowCtrl\"> <p> Nombre de estacion: {{parameter.name}} </p> <div>{{saveData(parameter.data)}}</div> <p>Promedio Temperatura ultimas 5 horas: {{avgTemp()}}ºC</p> <p>Promedio Humedad ultimas 5 horas: {{avgHum()}}%</p> <p>Promedio Caudal ultimas 5 horas: {{avgCau()}} m/sec³</p> </div>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"jumbotron\"> <h1>Sistema de monitoreo ONEMI Atacama</h1> </div>"
  );


  $templateCache.put('views/maps.html',
    "<div id=\"map_canvas\" ng-controller=\"MapsCtrl\"> <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" events=\"map.events\" options=\"options\"> <ui-gmap-markers models=\"markers\" idkey=\"'id'\" coords=\"'self'\" events=\"map.markersEvents\"> </ui-gmap-markers> <ui-gmap-window show=\"map.window.show\" coords=\"map.window.model\" templateurl=\"'views/infoWindow.html'\" templateparameter=\"map.window.model\" options=\"map.window.options\" ng-cloak> </ui-gmap-window> </ui-gmap-google-map> </div>"
  );


  $templateCache.put('views/test.html',
    "<div> <p>hola mundo</p> <p>hola mundo</p> <p>hola mundo</p> <p>hola mundo</p> <p>hola mundo</p> <p>hola mundo</p> <p>hola mundo</p> </div>"
  );


  $templateCache.put('views/window.html',
    "<div> <p>{{historic.stationName}}</p> </div>"
  );

}]);
