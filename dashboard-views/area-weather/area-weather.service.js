mcmdApp.service('areaWeatherService', ['$resource', function($resource){

    this.longitude = -98.465688;
    this.latitutde = 29.650374;

    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/weather", {callback: "JSON_CALLBACK"},{get: {method: "JSONP"}});
    this.weatherResult = weatherAPI.get({lat: this.latitutde, lon: this.longitude});

    var lansatAPI = $resource("https://api.nasa.gov/planetary/earth/imagery?lon=" + this.longitude + "&lat=" + this.latitutde + "&date=2014-02-01&cloud_score=True&api_key=gCPjf0Ng2scLvSPOrgjigGCXhw6LeLb6SUC5x47Z", {callback: "JSON_CALLBACK"}, {get: {medthod: "JSONP"}});
    this.lansatResult = lansatAPI.get();


}]);