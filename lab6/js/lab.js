// index.js - Lab 6: Arrays and Objects
// Author: Leilah Hodges
// Date: 26 October, 2023

//Define Variables
myTransport = myTransport = ["Bus"," Car"," Walking"," Plane"]

//Objects for my main ride
myMainRide = { 
    make: "Ford", 
    model: "Fusion", 
    color: "White", 
    year: 2009, 
    age: function () {
      return 2023-this.year;
    }
}

//Output
document.writeln("Kinds of transportation I use: ", myTransport, "<br>")
//allows us to write an object to the document
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
