class CityWeatherInfo {
 
    constructor(data, countId) {
        this.currentTemp = data.current.temp_c;
        this.cityName = data.location.name;
        this.country = data.location.country;
        this.countId = countId;
        this.comments = [];
    }
}
export{CityWeatherInfo}
