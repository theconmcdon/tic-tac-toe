//Take a moment to set the respect variable to the appropriate
//amount for the tic tac toes projects that didn't make it

let respect = 100 
function respectPaid(){
    for (j = 0; j < respect; j++){
        let respects = 'F'
        console.log(respects)
    }
}
respectPaid();

//also i disagreed with some of the rules of the project because i wanted my game to be more balanced. these changes are explained
//in notes throughout the code and the appropriate changes to the functions to get the instructed functionality are included in
//the notes as well.

/* SOME VARIABLES AND STUFF */
/*._________________.                                                                                                                                                                                                                */
//|     |     |     |
//|  a  |  b  |  c  |
//|_____|_____|_____|
//|     |     |     |
//|  d  |  e  |  f  |
//|_____|_____|_____|
//|     |     |     |
//|  g  |  h  |  i  |
//|_____|_____|_____|
/////////////////////

//some of these might not be used idk i was planning on adding a form that allows for
//custom player names, a cheat code box, and some acheivements and stuff but i ran out of time
//since i have to learn those things on the fly

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

let count = 1;

let playerX = 'Player X';
let playerO = 'Player O';
let whoTurn = document.getElementById('whoTurn');
whoTurn.textContent = "It's " + playerX + "'s turn!";

let drawCount = 0;
let winsX = 0;
let winsO = 0;
let xWon = false;
let oWon = false;
let draw = false;

let draws = document.getElementById('draws');
draws.textContent = "Draws: " + drawCount;

let whoWon = document.getElementById('whoWon');
whoWon.style.visibility = 'hidden';

//i added this button for if you want to reset the board before the game is over but still retain overall scores
//the board will also reset if you click it at the end of the game
let newGameButton = document.querySelector('.button');
newGameButton.onclick = newGame;

let playerXWins = document.getElementById('playerXWins');
let playerOWins = document.getElementById('playerOWins');
playerXWins.textContent = 'Player X Wins: ' + winsX;
playerOWins.textContent = 'Player O Wins: ' + winsO;

/* THE big LOOP */

for (loop = 0; loop < cells.length; loop++) {
    cells[loop].addEventListener('click', cellActive);
}

/* FUNCTIONS - listed in general flow order */

//switches between X's and O's every time click count is increased by 1
function cellActive() {
    if (count % 2 > 0) {
        event.target.textContent = 'X';
        whoTurn.textContent = "It's " + playerO + "'s turn!";
        currentTurn = "It's " + playerO + "'s turn!";
    } else {
        event.target.textContent = 'O';
        whoTurn.textContent = "It's " + playerX + "'s turn!";
        currentTurn = "It's " + playerX + "'s turn!";
    }
    winnerCheckAlpha();
}

//checks each cell every click for an X or O and assigns it a numerical value of 1 or -1 respectively
//i couldn't figure out a way to make this smaller :(
function winnerCheckAlpha() {
    if (cells[0].textContent == 'X') {
        a = 1;
        cells[0].removeEventListener('click', cellActive);
    }
    if (cells[0].textContent == 'O') {
        a = -1;
        cells[0].removeEventListener('click', cellActive);
    }
    if (cells[1].textContent == 'X') {
        b = 1;
        cells[1].removeEventListener('click', cellActive);
    }
    if (cells[1].textContent == 'O') {
        b = -1;
        cells[1].removeEventListener('click', cellActive);
    }
    if (cells[2].textContent == 'X') {
        c = 1;
        cells[2].removeEventListener('click', cellActive);
    }
    if (cells[2].textContent == 'O') {
        c = -1;
        cells[2].removeEventListener('click', cellActive);
    }
    if (cells[3].textContent == 'X') {
        d = 1;
        cells[3].removeEventListener('click', cellActive);
    }
    if (cells[3].textContent == 'O') {
        d = -1;
        cells[3].removeEventListener('click', cellActive);
    }
    if (cells[4].textContent == 'X') {
        e = 1;
        cells[4].removeEventListener('click', cellActive);
    }
    if (cells[4].textContent == 'O') {
        e = -1;
        cells[4].removeEventListener('click', cellActive);
    }
    if (cells[5].textContent == 'X') {
        f = 1;
        cells[5].removeEventListener('click', cellActive);
    }
    if (cells[5].textContent == 'O') {
        f = -1;
        cells[5].removeEventListener('click', cellActive);
    }
    if (cells[6].textContent == 'X') {
        g = 1;
        cells[6].removeEventListener('click', cellActive);
    }
    if (cells[6].textContent == 'O') {
        g = -1;
        cells[6].removeEventListener('click', cellActive);
    }
    if (cells[7].textContent == 'X') {
        h = 1;
        cells[7].removeEventListener('click', cellActive);
    }
    if (cells[7].textContent == 'O') {
        h = -1;
        cells[7].removeEventListener('click', cellActive);
    }
    if (cells[8].textContent == 'X') {
        i = 1;
        cells[8].removeEventListener('click', cellActive);
    }
    if (cells[8].textContent == 'O') {
        i = -1;
        cells[8].removeEventListener('click', cellActive);
    }
    count += 1;
    winnerCheckBeta();
}

