/**
 * Author:    Diana Yusupova
 * Created:   04.27.2022
 **/

 // sortUserName - a function that takes user input and sorts the letters
 // of their name
 function sortUserName() {
   var userName = window.prompt("...");
     console.log("userName =", userName);
     //split string to array
     var nameArray = userName.split('');
     console.log("nameArray =", nameArray);
     // sort the array
     var nameArraySort = nameArray.sort();
     console.log("nameArraySort =", nameArraySort);
     //join array back to a string
     var nameSorted = nameArraySort.join('');
     console.log("nameSorted =", nameSorted);
     return nameSorted;
 }
