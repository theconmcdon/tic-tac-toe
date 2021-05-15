//Take a moment to set the respect variable to the
//appropriate amount for the tic tac toes that didn't make it

let respect = 100 
function respectPaid(){
    for (j = 0; j < respect; j++){
        let respects = 'F'
        console.log(respects)
    }
}
respectPaid();

/* SOME VARIABLES AND STUFF */

let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;
let g = 0;
let h = 0;
let i = 0;

let cells = document.querySelectorAll('.box');

let count = 1

let playerX = 'Player X'
let playerO = 'Player O'
let whoWon = document.getElementById('winner');
whoWon.style.visibility = 'hidden'

/* THE big LOOP */

for (loop = 0; loop < cells.length; loop++) {
    cells[loop].addEventListener('click', cellActive)
}

/* FUNCTIONS - listed in general flow order */

//switches between X's and O's every time click count is increased by 1
function cellActive() {
    if (count % 2 > 0) {
        event.target.textContent = 'X';
    } else {
        event.target.textContent = 'O';
    }
    winnerCheckAlpha();
}

//checks each cell every click for an X or O and assigns it a numerical value of 1 or -1 respectively
function winnerCheckAlpha() {
    if (cells[0].textContent == 'X') {
        a = 1
        cells[0].removeEventListener('click', cellActive)
    }
    if (cells[0].textContent == 'O') {
        a = -1
        cells[0].removeEventListener('click', cellActive)
    }
    if (cells[1].textContent == 'X') {
        b = 1
        cells[1].removeEventListener('click', cellActive)
    }
    if (cells[1].textContent == 'O') {
        b = -1
        cells[1].removeEventListener('click', cellActive)
    }
    if (cells[2].textContent == 'X') {
        c = 1
        cells[2].removeEventListener('click', cellActive)
    }
    if (cells[2].textContent == 'O') {
        c = -1
        cells[2].removeEventListener('click', cellActive)
    }
    if (cells[3].textContent == 'X') {
        d = 1
        cells[3].removeEventListener('click', cellActive)
    }
    if (cells[3].textContent == 'O') {
        d = -1
        cells[3].removeEventListener('click', cellActive)
    }
    if (cells[4].textContent == 'X') {
        e = 1
        cells[4].removeEventListener('click', cellActive)
    }
    if (cells[4].textContent == 'O') {
        e = -1
        cells[4].removeEventListener('click', cellActive)
    }
    if (cells[5].textContent == 'X') {
        f = 1
        cells[5].removeEventListener('click', cellActive)
    }
    if (cells[5].textContent == 'O') {
        f = -1
        cells[5].removeEventListener('click', cellActive)
    }
    if (cells[6].textContent == 'X') {
        g = 1
        cells[6].removeEventListener('click', cellActive)
    }
    if (cells[6].textContent == 'O') {
        g = -1
        cells[6].removeEventListener('click', cellActive)
    }
    if (cells[7].textContent == 'X') {
        h = 1
        cells[7].removeEventListener('click', cellActive)
    }
    if (cells[7].textContent == 'O') {
        h = -1
        cells[7].removeEventListener('click', cellActive)
    }
    if (cells[8].textContent == 'X') {
        i = 1
        cells[8].removeEventListener('click', cellActive)
    }
    if (cells[8].textContent == 'O') {
        i = -1
        cells[8].removeEventListener('click', cellActive)
    }
    count += 1;
    winnerCheckBeta();
}

