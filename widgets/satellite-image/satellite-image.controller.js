mcmdApp.controller('SatelliteImageController',['$scope', 'areaWeatherService',function($scope, areaWeatherService){

    $scope.title = "images!";

    $scope.weatherResult = areaWeatherService.weatherResult;

}]);