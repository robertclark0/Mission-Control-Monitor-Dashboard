mcmdApp.controller('WeatherMapPressureController',['$scope', 'areaWeatherService',function($scope, areaWeatherService){


    $scope.startPressureMap = function(){
        //Reference Map Directive
        //Center of map
        var lat = 29.650374;
        var lon = -98.465688;


        var wgs84 = new OpenLayers.Projection("EPSG:4326");
        var mercator = new OpenLayers.Projection("EPSG:900913");

        var lonlat = new OpenLayers.LonLat(lon, lat).transform(wgs84, mercator);
        var map = new OpenLayers.Map("basicMap");
        console.log(map);
        console.log("hello");
        // Create overlays
        //  OSM
        var mapnik = new OpenLayers.Layer.OSM();
        var layer_cloud = new OpenLayers.Layer.XYZ(
            "pressure",
            "http://${s}.tile.openweathermap.org/map/pressure/${z}/${x}/${y}.png",
            {
                isBaseLayer: false,
                opacity: 0.4,
                sphericalMercator: true

            }
        );

        var layer_precipitation = new OpenLayers.Layer.XYZ(
            "pressure_cntr",
            "http://${s}.tile.openweathermap.org/map/pressure_cntr/${z}/${x}/${y}.png",
            {
                isBaseLayer: false,
                opacity: 0.7,
                sphericalMercator: true
            }
        );

        map.addLayers([mapnik, layer_cloud, layer_precipitation]);
        map.setCenter( lonlat, 6);

    }


}]);