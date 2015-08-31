mcmdApp.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items, navService) {

    $scope.monitorList2 = navService.monitorList;

    $scope.newMonitorName = '';

    $scope.addMonitor = function(){
        $scope.monitorList2.push({
            title: $scope.newMonitorName
        })
        navService.monitorList = $scope.monitorList2;
    };

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});