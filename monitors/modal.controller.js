mcmdApp.controller('ModalController', ['$scope', '$modalInstance', 'currentMonitorsService','uiGridConstants', 'availableMonitorsService', function ($scope, $modalInstance, currentMonitorsService, uiGridConstants, availableMonitorsService) {

    $scope.currentMonitorList = currentMonitorsService.monitorList;
    $scope.availableMonitorList = availableMonitorsService.monitorList;

    $scope.newMonitorName = '';
    $scope.newMonitorObject = {};

    $scope.addMonitor = function(){
        $scope.currentMonitorList.push($scope.newMonitorObject);
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
        multiSelect: false,
        columnDefs: [
            { name: 'title', displayName: 'Available Monitors', enableSorting: false}
        ],
        data: $scope.availableMonitorList
    };
    $scope.gridAvailableMonitors.onRegisterApi = function(gridApi){
        //set gridApi on scope
        $scope.gridApi = gridApi;
        gridApi.selection.on.rowSelectionChanged($scope,function(row){
            if (row.isSelected === true){
                $scope.newMonitorObject = gridApi.selection.getSelectedRows()[0];
                $scope.newMonitorName = $scope.newMonitorObject.title;
            }
        })
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