mcmdApp.service('areaWeatherService', ['$resource', function($resource){

    this.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/weather", {callback: "JSON_CALLBACK"},{get: {method: "JSONP"}});
    this.weatherResult = this.weatherAPI.get({q: "London,uk"});

    this.weatherResult.$promise.then(function(resp){

        this.weatherResult = resp;;

    });

}]);