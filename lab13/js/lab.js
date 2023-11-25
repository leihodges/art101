/* index.js - Lab 13: Loops
Working with different types of Loops
Author: Leilah Hodges
Date: 27 November, 2023 */


function fizzBuzzBoom() {
    for (let i = 1; i <= 200; i++) {
        let output = "";

        if (i % 3 === 0) {
            output += "Snap";
        }

        if (i % 5 === 0) {
            output += "Crackle";  
        }

        if (i % 7 === 0) {
            output += "Pop"; 
        }

        // this is for multiples of 3, 5, 7 (Defintion from ChatGPT)
        if (output === "") {
            output = i;
        }

        // necessary for CSS editing (help from ChatGPT)
        let cssClass = getCssClass(output);

        // Append the paragraph with the appropriate CSS class
        $("#output").append(`<p class="${cssClass}">${i} ${output}</p>`);
    }
}

//assistance from ChatGPT
function getCssClass(output) {
    switch (output) {
        case "Snap":
            return "highlight-snap";
        case "Crackle":
            return "highlight-crackle";
        case "Pop":
            return "highlight-pop";
        case "SnapCrackle":
            return "highlight-snapcrackle";
        case "CracklePop":
            return "highlight-cracklepop";
        case "SnapCracklePop":
            return "highlight-snapcracklepop";
        default:
            return "";
    }
}

fizzBuzzBoom();
