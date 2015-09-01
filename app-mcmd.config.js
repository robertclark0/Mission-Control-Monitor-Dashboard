mcmdApp.config(function($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'dashboard-views/default.template.html'
        })

        .when('/dashboard-view/:viewName', {
            templateUrl:function(params) {
                return "dashboard-views/" + params.viewName + "/" + params.viewName + ".template.html";
            }
        })
        .otherwise({
            redirectTo: '/'
        });

});