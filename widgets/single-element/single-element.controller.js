mcmdApp.controller('SingleElementController',['$scope', 'areaWeatherService',function($scope, areaWeatherService){

    $scope.weatherResult = areaWeatherService.weatherResult.$promise.then(function(resp){
        console.log(resp);
        console.log(areaWeatherService.weatherResult.wind);
        $scope.weatherResult = resp;
        $scope.testElem = $scope.weatherResult.wind.speed;
        console.log($scope.testElem);
    });

}]);


