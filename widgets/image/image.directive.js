mcmdApp.directive('imageDirective', function(){
    return {
        templateUrl: "widgets/image/image.template.html",
        replace: true,
        controller : "@",
        name:"controllerName",
        scope: {}
    }
});