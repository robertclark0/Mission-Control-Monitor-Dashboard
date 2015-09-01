mcmdApp.controller('SingleElementController',['$scope', 'areaWeatherService',function($scope, mainService){

    $scope.weatherResult = mainService.weatherResult;
    console.log($scope.weatherResult);

}]);


