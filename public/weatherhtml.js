class weatherhtml {

    renderWeatherPost(weatherPostData) {
        debugger;
        $('.weather-posts').empty();
        var source = $('#weatherpost-template').html();
        var template = Handlebars.compile(source);
        for (var i = 0; i < weatherPostData.length; i++) {
            var newHTML = template(weatherPostData[i]);
            $('.weather-posts').append(newHTML) 
            }
        }
    findCityInDom() {
        var city = $('.city-to-search').val()
        return city;
    };
    
    getCommentFromDom(addCommentButton){
        var $clickedPost = $(addCommentButton).closest('.waether-post');
        var id = $clickedPost.data().id;
        var commentText = $(addCommentButton).siblings('.comment-input').val();
    return {
        commentText: commentText,
        id: id
    }
 }
} // end of weatherhtml class
export{weatherhtml}