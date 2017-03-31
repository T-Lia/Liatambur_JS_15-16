'use strict';

function GoogleCallback (func, data) {
    window[func](data);
}

$ (function () {


    $.ajax({
        url:
       'https://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=931360a1-2720-49e9-8dd2-8cd16dd37b42&q=PHP',
        method: 'POST',
        datatype: 'jsonp',
        success: function () {

        },
        error: function () {

        }
    });

});