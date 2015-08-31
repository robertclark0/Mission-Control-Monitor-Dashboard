mcmdApp.controller('ModalController', ['$scope', '$modalInstance', 'currentMonitorsService','uiGridConstants', 'availableMonitorsService', function ($scope, $modalInstance, currentMonitorsService, uiGridConstants, availableMonitorsService) {

    $scope.currentMonitorList = currentMonitorsService.monitorList;
    $scope.availableMonitorList = availableMonitorsService.monitorList;

    $scope.newMonitorName = '';

    $scope.addMonitor = function(){
        $scope.currentMonitorList.push({
            title: $scope.newMonitorName
        });
        //currentMonitorsService.monitorList = $scope.currentMonitorList;
    };

    //Available Monitors Grid
    $scope.gridAvailableMonitors = {
        enableRowSelection: true,
        enableSelectAll: true,
        selectionRowHeaderWidth: 35,
        rowHeight: 35,
        enableHorizontalScrollbar: uiGridConstants.scrollbars.NEVER,
        enableColumnMenus: false,
        multiSelect: true,
        columnDefs: [
            { name: 'title', displayName: 'Available Monitors', enableSorting: false}
        ],
        data: $scope.availableMonitorList
    };

    //Current Monitors Grid
    $scope.gridCurrentMonitors = {
        enableRowSelection: true,
        enableSelectAll: true,
        selectionRowHeaderWidth: 35,
        rowHeight: 35,
        enableHorizontalScrollbar: uiGridConstants.scrollbars.NEVER,
        enableColumnMenus: false,
        multiSelect: true,
        data: $scope.currentMonitorList,
        columnDefs: [
        { name: 'title', displayName: 'Current Monitors', enableSorting: false}
    ]};


    //Bottom Buttons

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);