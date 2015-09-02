mcmdApp.service('AreaWeatherService', ['$http', '$q', function($http, $q){

    //this.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/weather", {callback: "JSON_CALLBACK"},{get: {method: "JSONP"}});
    //this.weatherResult = this.weatherAPI.get({q: "London,uk"});

    //this.weatherResult.$promise.then(function(resp){

    //   this.weatherResult = resp;

    //});

    var userRequestedLocation = "London,uk",
        weatherURL = "http://api.openweathermap.org/data/2.5/weather";

    function buildURL () {
        return weatherURL + "?q=" + userRequestedLocation;
    }

    function getWeatherData () {
        var deferred = $q.defer();
        $http.get(buildURL())
            .then(function(response){
                deferred.resolve(response);
            });
        return deferred.promise;
    }

    return {
        getWeatherData: getWeatherData()
    };


}]);