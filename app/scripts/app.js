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
    'uiGmapgoogle-maps',
    'chart.js',
      'htmlToPdfSave'




  ])

  .config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyCACDsAHFTvNYxCCZDRgt-GMO12SH1n08k',
      v: '3.20', //defaults to latest 3.X anyhow
      libraries: 'weather,geometry,visualization'
    });
  })


  .config(function ($routeProvider) {
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
        .when('/reports',{
            controller: 'ReportsCtrl',
            controllerAs: 'rep',
            templateUrl: 'views/reports.html'
        })

        .when('/failEmulator',{
            controller: 'FailCtrl',
            controllerAs: 'fail',
            templateUrl: 'views/failEmulator.html'
        })

        .when('/addStation', {
            controler: 'AddStationCtrl',
            controllerAs: 'add',
            templateUrl: 'views/addStation.html'
        })

      .otherwise({
        redirectTo: '/'
      });
  });
