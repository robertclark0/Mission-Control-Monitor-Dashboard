mcmdApp.controller('AreaWeatherController', ['$scope', 'areaWeatherService', function($scope, mainService){

    $scope.name = mainService.firstName;
    $scope.lastName = mainService.lastName;

}]);