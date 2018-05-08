import { weatherPost } from './weatherdata.js';
import { weatherhtml } from './weatherhtml.js';
import { weatherApi } from './weatherapi.js';

class weatherController {

    constructor() {
        this.weatherData = new weatherPost();
        this.weatherHtml = new weatherhtml();
        this.weatherApi = new weatherApi();
    }


    startWeatherChat() {

        this.weatherHtml.renderWeatherPost(this.weatherData.weatherPostArrey)

        $('.search-button').click(async () => {
            let cityName = this.weatherHtml.findCityInDom();
            let data = await this.weatherApi.findTemp(cityName)
            console.log(data)
            this.weatherData.addWeatherPost(data);
            console.log(data)
            this.weatherHtml.renderWeatherPost(this.weatherData.weatherPostArrey);
            //     }).catch(function (jqXHR, textStatus, errorThrown) {
            //         console.log(textStatus);

            // })
        })

        $('.clear-posts').click(() => {
            this.weatherData.removeWeatherPosts();
            this.weatherHtml.renderWeatherPost(this.weatherData.weatherPostArrey)
        })

        $('.weather-posts').on('click', '.comment-button', () => {
            let commentData = this.weatherHtml.getCommentFromDom(this);
            this.weatherData.addWeatherComment(commentData);
            this.weatherHtml.renderWeatherPost(this.weatherData.weatherPostArrey);
        })

    }
}

var weatherChat = new weatherController();
weatherChat.startWeatherChat();






