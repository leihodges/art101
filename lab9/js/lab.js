// index.js - Lab 9: Libraries and jQuery
// Author: Leilah Hodges
// Date: 7 November, 2023

$(".minor-section1").append("<br><button id='Challenge'>What was our task?</button>");
    function myFirstButton () {
        $(".minor-section1 p" ).html("This lab wanted us to work with a lab partner to create a series of buttons that would reveal some sort of css alterations after being clicked").toggleClass("specialFirstButton")
    };
    $("#Challenge").click(myFirstButton);


$(".minor-section2").append("<br><button id='Difficulties'>What did I struggle with?</button>");
    function mySecondButton () {
        $(".minor-section2 p" ).html("I was having a little bit of trouble during section understanding how to create a function to get some sort of action with my button but, I think it was because we hadn't covered it in lecture yet.").toggleClass("specialSecondButton")
    };
    $("#Difficulties").click(mySecondButton);


$(".minor-section3").append("<br><button id='Results'>Here are my very cool, smart, and awesome results!</button>");
    function myThirdButton () {
        $(".minor-section3 p" ).html("I DID IT!! Here are my results! I've added some extra buttons around my site!!").toggleClass("specialThirdButton")
    };
    $("#Results").click(myThirdButton);

