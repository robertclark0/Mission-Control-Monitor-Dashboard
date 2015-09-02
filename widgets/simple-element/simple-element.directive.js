mcmdApp.directive('simpleElementDirective', function(){
    return {
        templateUrl: "widgets/simple-element/simple-element.template.html",
        replace: true,
        controller : "@",
        name:"controllerName",
        scope: {}
    }
});