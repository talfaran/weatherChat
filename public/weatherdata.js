
class weatherPost {
    constructor() {

        this.STORAGE_ID = 'weatherChat';
        this.weatherPostArrey = this.getFromLocalStorage();
    }

    removeWeatherPosts(){
        localStorage.removeItem(this.STORAGE_ID)
        this.weatherPostArrey = this.getFromLocalStorage();
    }
    addWeatherPost(cityInfo) {
       
        this.weatherPostArrey.push(cityInfo);
        this.saveToLocalStorage()
        this.weatherPostArrey = this.getFromLocalStorage();
        this.countId++;
    };

    saveToLocalStorage() {
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
        for (var i = 0; i < this.weatherPostArrey.length; i++) {
            if (id == this.weatherPostArrey[i].postId) {
                this.weatherPostArrey[i].comments.push(comment)
            }
        }
        this.saveToLocalStorage()
        this.weatherPostArrey = this.getFromLocalStorage();
    }

}  // end of weather class

export { weatherPost }