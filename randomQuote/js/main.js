$(document).ready(function () {
    // setting global variables
    let clickCount = 0;
    let myColors = ['42f4ce', '8ca5ce', 'de93e2', 'e293a5', 'e2b193', 'dbe293', '93e296' ];
    // Loading random quote in as initial text
    $.ajax({
        url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        dataType: 'json',
        success: function (data) {
            let post = data.shift(); // data is in array of posts. this grabs the first one
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
               let post = data.shift(); // data is in array of posts. this grabs the first one
                $(".insertQuote").html(post.content);
                $(".insertAuthor").html(post.title);
            },
            cache: false
        });

        // Changing to random background color on click

        $('body').css("background-color", "#"+myColors[clickCount]);
        clickCount += 1;
        if(clickCount === myColors.length) {
            clickCount = 0;
        }
    });

    // tweeting the quote
    $(".btnTweet").click(function() {
        let myQuote = encodeURIComponent($(".insertQuote").text());
        let myAuthor = encodeURIComponent($(".insertAuthor").text());
        $(".tweet").attr("href", 'https://twitter.com/intent/tweet?text=' + myQuote + ' --' + myAuthor);
    });

});