mcmdApp.directive('feedDataDirective', function(){
    return {
        templateUrl: "widgets/feed-data/feed-data.template.html",
        replace: true,
        controller : "@",
        name:"controllerName"
    }
});