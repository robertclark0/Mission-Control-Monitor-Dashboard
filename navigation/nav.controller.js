mcmdApp.controller('navController',['$scope', 'navService',function($scope, navservice){
    $scope.monitorList = navservice.monitorList;
}]);