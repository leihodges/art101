// index.js - Lab 7: Functions
// Author: Leilah Hodges
// Date: 31 October, 2023


// Base of code from Wes Modes' site
// I got stuck trying to figure when to create new variables but found 
// ChatGPT helpful for that.
function sortUserName(){
    var userName = window.prompt ("Hello. What's your name?");
    console.log("userName =", userName); 

    var words = userName.split(' ');
    console.log("words =", words);
// Allows you to split multiple words into strings 


//Sorth the word arrays independent of eachother without combining them.
//Ilia pointed us towards looking at locale compare during section
//which helped me understand how to frame my questions to ChatPT.
    var sortedWords = words.map(function (word) {
        var wordArray = word.split('');
        var sortedWord = wordArray.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }).join('');
        
        return sortedWord;
    });
    console.log("sortedWords =", sortedWords);

    var nameSorted = sortedWords.join(' ');
    console.log("nameSorted =", nameSorted);

    return nameSorted;
}

    //final output
    document.writeln("Here's your new name:",
        sortUserName(), "</br>");