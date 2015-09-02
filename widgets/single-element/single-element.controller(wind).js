mcmdApp.controller('SingleElementController(Wind)',['$scope', 'areaWeatherService',function($scope, areaWeatherService){

    $scope.weatherResult = areaWeatherService.weatherResult.$promise.then(function(resp){
        $scope.weatherResult = resp;

        $scope.value = $scope.weatherResult.wind.speed + " mph";
        $scope.subValue = $scope.weatherResult.wind.deg + " deg";

    });

}]);


