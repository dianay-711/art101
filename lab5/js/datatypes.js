/*
 * Author:  Diana Yusupova
 * Created:   05.11.2022
 *Description:
 * Files:
 *  datatypes.js -
 *  datatypes.html -
 *  datatypes.css -
 *
 * Licence: Public Domain
 */

// Define Variables
var make = "BMW";
var model = "330 ci";
var color = "grey";
var year = "2005";
var currentYear = 2022;

// Calculate the age of my car
var age = currentYear - year;

// output
document.writeln("Make: " + make + "<br>");
document.writeln("Model: " + model + "<br>");
document.writeln("Color: " + color + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Age: " + age + "<br>");
