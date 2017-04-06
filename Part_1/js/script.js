'use strict';

function getText() {
    var inputText = $('.search-form_input');
    return inputText[0].value;
}

function runSearch () {

    $('.post').remove();

    var searchText = getText();
    var url = 'http://webhose.io/search?token=931360a1-2720-49e9-8dd2-8cd16dd37b42&format=json&q=' + searchText + '%20language%3A(english)';

    $.ajax({
        url: url,
        method: 'POST',
        success: function (serverResponse) {

            var resultWrapper = $('.showResult');

            for (var i = 0; i < serverResponse.posts.length; i++) {

                var post = serverResponse.posts[i];

                var $post = $('<div>').addClass('post');
                var $title = $('<a>')
                    .addClass('post_title')
                    .attr('href', post.url)
                    .text(post.title || post.text.substring(0, post.text.indexOf('.')));
                var $url = $('<p>')
                    .addClass('post_url')
                    .text(post.url.substring(0, 70));
                var $text = $('<p>')
                    .addClass('post_text')
                    .text(post.text.substring(0, post.text.indexOf('.', 200)));
                $post.append($title).append($url).append($text);
                resultWrapper.append($post);
            }
        },
        error: function () {

        }
    });
}

$ (function () {

    var $clickButton = $('.search-form_button');
    var $input = $('.search-form_input');
    $clickButton.on('click', runSearch);
    $input.on('keypress', function (event) {
        if (event.keyCode === 13)
            runSearch();
    });
});