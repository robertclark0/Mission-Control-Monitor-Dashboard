mcmdApp.controller('AreaWeatherController', ['$scope', '$modal', function($scope, $modal){

    $scope.animationsEnabled = true;

    $scope.open = function (size) {

        var modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'dashboard-views/area-weather/settings-modal/area-weather-settings-modal.template.html',
            controller: 'ModalController',
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };


}]);

