mcmdApp.controller('AreaWeatherSettingsModalController', ['$scope', 'areaWeatherService', function($scope, areaWeatherService){

    $scope.locationSearch = '';

    $scope.startSearch = function(){};

    var locationResult = areaWeatherService.locationServiceResult.$promise.then(function(resp){


        console.log(resp + "hi");


    });

}]);