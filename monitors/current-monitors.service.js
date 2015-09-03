mcmdApp.service('currentMonitorsService', function(){
    this.monitorList = [
        {
            title: "Demo Panels",
            controlValue: "demo-panels",
            type: "Weather",
            lon: "25",
            lat: "35"
        },
        {
            title: "Weather San Antonio",
            controlValue: "area-weather",
            type: "Weather",
            lon: "25",
            lat: "35"
        }
    ];
});