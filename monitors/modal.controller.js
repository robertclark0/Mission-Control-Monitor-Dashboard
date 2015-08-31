mcmdApp.controller('ModalController', ['$scope', '$modalInstance', 'monitorsService','uiGridConstants', function ($scope, $modalInstance, monitorsService, uiGridConstants) {

    $scope.monitorList = monitorsService.monitorList;

    $scope.newMonitorName = '';

    $scope.addMonitor = function(){
        $scope.monitorList.push({
            title: $scope.newMonitorName
        });
        //monitorsService.monitorList = $scope.monitorList;
    };

    //GRID
    $scope.gridOptions = {
        enableRowSelection: true,
        enableSelectAll: true,
        selectionRowHeaderWidth: 35,
        rowHeight: 35,
        enableHorizontalScrollbar: uiGridConstants.scrollbars.NEVER,
        enableColumnMenus: false
    };

    $scope.gridOptions.columnDefs = [
        { name: 'title', displayName: 'Current Monitors'}
    ];

    $scope.gridOptions.multiSelect = true;

    $scope.gridOptions.data = $scope.monitorList;

    //BOTTOM BUTTONS

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);