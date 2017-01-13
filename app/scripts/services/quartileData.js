/**
 * Created by alvaro on 12-01-17.
 */
'Use Strict'


angular.module("onemiMonApp")

.factory('quartileData',['$http', function($http){

    var getQuartileData = function(riverId){
        return $http.get('http://mon.acmeapps.xyz:8080/EmuSensor/webapi/quartile/last/'+riverId)
            .success(function(data){
                return data;
            });

    };

    return {
        getQuartileData : getQuartileData
    };

}]);