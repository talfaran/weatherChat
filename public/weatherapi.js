class weatherApi {
    constructor() { }

    findTemp(cityName) { // 35c474c2d48449ef9d7144630180205
        return $.get({
            url: "http://api.apixu.com/v1/current.json?key=35c474c2d48449ef9d7144630180205&q=" + cityName
        }).then((data)=>{
            // creeate new WeatherOBJ from the data returned from the API
            // return weatherOBJ
        });
    }
}

export { weatherApi }



