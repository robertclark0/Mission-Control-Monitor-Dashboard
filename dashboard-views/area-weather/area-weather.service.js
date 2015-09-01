mcmdApp.service('areaWeatherService', ['$resource', function($resource){

    this.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/weather", {get: {method: "JSONP"}});
    this.weatherResult = this.weatherAPI.get({q: "London,uk"});


}]);