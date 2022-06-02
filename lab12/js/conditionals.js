/*
 * Author:  Diana Yusupova
 * Created:   05.16.2022
 * Licence: Public Domain
 */


//function sortingHat
//return Gryffindor, Ravenclaw, Slytherin, Hufflepuff
//depending on length mod 4


function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor"
  }
  else if (mod == 1) {
    return "Ravenclaw"
  }
  else if (mod == 2) {
    return "Slytherin"
  }
  else if (mod == 3) {
    return "Hufflepuff"
  }
}

// using an array to sort houses
// make mod the index
// const Houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
// mod = Houses % 4;
// let gryf = Houses[mod == 0]
// let raven  = Houses[mod == 1]
// let slyth = Houses[mod == 2]
// let huffle = Houses[mod == 3]

var button = document.getElementById("button");
button.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p> The Sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})
