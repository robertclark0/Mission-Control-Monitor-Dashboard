mcmdApp.service('areaWeatherService', ['$resource', function($resource){

    this.imageAPI = $resource("http://api.openweathermap.org/data/2.5/weather", {get: {method: "JSONP"}});
    this.imageResult = this.imageAPI.get({q: "London,uk"});
    //console.log($scope.imageResult);

}]);