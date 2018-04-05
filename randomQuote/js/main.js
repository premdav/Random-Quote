$(document).ready(function () {
    $(".btnQuote").click(function () {
        // Calling the random quote API and displaying it in the box
        $.ajax({
           url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
            dataType: 'json',
            success: function (data) {
               var post = data.shift(); // data is in array of posts. this grabs the first one
                $(".insertQuote").html(post.content);
                $(".insertAuthor").html(post.title);
            },
            cache: false
        });
    });
});