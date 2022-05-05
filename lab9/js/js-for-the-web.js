/**
 * Author:    Diana Yusupova
 * Created:   05.04.2022
 * License: Public Domain
 **/

 // assigning output div to outputEl
var outputEl = document.getElementById("output");
 // create new element names new1El
var new1El = document.createElement("p");
 // change html attribute to say something new
new1El.innerHTML = "Heyo";
 // create another new element named new2El
var new2El = document.createElement("h");
 // change html attribute of new2El to say something else
new2El.innerHTML = "What's up with it";
 // append both new elements to output <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

 // change the font size
new1El.style.fontSize = "20pt";
new2El.style.dontSize = "20pt";
