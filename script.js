const square1 = document.querySelector("#square1");
const square2 = document.querySelector("#square2");
const square3 = document.querySelector("#square3");
const square4 = document.querySelector("#square4");
const square5 = document.querySelector("#square5");
const square6 = document.querySelector("#square6");
const square7 = document.querySelector("#square7");
const square8 = document.querySelector("#square8");
const square9 = document.querySelector("#square9");

const squares = document.querySelectorAll('.square');
console.log(squares)


// check for winners using switch cases for ever possible win variation
// using alert just for testing purposes and will replace with return later
switch(true){
    case (square1.innerHTML !== "" && square1.innerHTML === 
            square2.innerHTML && square1.innerHTML === square3.innerHTML):
    alert("winner case 1");
    break;
    case (square1.innerHTML !== "" && square1.innerHTML ===
            square4.innerHTML && square1.innerHTML === square7.innerHTML):
    alert("winner case 2");
    break;
    case (square2.innerHTML !== "" && square2.innerHTML ===
    square5.innerHTML && square2.innerHTML === square8.innerHTML):
    alert("winner case 3");
    break;
    case (square3.innerHTML !== "" && square3.innerHTML ===
    square6.innerHTML && square3.innerHTML === square9.innerHTML):
    alert("winner case 4");
    break;
    case (square4.innerHTML !== "" && square4.innerHTML ===
    square5.innerHTML && square4.innerHTML === square6.innerHTML):
    alert("winner case 5");
    break;
    case (square7.innerHTML !== "" && square7.innerHTML ===
    square8.innerHTML && square7.innerHTML === square9.innerHTML):
    alert("winner case 6");
    break;
    case (square1.innerHTML !== "" && square1.innerHTML ===
    square5.innerHTML && square1.innerHTML === square9.innerHTML):
    alert("winner case 7");
    break;
    case (square3.innerHTML !== "" && square3.innerHTML ===
    square5.innerHTML && square3.innerHTML === square7.innerHTML):
    alert("winner case 7");
    break;
    default:
    alert("keep paying");
    break;
}