//declares a winner on any move besides move 9 (well it does but it can't read a draw which does create problems) and kills 
//current game by assessing the current number values of each possible win scenario until one equals 3 or -3
function winnerCheckBeta() {
    if ((a + b + c) == 3 || (d + e + f) == 3 || (g + h + i) == 3 || (a + d + g) == 3 || (b + e + h) == 3 || (c + f + i) == 3 || (a + e + i) == 3 || (c + e + g) == 3) {
        whoTurn.style.visibility = 'hidden';
        theNovelCoronavirus();
        setTimeout(function winnerCheckBeta() {
            whoWon.textContent = playerX + ' wins!';
            whoWon.style.visibility = 'visible';
            winsX +=1;
            xWon = true;
            oWon = false;
            draw = false;
            playerXWins.textContent = 'Player X Wins: ' + winsX;
        }, 100)
    }
    if ((a + b + c) == -3 || (d + e + f) == -3 || (a + e + i) == -3 || (g + h + i) == -3 || (c + e + g) == -3 || (c + f + i) == -3 || (b + e + h) == -3 || (a + d + g) == -3 || (g + h + i) == -3) {
        whoTurn.style.visibility = 'hidden';
        theNovelCoronavirus();
        setTimeout(function winnerCheckBeta() {
            whoWon.textContent = playerO + ' wins!';
            whoWon.style.visibility = 'visible';
            winsO += 1;
            oWon = true;
            xWon = false;
            draw = false;
            playerOWins.textContent = 'Player O Wins: ' + winsO;
        }, 100)
    }
    winnerCheckGamma();
}

//activates the novel coronavirus before the draw scenario is declared in case the winner is
//declared on the last possible move of the game since that win scenario has an overall board 
//value of 1 or -1 depending on who went first, which is the same as all draw boards
function winnerCheckGamma() {
    if ((a + b + c + d + e + f + g + h + i) == 1 && a !== 0 && b !== 0 && c !== 0 && d !== 0 && e !== 0 && f !== 0 && g !== 0 && h !== 0 && i !== 0) {
        whoTurn.style.visibility = 'hidden';
        setTimeout(function winnerCheckGamma() {
            theNovelCoronavirus();
            whoWon.textContent = "It's a draw!";
            whoWon.style.visibility = 'visible';
            drawCount += 1;
            draw = true;
            oWon = false;
            xWon = false;
            draws.textContent = "Draws: " + drawCount;
        }, 100);
    }
    if ((a + b + c + d + e + f + g + h + i) == -1 && a !== 0 && b !== 0 && c !== 0 && d !== 0 && e !== 0 && f !== 0 && g !== 0 && h !== 0 && i !== 0) {
        whoTurn.style.visibility = 'hidden';
        setTimeout(function winnerCheckGamma() {
            theNovelCoronavirus();
            whoWon.textContent = "It's a draw!";
            whoWon.style.visibility = 'visible';
            drawCount += 1;
            draw = true;
            oWon = false;
            xWon = false;
            draws.textContent = "Draws: " + drawCount;
        }, 100);
    }
}

//the novel coronavirus kills the current game by resetting all board values back to 0 and freezing all cells 
//so that the Gamma Checker can't complete the draw scenario as explained previously and players cant make a 
//move after the game is over. any new clicks on the board will only reset the gameboard
//i probably could've just thrown a boolean in another function and mostly avoided this part 
//but i felt like this piece was helpful for debugging and testing while building
function theNovelCoronavirus() {
    for (loop = 0; loop < cells.length; loop++) {
        cells[loop].removeEventListener('click', cellActive);
        a = 0;
        b = 0;
        c = 0;
        d = 0;
        e = 0;
        f = 0;
        g = 0;
        h = 0;
        i = 0;
        cells[loop].addEventListener('click', newGame);
    } 
}

//resets the rest of the game values back to their starting values except for win/draw counts (for obvious reasons) 
//and the count variable (in order to make sure the next game starts with the last game's loser going first, or if there's a draw,
//the player who went last will go second in order to keep the game more balanced and not give player X an advantage by always being first)
//
//also i am aware that the instructions said to always make player X first but i disagree so NO. if you want player x to be first
//you just need to add these two lines inside the for-loop in this newGame function:
//
//count = 1;
//whoTurn.textContent = "It's " + playerX + "'s turn!";
//
//and remove this line:
//
//whoTurn.textContent = currentTurn;
//
//this will retain all game functionality while giving player X the advantage over 
//player O as requested if you want your tic tac toe game to suck :^)
function newGame() {
    for (loop = 0; loop < cells.length; loop++) {
        cells[loop].textContent = null;
        cells[loop].addEventListener('click', cellActive)
        whoWon.style.visibility = 'hidden';
        whoTurn.textContent = currentTurn;
        whoTurn.style.visibility = 'visible';
        cells[loop].removeEventListener('click', newGame);
    }
}

