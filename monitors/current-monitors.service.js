mcmdApp.service('currentMonitorsService', function(){
    this.monitorList = [
        {
            title: "Demo Panels",
            controlValue: "demo-panels",
            type: "Weather"
        },
        {
            title: "SpaceX Hawthorne",
            controlValue: "area-weather",
            type: "Weather"
        },
        {
            title: "Mars Curiosity Data",
            controlValue: "mars-data",
            type: "Weather"
        }
    ];
});