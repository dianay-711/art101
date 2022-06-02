/*
 * Author:  Diana Yusupova
 * Created:   05.18.2022
 * Licence: Public Domain
 */

function fizzbuzzboom() {
  // loop through numbers 1-200
  var out = "";
  for (i=1; i <= 200; i++) {
    // if number is mult. of more than 1, 3, 5, or 7, combine fizz, buzz, and boom
    if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0){
      console.log("FizzBuzzBoom");
      out += i + " - FizzBuzzBoom!<br>";
    }
    else if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz!");
      out += i + " - FizzBuzz!<br>";
    }
    // combine 5 and 7
    else if (i % 7 == 0 && i % 5 == 0) {
      console.log("BuzzBoom!");
      out += i + " - BuzzBoom!<br>";
    }
    // combine 3 and 7
    else if (i % 7 == 0 && i % 3 == 0) {
      console.log("FizzBoom!");
      out += i + " - FizzBoom!<br>";
    }
    // if the number is a multiple of 3 print "Fizz!"
    else if (i % 3 == 0) {
      console.log("Fizz!");
      out += i + " - Fizz!<br>";
    }
    // if the number is a multiple of 5 print "Buzz!"
    else if (i % 5 == 0) {
      console.log("Buzz!");
      out += i + " - Buzz!<br>";
    }
    // if the number is a multiple of 7 print "Boom!"
    else if (i % 7 == 0) {
      console.log("Boom!");
      out += i + " - Boom!<br>";
    }
    else {
      console.log(i);
      out += i + "<br>";
    }
  }
    return out;
}

var output = fizzbuzzboom();
fizzbuzzboom = output;
document.getElementById("output").innerHTML = fizzbuzzboom;
