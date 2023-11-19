/* index.js - Lab 12: Conditionals

Author: Leilah Hodges
Date: 20 November, 2023 */

// Gorillaz Band characters and description courtesy of  

//also using simialar solution I used in lab 11 and additional assistance from ChatGPT

var gorillazCharacters = [
  {
    name: "Murdoc Niccals", 
    class: "murdoc",
    text: "The official bass player, self-proclaimed leader and founder of Gorillaz.",
    subText: "(images courtesy of Gorillaz)",
    image: "img/murdoc.jpg",
    spotifyCode: "https://open.spotify.com/embed/playlist/5KQ3fcbTAKW4MtxrskciKd?utm_source=generator",
  },

  {
    name: "Noodle", 
    class: "noodle",
    text: "The official guitarist and former occasional backing vocalist of Gorillaz.",
    subText: "(images courtesy of Gorillaz)",
    image: "img/noodle.jpg",
    spotifyCode: "https://open.spotify.com/embed/playlist/41iwYTCgRdnsrXzyTCYLG0?utm_source=generator",
  },
  {
    name: "Russel Hobbs", 
    class: "russel",
    text: "The official drummer and percussionist of Gorillaz.",
    subText: "(images courtesy of Gorillaz)",
    image: "img/russel.jpg",
    spotifyCode: "https://open.spotify.com/embed/playlist/6XoLUtZ7rZEuN31ndopmwm?utm_source=generator",
  },
  {
    name: "2-D", 
    class: "twod",
    text: "The lead vocalist, keyboardist and frontman of Gorillaz.",
    subText: "(images courtesy of Gorillaz)",
    image: "img/2d.jpg",
    spotifyCode: "https://open.spotify.com/embed/playlist/5M7dIqpVGf90R5PbbTsnSI?utm_source=generator",
  },
]

function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
      return gorillazCharacters[0];
  } else if (mod == 1) {
      return gorillazCharacters[1];
  } else if (mod == 2) {
      return gorillazCharacters[2];
  } else if (mod == 3) {
      return gorillazCharacters[3];
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name  = document.getElementById("input").value;
    var character = sortingHat(name);

    // Debugging: Log image path to the console
    console.log("Image path:", character.image);

    var outputContainer = document.getElementById("output");
    outputContainer.innerHTML = ""; // Clear previous content

    var characterContainer = document.createElement("div");
    //The classList is a property of DOM elements that represents a live collection of all the classes attributed to an element
    //The classList.add(className) method is used to add a class to the element's list of classes.
    characterContainer.classList.add(character.class);

    var newText = "<p> The music has spoken " + name + "! " + "You are <span class='" + character.class + "-name'>" + character.name + ".</span></p>";
    // ^ allows us to change the css of just name of the character -- by creating a class for just that word
    newText += "<p>" + character.text + "</p>";
    newText += "<p>" + character.subText + "</p>";
    newText += "<img src='" + character.image + "' alt='" + character.name + "'>";
    newText += "<iframe style='border-radius: 12px' src='" + character.spotifyCode + "' width='100%' height='152' frameBorder='0' allowfullscreen loading='lazy'></iframe>";

    characterContainer.innerHTML = newText;
    outputContainer.appendChild(characterContainer);
});