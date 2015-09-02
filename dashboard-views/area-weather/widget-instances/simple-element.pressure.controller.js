mcmdApp.controller('SimpleElementPressureController',['$scope', '$filter', 'areaWeatherService',function($scope,$filter, areaWeatherService){

    $scope.weatherResult = areaWeatherService.weatherResult.$promise.then(function(resp){
        $scope.weatherResult = resp;

        $scope.value = $scope.weatherResult.main.pressure / 10 + " kPa";
        $scope.subValue = $filter('number')($scope.weatherResult.main.pressure * 0.000986923267, 2) + " atm";


    });

}]);


