mcmdApp.service('areaWeatherService', ['$resource', function($resource){

    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/weather", {callback: "JSON_CALLBACK"},{get: {method: "JSONP"}});
    this.weatherResult = weatherAPI.get({q: "London,uk"});

    //var lansatAPI = $resource("https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&cloud_score=True&api_key=gCPjf0Ng2scLvSPOrgjigGCXhw6LeLb6SUC5x47Z", {callback: "JSON_CALLBACK"}, {get: {medthod: "JSONP"}});
    //this.lansatResult = lansatAPI.get();


}]);