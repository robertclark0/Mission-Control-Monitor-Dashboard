mcmdApp.controller('WeatherMapWindController',['$scope', 'areaWeatherService',function($scope, areaWeatherService){


    $scope.startPressureMap = function(){
        //Reference Map Directive
        //Center of map
        var lat = areaWeatherService.latitutde;
        var lon = areaWeatherService.longitude;


        var wgs84 = new OpenLayers.Projection("EPSG:4326");
        var mercator = new OpenLayers.Projection("EPSG:900913");

        var lonlat = new OpenLayers.LonLat(lon, lat).transform(wgs84, mercator);
        var map = new OpenLayers.Map("windMap");
        console.log(map);
        console.log("hello");
        // Create overlays
        //  OSM
        var mapnik = new OpenLayers.Layer.OSM();
        var layer_wind = new OpenLayers.Layer.XYZ(
            "wind",
            "http://${s}.tile.openweathermap.org/map/wind/${z}/${x}/${y}.png",
            {
                isBaseLayer: false,
                opacity: 0.4,
                sphericalMercator: true

            }
        );

        map.addLayers([mapnik, layer_wind]);
        map.setCenter( lonlat, 6);

    }


}]);