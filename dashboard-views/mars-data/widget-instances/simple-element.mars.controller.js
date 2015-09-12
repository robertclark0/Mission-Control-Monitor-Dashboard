mcmdApp.controller('SimpleElementMarsDateController',['$scope', 'marsDataService', function($scope, marsDataService){

    var marsWeatherResult = marsDataService.marsWeatherResult.$promise.then(function(resp){

        $scope.value = resp.report.terrestrial_date;

    });

}]);


mcmdApp.controller('SimpleElementMarsSolController',['$scope', 'marsDataService', function($scope, marsDataService){

    var marsWeatherResult = marsDataService.marsWeatherResult.$promise.then(function(resp){

        $scope.value = "Sol " + resp.report.sol;

    });

}]);

mcmdApp.controller('SimpleElementMarsLSController',['$scope', 'marsDataService', function($scope, marsDataService){

    var marsWeatherResult = marsDataService.marsWeatherResult.$promise.then(function(resp){

        $scope.value = resp.report.ls + " deg";

    });

}]);

mcmdApp.controller('SimpleElementMarsMinTempController',['$scope', 'marsDataService', function($scope, marsDataService){

    var marsWeatherResult = marsDataService.marsWeatherResult.$promise.then(function(resp){

        $scope.value = resp.report.min_temp + " C";

    });

}]);

mcmdApp.controller('SimpleElementMarsMaxTempController',['$scope', 'marsDataService', function($scope, marsDataService){

    var marsWeatherResult = marsDataService.marsWeatherResult.$promise.then(function(resp){

        $scope.value = resp.report.max_temp + " C";

    });

}]);

mcmdApp.controller('SimpleElementMarsPressureController',['$scope', 'marsDataService', function($scope, marsDataService){

    var marsWeatherResult = marsDataService.marsWeatherResult.$promise.then(function(resp){

        $scope.value = resp.report.pressure + " Pa";
        $scope.subValue = resp.report.pressure_string;

    });

}]);

mcmdApp.controller('SimpleElementMarsWindSpeedController',['$scope', 'marsDataService', function($scope, marsDataService){

    var marsWeatherResult = marsDataService.marsWeatherResult.$promise.then(function(resp){

        $scope.value = resp.report.wind_speed;

    });

}]);

mcmdApp.controller('SimpleElementMarsWindDirController',['$scope', 'marsDataService', function($scope, marsDataService){

    var marsWeatherResult = marsDataService.marsWeatherResult.$promise.then(function(resp){

        $scope.value = resp.report.wind_direction;

    });

}]);

mcmdApp.controller('SimpleElementMarsConditionController',['$scope', 'marsDataService', function($scope, marsDataService){

    var marsWeatherResult = marsDataService.marsWeatherResult.$promise.then(function(resp){

        $scope.value = resp.report.atmo_opacity;

    });

}]);

mcmdApp.controller('SimpleElementMarsSeasonController',['$scope', 'marsDataService', function($scope, marsDataService){

    var marsWeatherResult = marsDataService.marsWeatherResult.$promise.then(function(resp){

        $scope.value = resp.report.season;

    });

}]);

mcmdApp.controller('SimpleElementMarsSunUpController',['$scope', 'marsDataService', function($scope, marsDataService){

    var marsWeatherResult = marsDataService.marsWeatherResult.$promise.then(function(resp){

        $scope.value = resp.report.sunrise;

    });

}]);

mcmdApp.controller('SimpleElementMarsSunDownController',['$scope', 'marsDataService', function($scope, marsDataService){

    var marsWeatherResult = marsDataService.marsWeatherResult.$promise.then(function(resp){

        $scope.value = resp.report.sunset;

    });

}]);
