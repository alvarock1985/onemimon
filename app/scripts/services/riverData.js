/**
 * Created by alvaro on 12-01-17.
 */
'Use Strict';

angular.module('onemiMonApp')

.factory('riverData', ['$http', function($http){

    var getRivers = function(){
        return $http.get('http://mon.acmeapps.xyz:8080/EmuSensor/webapi/rivers')
            .success(function(data){
                return data;
            })
    };

    return {
        getRivers : getRivers
    }

}]);