mcmdApp.controller('ModalController', function ($scope, $modalInstance, items, navService) {

    $scope.monitorList = navService.monitorList;

    $scope.newMonitorName = '';

    $scope.addMonitor = function(){
        $scope.monitorList.push({
            title: $scope.newMonitorName
        });
        navService.monitorList = $scope.monitorList;
    };

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});