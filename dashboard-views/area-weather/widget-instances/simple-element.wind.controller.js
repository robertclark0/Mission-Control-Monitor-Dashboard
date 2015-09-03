mcmdApp.controller('SimpleElementWindController',['$scope', 'areaWeatherService',function($scope, areaWeatherService){

    var weatherResult = areaWeatherService.weatherResult.$promise.then(function(resp){
        weatherResult = resp;

        $scope.value = weatherResult.wind.speed + " mph";
        $scope.subValue = weatherResult.wind.deg + " deg";

    });

}]);


