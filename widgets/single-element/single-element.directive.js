mcmdApp.directive('singleElementDirective', function(){
    return {
        templateUrl: "widgets/single-element/single-element.template.html",
        replace: true,
        controller : "@",
        name:"controllerName"
    }
});