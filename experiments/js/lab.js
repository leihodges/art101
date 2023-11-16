// index.js - Playing with creating prompts after button click
// Author: Leilah Hodges
// Date: 15 November, 2023

$("#my-button").click(function(){
  var name = prompt("What's your name?");
  $('#title').html('Hello ' + name);
});


