mcmdApp.controller('AreaWeatherSettingsModalController', ['$scope', 'areaWeatherService','$modalInstance', function($scope, areaWeatherService, $modalInstance){

    $scope.locationSearch = '';

    $scope.startSearch = function(){};

    //var locationResult = areaWeatherService.locationServiceResult.$promise.then(function(resp){
    //
    //
    //    console.log(resp + "hi");
    //
    //
    //});

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

}]);