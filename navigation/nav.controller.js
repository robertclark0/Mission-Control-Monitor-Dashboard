mcmdApp.controller('NavController',['$scope', 'currentMonitorsService',function($scope, currentMonitorsService){
    $scope.monitorList = currentMonitorsService.monitorList;
}]);