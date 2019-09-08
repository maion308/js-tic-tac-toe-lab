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
let count = 1;
const winner = "player"

function playGame(){

    function startGame(){
squares.forEach((item)=>{
    item.addEventListener('click', ()=>{
        let turn = (count % 2 === 0) ? "X":"O";
        item.innerHTML = turn;
        checkWinner();
        count++;
    })
})

    }
// while(count <= squares.length - 1){
//     let turn = (count % 2 === 0) ? "X":"O";
//     item.innerHTML = turn;
//     count++;
// }


// check for winners using switch cases for ever possible win variation
// using alert just for testing purposes and will replace with return later

function checkWinner(){
switch(true){
    case (square1.innerHTML !== "" && square1.innerHTML === 
            square2.innerHTML && square1.innerHTML === square3.innerHTML):
    alert(`Game Over: ${winner} wins`);
    break;
    case (square1.innerHTML !== "" && square1.innerHTML ===
            square4.innerHTML && square1.innerHTML === square7.innerHTML):
            alert(`Game Over: ${winner} wins`);
    break;
    case (square2.innerHTML !== "" && square2.innerHTML ===
    square5.innerHTML && square2.innerHTML === square8.innerHTML):
    alert(`Game Over: ${winner} wins`);
    break;
    case (square3.innerHTML !== "" && square3.innerHTML ===
    square6.innerHTML && square3.innerHTML === square9.innerHTML):
    alert(`Game Over: ${winner} wins`);
    break;
    case (square4.innerHTML !== "" && square4.innerHTML ===
    square5.innerHTML && square4.innerHTML === square6.innerHTML):
    alert(`Game Over: ${winner} wins`);
    break;
    case (square7.innerHTML !== "" && square7.innerHTML ===
    square8.innerHTML && square7.innerHTML === square9.innerHTML):
    alert(`Game Over: ${winner} wins`);
    break;
    case (square1.innerHTML !== "" && square1.innerHTML ===
    square5.innerHTML && square1.innerHTML === square9.innerHTML):
    alert(`Game Over: ${winner} wins`);
    break;
    case (square3.innerHTML !== "" && square3.innerHTML ===
    square5.innerHTML && square3.innerHTML === square7.innerHTML):
    alert(`Game Over: ${winner} wins`);
    break;
    default:
    console.log("keep paying");
    break;
}
}


startGame();
}

playGame();
