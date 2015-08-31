mcmdApp.controller('ModalController', ['$scope', '$filter', '$modalInstance', 'currentMonitorsService','uiGridConstants', 'availableMonitorsService', function ($scope, $filter, $modalInstance, currentMonitorsService, uiGridConstants, availableMonitorsService) {

    $scope.currentMonitorList = currentMonitorsService.monitorList;
    $scope.availableMonitorList = availableMonitorsService.monitorList;



    $scope.addMonitor = function(){
        $scope.newMonitorObject.title = $scope.newMonitorName;
        $scope.currentMonitorList.push(angular.copy($scope.newMonitorObject));
        //console.log($scope.currentMonitorList);

    };

    $scope.removeMonitors = function(){
        angular.forEach($scope.selectedRows, function(value){
            //console.log(value.entity.$$hashKey);
            var i = $scope.currentMonitorList.map(function(e) { return e.$$hashKey; }).indexOf(value.entity.$$hashKey);
            if (i > -1) {
                $scope.currentMonitorList.splice(i, 1);
            }
        });


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
        data: $scope.availableMonitorList,
        columnDefs: [
            { name: 'title', displayName: 'Available Monitors', enableSorting: false}
        ]
    };
    $scope.gridAvailableMonitors.onRegisterApi = function(gridApi){
        //set gridApi on scope
        $scope.gridApi = gridApi;
        gridApi.selection.on.rowSelectionChanged($scope,function(row){
            if (row.isSelected === true){
                $scope.newMonitorObject = angular.copy(gridApi.selection.getSelectedRows()[0]);
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
    $scope.gridCurrentMonitors.onRegisterApi = function(gridApi){
        //set gridApi on scope
        $scope.gridApi = gridApi;
        gridApi.selection.on.rowSelectionChanged($scope,function(){
            $scope.selectedRows = gridApi.selection.getSelectedGridRows();
            //console.log($scope.selectedRows[0].entity.$$hashKey);
        })
    };


    //Bottom Buttons

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}]);