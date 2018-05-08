import { CityWeatherInfo } from "./cityWeatherOBJ.js";

var newCityWeather;
class weatherApi {
    constructor() { 
        this.countId = 0;
    }
    
    findTemp(cityName) { // 35c474c2d48449ef9d7144630180205

        return $.get({
            url: "http://api.apixu.com/v1/current.json?key=35c474c2d48449ef9d7144630180205&q=" + cityName
        }).then((data) => {
            newCityWeather = new CityWeatherInfo(data, this.countId)
            this.countId++;
            return newCityWeather;
        })

       
    }
}

export { weatherApi }



