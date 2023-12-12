// previous comic
$('#prev').click(function(){
    $.ajax({
        url: "https://xkcd.com/"+ comic +"/info.0.json",
        type: "GET",
        dataType: "json",
        success: function(data) {

            console.log("Previous Comic:", data);

            // Update the DOM with API information
            $('#comicTitle').text(data.title);
            $('#comicImage').attr('src', data.img);
            $('#comicAlt').text(data.alt);

            // Show the comic container
            $('#comicContainer').show();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    });
});

// comic i chose
var comic;
var recent;

$('#find').click(function(){
    $.ajax({
        url: "https://xkcd.com/889/info.0.json",
        type: "GET",
        dataType: "json",
        success: function(data) {

            // for previous comic
            comic = data.num - 1;
            // for next comic
            recent = data.num + 1;

            console.log("API Data:", data);

            // Update the DOM with API information
            $('#comicTitle').text(data.title);
            $('#comicImage').attr('src', data.img);
            $('#comicAlt').text(data.alt);

            // Show the comic container
            $('#comicContainer').show();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    });
});

// comic after
$('#next').click(function(){
    $.ajax({
        url: "https://xkcd.com/"+ recent +"/info.0.json", 
        type: "GET",
        dataType: "json",
        success: function(data) {

            console.log("Next Comic:", data);

            // Update the DOM with API information
            $('#comicTitle').text(data.title);
            $('#comicImage').attr('src', data.img);
            $('#comicAlt').text(data.alt);

            // Show the comic container
            $('#comicContainer').show();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    });
});
