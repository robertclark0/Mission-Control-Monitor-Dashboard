mcmdApp.controller('ModalController', ['$scope', '$modalInstance', 'monitorsService', function ($scope, $modalInstance, monitorsService) {

    $scope.monitorList = monitorsService.monitorList;

    $scope.newMonitorName = '';

    $scope.addMonitor = function(){
        $scope.monitorList.push({
            title: $scope.newMonitorName
        });
        //monitorsService.monitorList = $scope.monitorList;
    };

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);