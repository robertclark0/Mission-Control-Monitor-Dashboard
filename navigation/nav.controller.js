mcmdApp.controller('NavController',['$scope', 'currentMonitorsService',function($scope, currentMonitorsService){
    $scope.monitorList = currentMonitorsService.monitorList;

    $scope.checkValue = -1;

    $scope.checkIndex = function (index) {
        $scope.checkValue = index;
        console.log($scope.checkValue);
    };
}]);