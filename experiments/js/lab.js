// index.js - Playing with creating prompts after button click
// Author: Leilah Hodges
// Date: 15 November, 2023

$("#input-button").click(function(){
  // creating a variable to find your name and then using a value method
  var name = $("#input").val();
  //allows you to place name info into the title
  $('#title').html('Hello ' + name);
});


