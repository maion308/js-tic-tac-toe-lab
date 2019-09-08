function playGame(){
const btn = document.querySelector('button');
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
let play = document.querySelector('#turn');
let count = 1;
p1 = document.querySelector('#p1Score');
p2 = document.querySelector('#p2Score');
x_count = 0;
o_count = 0;



squares.innerHTML = ""


    function startGame(){
squares.forEach((item)=>{
    item.addEventListener('click', ()=>{
        if(item.innerHTML !== "X" && item.innerHTML != "O"){
        let turn = (count % 2 === 0) ? "X":"O";
        item.innerHTML = turn;
        checkWinner();
        count++;
        play.innerHTML = (turn === "X") ? "It's O'x turn" : "It's X'x turn";
        }    
    
    })

})
    }

// check for winners using switch cases for ever possible win variation
// using alert just for testing purposes and will replace with return later

function checkWinner(){
switch(true){
    case (square1.innerHTML !== "" && square1.innerHTML === 
            square2.innerHTML && square1.innerHTML === square3.innerHTML):
    gameWinner(square1, square2, square3);
    callWinner(square1, square2, square3);
    playGame();
    // location.reload();
    break;
    case (square1.innerHTML !== "" && square1.innerHTML ===
            square4.innerHTML && square1.innerHTML === square7.innerHTML):
            gameWinner(square1, square4, square7);
            callWinner(square1, square4, square7);
            // location.reload();

    break;
    case (square2.innerHTML !== "" && square2.innerHTML ===
    square5.innerHTML && square2.innerHTML === square8.innerHTML):
    gameWinner(square2, square5, square8);
    callWinner(square2, square5, square8);
    playAgain();
    // location.reload();

    break;
    case (square3.innerHTML !== "" && square3.innerHTML ===
    square6.innerHTML && square3.innerHTML === square9.innerHTML):
    gameWinner(square3, square6, square9);
    callWinner(square3, square6, square9);
    playAgain();
    // location.reload();

    break;
    case (square4.innerHTML !== "" && square4.innerHTML ===
    square5.innerHTML && square4.innerHTML === square6.innerHTML):
    gameWinner(square4, square5, square6);
    callWinner(square4, square5, square6);
    playAgain();
    // location.reload();

    break;
    case (square7.innerHTML !== "" && square7.innerHTML ===
    square8.innerHTML && square7.innerHTML === square9.innerHTML):
    gameWinner(square7, square8, square9);
    callWinner(square7, square8, square9);
    playAgain()
    // location.reload();

    break;
    case (square1.innerHTML !== "" && square1.innerHTML ===
    square5.innerHTML && square1.innerHTML === square9.innerHTML):
    gameWinner(square1, square5, square9);
    callWinner(square1, square5, square9);
    // location.reload();

    break;
    case (square3.innerHTML !== "" && square3.innerHTML ===
    square5.innerHTML && square3.innerHTML === square7.innerHTML):
    gameWinner(square3, square5, square7);
    callWinner(square3, square5, square7);
    // location.reload();

    break;
    default:
    playGame();
    break;
}

function gameWinner(sq1, sq2, sq3){
    sq1.className = "gameWinner";
    sq2.className = "gameWinner";
    sq3.className = "gameWinner";
}

function callWinner(sq1,sq2,sq3){
    if(sq1.innerHTML === "X"){
        alert("Game Winner: Player X");
        x_count+=1;
        p1.innerHTML = x_count;
        return x_count;
    }
    else if(sq1.innerHTML === "O"){
        alert("Game Winner: Player O");
        o_count+=1
        p2.innerHTML = o_count;
        return o_count;
    }
    else{
        alert("Draw");
    }
}

btn.addEventListener('click', playAgain);

function playAgain(){

squares.forEach((item)=>{
    btn.addEventListener('click', ()=>{
        item.innerHTML = "";
        item.classList.remove('gameWinner');
        item.classList.add("square");
    })
})
}

}

startGame();
}

playGame();
