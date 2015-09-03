mcmdApp.controller('SimpleElementPressureController',['$scope', '$filter', 'areaWeatherService',function($scope,$filter, areaWeatherService){

    var weatherResult = areaWeatherService.weatherResult.$promise.then(function(resp){
        weatherResult = resp;

        $scope.value = weatherResult.main.pressure / 10 + " kPa";
        $scope.subValue = $filter('number')(weatherResult.main.pressure * 0.000986923267, 2) + " atm";


    });

}]);


