mcmdApp.service('areaWeatherService', ['$resource', '$http', function($resource, $http){

    this.longitude = -118.327197;
    this.latitutde = 33.920506;


    var search = '78258';

    //var locationServiceAPI = $resource("https://maps.googleapis.com/maps/api/geocode/json?address=91709&key=AIzaSyD_vzmxwNBr7V73cgGfjp_fesvUMtdAhEU");
    //this.locationServiceResult = locationServiceAPI.get();

    var locationServiceAPI = $http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + search + "&key=AIzaSyD_vzmxwNBr7V73cgGfjp_fesvUMtdAhEU")
        .then(function (response) {
            console.log(response.data.results[0]["geometry"]["location"].lat);
            //this.longitude = response.data.results[0]["geometry"]["location"].lng
            console.log(response.data.results[0]["geometry"]["location"].lng);
            //this.latitutde = response.data.results[0]["geometry"]["location"].lat
        });

    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/weather", {callback: "JSON_CALLBACK"},{get: {method: "JSONP"}});
    this.weatherResult = weatherAPI.get({lat: this.latitutde, lon: this.longitude});


    var lansatAPI = $resource("https://api.nasa.gov/planetary/earth/imagery?lon=" + this.longitude + "&lat=" + this.latitutde + "&date=2014-02-01&cloud_score=True&api_key=gCPjf0Ng2scLvSPOrgjigGCXhw6LeLb6SUC5x47Z", {callback: "JSON_CALLBACK"}, {get: {medthod: "JSONP"}});
    this.lansatResult = lansatAPI.get();


}]);