mcmdApp.controller('SimpleElementPressureController',['$scope', '$filter', 'AreaWeatherService', function($scope, $filter, AreaWeatherService){

    //$scope.weatherResult = areaWeatherService.weatherResult.$promise.then(function(resp){
    //    $scope.weatherResult = resp;
    //
    //    $scope.value = $scope.weatherResult.main.pressure / 10 + " kPa";
    //    $scope.subValue = $filter('number')($scope.weatherResult.main.pressure * 0.000986923267, 2) + " atm";
    //
    //
    //});

    AreaWeatherService.getWeatherData
        .then(function(response){
            $scope.value = response.data.main.pressure / 10 + " kPa";
            $scope.subValue = parseFloat(response.data.main.pressure * 0.000986923267).toFixed(2) + " atm";
        }, function(err){
            console.log("Something bad happened!")
        });

}]);


