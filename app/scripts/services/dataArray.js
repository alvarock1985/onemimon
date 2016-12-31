/**
 * Created by alvaro on 28-11-16.
 */
'use strict';


angular.module('onemiMonApp')

.factory('dataArray', ['$http', function($http){

    var getData = function(id){
        return $http.get('http://mon.acmeapps.xyz:8080/EmuSensor/webapi/dataonhours/5/'+id)
            .success(function(data){
                return data;
            })

    }

    return {
        getData: getData
    }






}]);