// index.js - Lab 9: Libraries and jQuery
// creative buttons in jQuery
// Author: Leilah Hodges
// Date: 7 November, 2023

    //hides elements when screen first loaded
    $('.special-sections').find('p').hide();

    // giving all sections the same class name allows the button to be placed in seperate divisions
    // "p" allows the function to find the paragraph writing within the specific class
    //used chatGPT to help me understand better what certain elements do and create a function template    
    $('.special-sections').append('<button>Show</button>').click(function() {
        $(this).find('p').toggle();
    });


// my jS before attempting the Bonus question

// button for the challenge section
//$(".minor-section1").append("<br><button id='Challenge'>What was our task?</button>");
   // function myFirstButton () {
        //$(".minor-section1 p" ).html("This lab wanted us to work with a lab partner to create a series of buttons that would reveal some sort of css alterations after being clicked").toggleClass("specialFirstButton")
   // };
  //  $("#Challenge").click(myFirstButton);


//button for difficulties section
//$(".minor-section2").append("<br><button id='Difficulties'>What did I struggle with?</button>");
    // click listner
    //function mySecondButton () {
        //$(".minor-section2 p" ).html("I was having a little bit of trouble during section understanding how to create a function to get some sort of action with my button but, I think it was because we hadn't covered it in lecture yet.").toggleClass("specialSecondButton")
    //};
    //$("#Difficulties").click(mySecondButton);

//button for results section
//$(".minor-section3").append("<br><button id='Results'>Here are my very cool, smart, and awesome results!</button>");
    // click listner
   //function myThirdButton () {
        //$(".minor-section3 p" ).html("I DID IT!! Here are my results! I've added some extra buttons around my site!!").toggleClass("specialThirdButton")
    //};
   // $("#Results").click(myThirdButton);
