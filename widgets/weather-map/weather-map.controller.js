mcmdApp.controller('WeatherMapController',['$scope', 'weatherMapService' ,function($scope, weatherMapService){

    $scope.title = weatherMapService.title;

    $scope.math = function(){
      return 3 + 3;
    };

    $scope.tempFunct = function(){
        var map = new ol.Map({
            target: 'mapzz',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.MapQuest({layer: 'sat'})
                })
            ],
            view: new ol.View({
                center: ol.proj.transform([37.41, 8.82], 'EPSG:4326', 'EPSG:3857'),
                zoom: 4
            })
        });
        return map;
    };

}]);


