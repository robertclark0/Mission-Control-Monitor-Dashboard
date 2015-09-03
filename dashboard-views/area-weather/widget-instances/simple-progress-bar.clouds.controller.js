mcmdApp.controller('SimpleProgressBarCloudsController',['$scope', 'areaWeatherService',function($scope, areaWeatherService){

    var weatherResult = areaWeatherService.weatherResult.$promise.then(function(resp){
        weatherResult = resp;

        $scope.value = weatherResult.clouds.all;


    });

    $scope.detail = "% of cloud coverage";

}]);


