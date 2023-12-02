// index.js - Playing with creating prompts after button click
// Author: Leilah Hodges
// Date: 15 November, 2023

$("#input-button").click(function(){
  // creating a variable to find your name and then using a value method
  var name = $("#input").val();
  //allows you to place name info into the title
  $('#title').html('Hello ' + name);
});










// //API code formula provided by Wes
// $('#action').click(function(){
//   // get data via ajax from numbersapi
//   // Using the core $.ajax() method
//   $.ajax({
//       // The URL for the request (ENDPOINT)
//       url: "https://api.spoonacular.com/recipes/search?diet=vegetarian&maxReadyTime=30&apiKey=de9c6f3e61cc477d97e79d9dc9614ed8",
//       // Whether this is a POST or GET request
//       type: "GET",
//       // The type of data we expect back
//       dataType : "json",
//   })
//   // If the request succeeds
//   .done(function(data) {
//       console.log(data);
//   })

// });
