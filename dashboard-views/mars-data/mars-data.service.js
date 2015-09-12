mcmdApp.service('marsDataService', ['$resource','$http', function($resource, $http){

    var maxSolAPI = $resource("http://mars-photos.herokuapp.com/");
    this.maxSolResult = maxSolAPI.get();

    var marsWeatherAPI = $resource("http://marsweather.ingenology.com/v1/latest/?format=jsonp", {callback: "JSON_CALLBACK"},{get: {method: "JSONP"}});
    this.marsWeatherResult = marsWeatherAPI.get();

    //var locationServiceAPI = $http.get("http://cab.inta-csic.es/rems/wp-content/plugins/marsweather-widget/api.php")
    //    .then(function (response) {
    //        console.log(response.data.results[0]["geometry"]["location"].lat);
    //        //this.longitude = response.data.results[0]["geometry"]["location"].lng
    //        console.log(response.data.results[0]["geometry"]["location"].lng);
    //        //this.latitutde = response.data.results[0]["geometry"]["location"].lat
    //    });


}]);