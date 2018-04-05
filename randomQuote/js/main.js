$(document).ready(function () {
    // setting global variables
    let clickCount = 0;
    // Loading random quote in as initial text
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

        // Changing to random background color on click
        let myColors = ['42f4ce', '8ca5ce', 'de93e2', 'e293a5', 'e2b193', 'dbe293', '93e296' ];
        $('body').css("background-color", "#"+myColors[clickCount]);
        clickCount += 1;
        if(clickCount === myColors.length) {
            clickCount = 0;
        }
    });
});