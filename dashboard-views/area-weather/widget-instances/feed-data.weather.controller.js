mcmdApp.controller('FeedDataWeatherController', ['$scope', 'areaWeatherService',function($scope, areaWeatherService){

    $scope.weatherResult = areaWeatherService.weatherResult.$promise.then(function(resp){
        $scope.weatherResult = resp;
        console.log(resp);
        $scope.value = $scope.weatherResult;
    });

}]);