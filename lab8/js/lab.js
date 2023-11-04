// index.js - Lab 8: Anon Functions and Callbacks
// Author: Leilah Hodges
// Date: 2 November, 2023

function add(x){
    return x + 100;
}

console.log("What's 1 + 100?", add(1));
console.log("What's 85 + 100?", add(85));

numberArray = [ 1, 2, 5, 37, 52, 85, 99, 149]
console.log("My array", numberArray);

var result = numberArray.map(add);
console.log("Testing simple equation", result);
// when using array.map -- the array name and array name in "array.map" MUST MATCH!!//
var result = numberArray.map(function(x){
    return x + 100;
})

console.log("Adding one hundred to a number of my array:", result);