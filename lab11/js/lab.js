/* index.js - Lab 11: JavaScript Events and Form
Working on a JavaScript/jQuery script that allows users to use an input
field and outputs a modified version
Author: Leilah Hodges
Date: 16 November, 2023 */

/* allows us to sort characters alphabetically
function sortString(inputString) {
  return inputString.split('').sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());} ).join('');
}
*/


/* Made a function attaching a Stars Wars character to user's name with assistance from ChatGPT*/
function getRandomStarWarsCharacter(userName) {
  // Array of Star Wars characters
  var starWarsCharacters = [
      /*individual classes needed to change character colors in CSS */
      {name: "Luke Skywalker", class: "luke" },
      {name: "Darth Vader", class: "vader"},
      {name: "Princess Leia", class: "leia"},
      {name: "Han Solo", class: "solo"},
      {name: "Obi-Wan Kenobi", class: "kenobi"},
      {name: "Yoda", class: "yoda"},
      {name: "R2-D2", class: "rtwo"},
      {name: "C-3PO", class: "cthree"},
      {name: "Chewbacca", class: "chewbacca"},
      {name: "Emperor Palpatine", class: "palpatine"},
      {name: "Boba Fett", class: "boba"},
      {name: "Rey", class: "rey"},
      {name: "Finn", class: "finn"},
      {name: "Kylo Ren", class: "kylo"},
      {name: "Mandalorian", class: "mandalorian"},
      {name: "Ahsoka", class: "ahsoka"},
  ];

  // Generate a random index to assign input with a value for randomized character
  var randomIndex = Math.floor(Math.random() * starWarsCharacters.length);

  // Get a random Star Wars character
  var randomCharacter = starWarsCharacters[randomIndex];
  // message prompted with new information
  var message = "Hello, " + userName + "! Your Star Wars Identity is, <span class='" + randomCharacter.class + "'>" + randomCharacter.name + "</span>"+"." + " May the Force be with you!";
  return message;
}

$("#submit").click(function(){
  const userName = $("#user-name").val();
  var userNameSorted = $("#user-name").val();
  var randomCharacterMessage = getRandomStarWarsCharacter(userNameSorted);
  $("#output").html('<div class="text"><p>' + randomCharacterMessage + '</p></div>');
});