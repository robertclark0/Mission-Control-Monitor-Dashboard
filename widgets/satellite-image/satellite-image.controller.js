mcmdApp.controller('SatelliteImageController',['$scope', '$resource', 'areaWeatherService',function($scope, $resource, areaWeatherService){

    $scope.title = "images!";

    $scope.imageResult = areaWeatherService.imageResult;

}]);


