
// eather class
class WweatherPost {
    constructor() {
        this.weatherPostArrey = []
        this.countId = 0;
    }

    addWeatherPost(data) {
        var cityTemp = {

            name: adfh,
            temperature: '345',
            postID: this.countId
        };
        this.weatherPostArrey.push(cityTemp);
    };

    findTemp(ciryName) {
        $.get({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=cf69dc26f9e601d3915166fccc07c500",
        }).then(console.log(data))

          .catch(function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
            })
    };

    findCityInDom() {
        var city = $('.city-to-search').val()
        return city;
    };
}// end of weather class


var neWeather = new weatherPost();

$('.search-button').click(function () {
    var cityName = neWeather.findCityInDom();
    neWeather.findTemp(cityName);

}