//declares a winner on any move besides move 9 and kills current game by assessing the
//current number values of each possible win scenario until one equals 3 or -3
function winnerCheckBeta() {
    if ((a + b + c) == 3) {
        setTimeout(function winnerCheckBeta() {
            theNovelCoronavirus();
            whoWon.textContent = playerX + ' wins!';
            whoWon.style.visibility = 'visible';
        }, 100)
    }
    if ((a + b + c) == -3) {
        setTimeout(function winnerCheckBeta() {
            theNovelCoronavirus();
            whoWon.textContent = playerO + ' wins!';
            whoWon.style.visibility = 'visible';
        }, 100)
    }
    if ((d + e + f) == 3) {
        setTimeout(function winnerCheckBeta() {
            theNovelCoronavirus();
            whoWon.textContent = playerX + ' wins!';
            whoWon.style.visibility = 'visible';
        }, 100)
    }
    if ((d + e + f) == -3) {
        setTimeout(function winnerCheckBeta() {
            theNovelCoronavirus();
            whoWon.textContent = playerO + ' wins!';
            whoWon.style.visibility = 'visible';
        }, 100)
    }
    if ((g + h + i) == 3) {
        setTimeout(function winnerCheckBeta() {
            theNovelCoronavirus();
            whoWon.textContent = playerX + ' wins!';
            whoWon.style.visibility = 'visible';
        }, 100)
    }
    if ((g + h + i) == -3) {
        setTimeout(function winnerCheckBeta() {
            theNovelCoronavirus();
            whoWon.textContent = playerO + ' wins!';
            whoWon.style.visibility = 'visible';
        }, 100)
    }
    if ((a + d + g) == 3) {
        setTimeout(function winnerCheckBeta() {
            theNovelCoronavirus();
            whoWon.textContent = playerX + ' wins!';
            whoWon.style.visibility = 'visible';
        }, 100)
    }
    if ((a + d + g) == -3) {
        setTimeout(function winnerCheckBeta() {
            theNovelCoronavirus();
            whoWon.textContent = playerO + ' wins!';
            whoWon.style.visibility = 'visible';
        }, 100)
    }
    if ((b + e + h) == 3) {
        setTimeout(function winnerCheckBeta() {
            theNovelCoronavirus();
            whoWon.textContent = playerX + ' wins!';
            whoWon.style.visibility = 'visible';
        }, 100)
    }
    if ((b + e + h) == -3) {
        setTimeout(function winnerCheckBeta() {
            theNovelCoronavirus();
            whoWon.textContent = playerO + ' wins!';
            whoWon.style.visibility = 'visible';
        }, 100)
    }
    if ((c + f + i) == 3) {
        setTimeout(function winnerCheckBeta() {
            theNovelCoronavirus();
            whoWon.textContent = playerX + ' wins!';
            whoWon.style.visibility = 'visible';
        }, 100)
    }
    if ((c + f + i) == -3) {
        setTimeout(function winnerCheckBeta() {
            theNovelCoronavirus();
            whoWon.textContent = playerO + ' wins!';
            whoWon.style.visibility = 'visible';
        }, 100)
    }
    if ((a + e + i) == 3) {
        setTimeout(function winnerCheckBeta() {
            theNovelCoronavirus();
            whoWon.textContent = playerX + ' wins!';
            whoWon.style.visibility = 'visible';
        }, 100)
    }
    if ((a + e + i) == -3) {
        setTimeout(function winnerCheckBeta() {
            theNovelCoronavirus();
            whoWon.textContent = playerO + ' wins!';
            whoWon.style.visibility = 'visible';
        }, 100)
    }
    if ((c + e + g) == 3) {
        setTimeout(function winnerCheckBeta() {
            theNovelCoronavirus();
            whoWon.textContent = playerX + ' wins!';
            whoWon.style.visibility = 'visible';
        }, 100)
    }
    if ((c + e + g) == -3) {
        setTimeout(function winnerCheckBeta() {
            theNovelCoronavirus();
            whoWon.textContent = playerO + ' wins!';
            whoWon.style.visibility = 'visible';
        }, 100)
    } 
    winnerCheckGamma();
}

//checks to declare a winner yet again in the scenario that the winner is declared on last possible turn
//of the game, if no winner is declared and all squares are assigned a value, total value will be 1
//which triggers the draw scenario
function winnerCheckGamma() {
    if ((a + b + c) == 3 || (a + b + c) == -3 || (d + e + f) == 3 || (d + e + f) == -3 || (g + h + i) == 3 || (g + h + i) == -3 || (a + d + g) == 3 || (a + d + g) == -3 || (b + e + h) == 3 || (b + e + h) == -3 || (c + f + i) == 3 || (c + f + i) == -3 || (a + e + i) == 3 || (a + e + i) == -3 || (c + e + g) == 3 || (c + e + g) == -3){
        theNovelCoronavirus();
    }
    if ((a + b + c + d + e + f + g + h + i) == 1 && a !== 0 && b !== 0 && c !== 0 && d !== 0 && e !== 0 && f !== 0 && g !== 0 && h !== 0 && i !== 0) {
        setTimeout(function winnerCheckGamma() {
            theNovelCoronavirus();
            whoWon.textContent = "It's a draw!";
            whoWon.style.visibility = 'visible';
        }, 100)
    }
}

//kills current game and also ensures that a win on move 9 doesn't trigger the draw scenario
//since the game triggers the win and draw scenario at the same time in that situation
//i probably could've just thrown a boolean in another function and mostly avoided this part 
//but i felt like this piece was helpful for debugging and testing while building
function theNovelCoronavirus() {
    for (loop = 0; loop < cells.length; loop++) {
        cells[loop].removeEventListener('click', cellActive)
        a = 0;
        b = 0;
        c = 0;
        d = 0;
        e = 0;
        f = 0;
        g = 0;
        h = 0;
        i = 0;
    } 
}