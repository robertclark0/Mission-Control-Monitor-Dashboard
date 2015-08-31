mcmdApp.controller('NavController',['$scope', 'navService',function($scope, navservice){
    $scope.monitorList = navservice.monitorList;
}]);