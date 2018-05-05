
class weatherPost {

    constructor() {
        debugger;
        this.weatherPostArrey;
        this.countId = 0;
        this.STORAGE_ID = 'weatherChat';
    }

    weatherPosts(){
        this.weatherPostArrey = this.getFromLocalStorage();
        return this.weatherPostArrey;
    }
    addWeatherPost(data) {
        var currentTemp = data.current.temp_c;
        var cityName = data.location.name;
        var country = data.location.country

        var cityInfo = {
            name: cityName,
            temperature: currentTemp,
            country: country,
            postId: this.countId,
            comments: []
        };
        this.weatherPostArrey.push(cityInfo);
        this.saveToLocalStorage()
        this.weatherPostArrey = this.getFromLocalStorage();
        this.countId++;
        return this.weatherPostArrey;
    };

    saveToLocalStorage(){
        localStorage.setItem(this.STORAGE_ID, JSON.stringify(this.weatherPostArrey));
      }

  getFromLocalStorage() {
        return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
  }
    addWeatherComment(commentData) {
        var comment = {
            commentText: commentData.commentText
    }
        var id = commentData.id
        for (var i = 0; i < this.weatherPostArrey.length; i ++) {
            if (id == this.weatherPostArrey[i].postId) {
                this.weatherPostArrey[i].comments.push(comment)
            }
        }
        this.saveToLocalStorage()
        this.weatherPostArrey = this.getFromLocalStorage();
        return this.weatherPostArrey;
    }

}// end of weather class

export{weatherPost}