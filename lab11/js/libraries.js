/*
 * Author:  Diana Yusupova
 * Created:   05.11.2022
 *Description:
 * Files:
 *  libraries.js -
 *  libraries.html -
 *  libraries.css -
 *
 * Licence: Public Domain
 */

// find the correct sections for the buttons
var challenge = $("#challenge");
var problems = $("#problems");
var results = $("#results");

// assign button functionality for challenge, problems, and results section
$("#cButton").click(function() {
  // if statement stating "if text length is equivalent to 0"
  if ($("#cText").length == 0) {
    challenge.append("<p id='cText'>Your Text Here...</p>");
  }
});
$("#pButton").click(function() {
  if ($("#pText").length == 0) {
    problems.append("<p id='pText'>Your Text Here...</p>");
  }
});
$("#rButton").click(function() {
  if ($("#rText").length == 0) {
    results.append("<p id='rText'>Your Text Here...</p>");
  }
});

// create new buttons
challenge.append("<button id='cButton' type='button'>Click Here To See The Challenge Section</button>");
problems.append("<button id='pButton' type='button'>Click Here To See The Problems Section</button>");
results.append("<button id='rButton' type='button'>Click Here To See The Results Section</button>");

// task x: change button colors
challenge.append("<button id='cColor' type='button'>Change Color!</button>");
problems.append("<button id='pColor' type='button'>Change Color!</button>");
results.append("<button id='rColor' type='button'>Change Color!</button>");

// assign new functions for color changing buttons
$("#cColor").click(function() {
  $("#cButton").toggleClass("cClass");
});
$("#pColor").click(function() {
  $("#pButton").toggleClass("pClass");
});
$("#rColor").click(function() {
  $("#rButton").toggleClass("rClass");
});
