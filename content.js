function getPage(callback, url){
    $.ajax({
        url: url,
        success: callback
    });
}

function addMovieRating (element, url) {
    getPage(function(data){
        var response = data.toString();
        var firstIndex = response.indexOf("data-rate=") + 11;
        var rating = parseFloat(response.substring(firstIndex, firstIndex + 5)).toFixed(1);
        var reg = /[0-9][.][0-9]/;
        if(reg.test(rating)) {
            $( "<p style=\"display:inline-block; margin-right:5px;\">\(<span style=\"font-weight: bold\">" + rating + "</span>)</p>" ).insertBefore(element);
        }
        else {
            $( "<p style=\"display:inline-block; margin-right:5px;\">\(<span style=\"font-weight: bold\">n/a</span>)</p>" ).insertBefore(element);
        }
    }, url);
}

$("td.ft a.s-16").each(function(){
    addMovieRating(this, 'https://www.filmweb.pl' + $(this).attr('href'));
});