mcmdApp.controller('NavController',['$scope', 'monitorsService',function($scope, monitorsService){
    $scope.monitorList = monitorsService.monitorList;
}]);