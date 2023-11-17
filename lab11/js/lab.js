/* index.js - Lab 11: JavaScript Events and Form
Working on a JavaScript/jQuery script that allows users to use an input
field and outputs a modified version
Author: Leilah Hodges
Date: 16 November, 2023 */

/* allows us to sort characters alphabetically*/
function sortString(inputString) {
  return inputString.split('').sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());} ).join('');
}

$("#submit").click(function(){
  const userName = $("#user-name").val();
  //input "userName" allows us to attach the function we used in lab 7
  userNameSorted = sortUserName(userName);
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});


function sortUserName(userName){

  var words = userName.split(' ');
// Allows you to split multiple words into strings 


//Sort the word arrays independent of eachother without combining them.
//Ilia pointed us towards looking at locale compare during section
//which helped me understand how to frame my questions to ChatPT.
  var sortedWords = words.map(function (word) {
      var wordArray = word.split('');
      var sortedWord = wordArray.sort(function (a, b) {
          return a.toLowerCase().localeCompare(b.toLowerCase());
          }).join('');
      return sortedWord;
  });

  var nameSorted = sortedWords.join(' ');
  return nameSorted;
}