mcmdApp.service('availableMonitorsService', [function(){
    this.monitorList = [
        {
            title: "Area Weather",
            controlValue: "area-weather",
            type: "Weather",
            lon: "25",
            lat: "35"
        },
        {
            title: "MAAS, Mars Data",
            type: "Weather",
            lon: "24",
            lat: "34"
        },
        {
            title: "HelioVeiwer",
            type: "Weather",
            lon: "80",
            lat: "29"
        },
        {
            title: "Casinni",
            type: "Traffic",
            lon: "25",
            lat: "24"
        },
        {
            title: "Area Air Traffic",
            controlValue: "air-traffic",
            type: "Weather",
            lon: "25",
            lat: "35"
        }
    ];


}]);