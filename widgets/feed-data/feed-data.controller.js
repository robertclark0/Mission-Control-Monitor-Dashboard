mcmdApp.controller('FeedDataController', ['$scope', 'areaWeatherService',function($scope, areaWeatherService){

    $scope.weatherResult = areaWeatherService.weatherResult.$promise.then(function(resp){
        $scope.weatherResult = resp;

        $scope.value = $scope.weatherResult;
    });


}]);