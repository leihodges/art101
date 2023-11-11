// index.js - Lab 9: Libraries and jQuery
// creative buttons in jQuery
// Author: Leilah Hodges
// Date: 7 November, 2023




    ///////////////////

    $('.special-sections').append('<button>Show</button>').click(function() {
        $(this).find('p').toggle();
    });