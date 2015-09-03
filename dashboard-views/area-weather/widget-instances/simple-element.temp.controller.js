mcmdApp.controller('SimpleElementTempController',['$scope','$filter', 'areaWeatherService',function($scope, $filter, areaWeatherService){

    var weatherResult = areaWeatherService.weatherResult.$promise.then(function(resp){
        weatherResult = resp;

        $scope.value = weatherResult.main.temp  + " Kelvin";
        $scope.subValue = $filter('number')(weatherResult.main.temp  - 273.15, 2) + " celsius / " + $filter('number')((weatherResult.main.temp  - 273.15)*1.8 + 32, 2) + " fahrenheit";

    });

}]);


