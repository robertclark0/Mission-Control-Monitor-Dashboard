mcmdApp.service('monitorsService', function(){
    this.monitorList = [
        {
            title: "LP40 Weather",
            type: "Weather",
            lon: "25",
            lat: "35"
        },
        {
            title: "LP39 Weather",
            type: "Weather",
            lon: "24",
            lat: "34"
        },
        {
            title: "SpaceX Headquarters",
            type: "Weather",
            lon: "80",
            lat: "29"
        },
        {
            title: "Air Traffic",
            type: "Traffic",
            lon: "25",
            lat: "24"
        }
    ];
});