
// eather class
import { weatherPost } from './weatherdata.js';
import {weatherhtml} from './weatherhtml.js';
import {weatherApi} from './weatherapi.js';

var weatherData = new weatherPost();
var weatherHtml = new weatherhtml();
var findWeather = new weatherApi();

 weatherData.weatherPosts();
weatherHtml.renderWeatherPost( weatherData.weatherPosts());

$('.search-button').click(function () {
    var cityName = weatherHtml.findCityInDom();
    findWeather.findTemp(cityName).then(function (data) {
       weatherData.addWeatherPost(data);
        weatherHtml.renderWeatherPost(weatherData.weatherPostArrey);
    })
        .catch(function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        })
});

$('.clear-posts').click(function(){
    localStorage.clear();
    weatherHtml.renderWeatherPost(weatherData.weatherPosts());
})
$('.weather-posts').on('click', '.comment-button', function () {
   var commentData =  weatherHtml.getCommentFromDom(this);
 let weatherPostData = weatherData.addWeatherComment(commentData);
 weatherHtml.renderWeatherPost(weatherPostData);
})



