mcmdApp.controller('ImageCuriosityController', ['$scope','$resource', 'marsDataService',function($scope,$resource, marsDataService){

    marsDataService.maxSolResult.$promise.then(function(resp){

        //console.log(resp);
        //console.log(resp.rovers[0].max_sol);
        $scope.max_sol = resp.rovers[0].max_sol

        var imageAPI = $resource("http://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos");
        $scope.imageResult = imageAPI.get({sol: $scope.max_sol});

        $scope.imageResult.$promise.then(function(respImg){
            //console.log(respImg);
            //console.log(respImg.photos[0].img_src);
            $scope.value = respImg.photos[0].img_src;

        });

    });

}]);