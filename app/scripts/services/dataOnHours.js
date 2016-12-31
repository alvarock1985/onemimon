/**
 * Created by alvaro on 28-11-16.
 */
'use strict';


angular.module('onemiMonApp')

.factory('dataOnHours', ['$http', function($http){

    var getData = function(target) {
        return $http.get('http://mon.acmeapps.xyz:8080/EmuSensor/webapi/dataonhours/'+target)
            .success(function (data) {
                return data;
            })

    };

    var getData2 = function(target, id){
        return $http.get('http://mon.acmeapps.xyz:8080/EmuSensor/webapi/dataonhours/'+target+'/'+id)
            .success(function(data){
                return data;
            })



    };

    var getAllData = function(){
        return $http.get('http://mon.acmeapps.xyz:8080/EmuSensor/webapi/dataonhours/1')
            .success(function(data){
                return data;
            })

    };

    return {
        getData: getData,
        getData2: getData2,
        getAllData: getAllData


    }

}]);