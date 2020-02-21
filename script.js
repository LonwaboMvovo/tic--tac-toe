let player1 = document.querySelector('.player1');
let player2 = document.querySelector('.player2');
let player1point; //Player one's points
let player2point; //Player two's points
let playerOne; //Declaring player one's name
let playerTwo; //Declaring player two's name
const field = document.querySelectorAll('.block2'); //All the available spots to play on the website
const newGame = document.querySelector('.newGame'); //The newGame button
const newRound = document.querySelector('.newRound'); //The newRound button
let j; //Declaring j. j is an integer that alternates between odd and even numbers to determine who's turn it is
let jDraw; //Declaring jDraw. jDraw is an interger that helps determine if a draw has been reached
let gameOver = 0; //gameOver is used so that a player cannot make a mark if the game has ended and there are still available spots to play. It also is used so that a new round cannot be started unless the game is over
let rules; //Declaring rules. Rules is used to alternate between displaying the rules and not. 
const okay = document.querySelector('#okay'); //The okay button

const points = () => { //Updates the points of the players
    player1.textContent = playerOne + ' - ' +  player1point;
    player2.textContent = playerTwo + ' - ' +  player2point;
}

const whosTurn = (player)  => { //Identifies who's turn it is 
    if (player % 2 === 0 && gameOver === false) { //Even numbers remainder is zero and player 2 will play
        player1.className += ' turn'; //Adds 'turn' to class list so that it highlights who plays
        player2.classList.remove('turn'); // Removes 'turn' from class list
        return false;
    }
    else if (player % 2 !== 0 && gameOver === false) { //Odd numbers have a non-zero remainder and x will play
        player2.className += ' turn';
        player1.classList.remove('turn');
        return true; 
    } 
}

const winner = () => { //Alerts winner, adds point to winner, ends round and highlights the winning blocks
    //Below are all the possible wins for x
    if (field[0].textContent === 'x' && field[1].textContent === 'x' && field[2].textContent === 'x') { //If 3 blocks next to each other are the same 
        setTimeout(function() {
            alert(`${playerOne} wins!!!`);
            player1point += 1; //Adds point to player one
            points();
            gameOver = true; //changes gameOver to true so that when a player presses on the field once the game is done winner won't run and a mark won't be made
        }, 1000) //alerts winner one second later
        field[0].className += ' win'; //adds 'win' to classList. Without the space the classList would be one word 'block2win', instead of 'block2 win' which is what is needed for CSS to do the styles
        field[1].className += ' win';
        field[2].className += ' win';
    }
    else if (field[3].textContent === 'x' && field[4].textContent === 'x' && field[5].textContent === 'x') {
        setTimeout(function() {
            alert(`${playerOne} wins!!!`);
            player1point += 1;
            points();
            gameOver = true;
        }, 1000)
        field[3].className += ' win';
        field[4].className += ' win';
        field[5].className += ' win';
    }
    else if (field[6].textContent === 'x' && field[7].textContent === 'x' && field[8].textContent === 'x') {
        setTimeout(function() {
            alert(`${playerOne} wins!!!`);
            player1point += 1;
            points();
            gameOver = true;
        }, 1000)
        field[6].className += ' win';
        field[7].className += ' win';
        field[8].className += ' win';
    }
    else if (field[0].textContent === 'x' && field[3].textContent === 'x' && field[6].textContent === 'x') {
        setTimeout(function() {
            alert(`${playerOne} wins!!!`);
            player1point += 1;
            points();
            gameOver = true;
        }, 1000)
        field[0].className += ' win';
        field[3].className += ' win';
        field[6].className += ' win';
    }
    else if (field[1].textContent === 'x' && field[4].textContent === 'x' && field[7].textContent === 'x') {
        setTimeout(function() {
            alert(`${playerOne} wins!!!`);
            player1point += 1;
            points();
            gameOver = true;
        }, 1000)
        field[1].className += ' win';
        field[4].className += ' win';
        field[7].className += ' win';
    }
    else if (field[2].textContent === 'x' && field[5].textContent === 'x' && field[8].textContent === 'x') {
        setTimeout(function() {
            alert(`${playerOne} wins!!!`);
            player1point += 1;
            points();
            gameOver = true;
        }, 1000)
        field[2].className += ' win';
        field[5].className += ' win';
        field[8].className += ' win';
    }
    else if (field[0].textContent === 'x' && field[4].textContent === 'x' && field[8].textContent === 'x') {
        setTimeout(function() {
            alert(`${playerOne} wins!!!`);
            player1point += 1;
            points();
            gameOver = true;
        }, 1000)
        field[0].className += ' win';
        field[4].className += ' win';
        field[8].className += ' win';
    }
    else if (field[2].textContent === 'x' && field[4].textContent === 'x' && field[6].textContent === 'x') {
        setTimeout(function() {
            alert(`${playerOne} wins!!!`);
            player1point += 1;
            points();
            gameOver = true;
        }, 1000)
        field[2].className += ' win';
        field[4].className += ' win';
        field[6].className += ' win';
    }
    //Below are all the possible wins for o
    else if (field[0].textContent === 'o' && field[1].textContent === 'o' && field[2].textContent === 'o') {
        setTimeout(function() {
            alert(`${playerTwo} wins!!!`);
            player2point += 1; //Adds point to player two
            points();
            gameOver = true;
        }, 1000)
        field[0].className += ' win';
        field[1].className += ' win';
        field[2].className += ' win';
    }
    else if (field[3].textContent === 'o' && field[4].textContent === 'o' && field[5].textContent === 'o') {
        setTimeout(function() {
            alert(`${playerTwo} wins!!!`);
            player2point += 1;
            points();
            gameOver = true;
        }, 1000)
        field[3].className += ' win';
        field[4].className += ' win';
        field[5].className += ' win';
    }
    else if (field[6].textContent === 'o' && field[7].textContent === 'o' && field[8].textContent === 'o') {
        setTimeout(function() {
            alert(`${playerTwo} wins!!!`);
            player2point += 1;
            points();
            gameOver = true;
        }, 1000)
        field[6].className += ' win';
        field[7].className += ' win';
        field[8].className += ' win';
    }
    else if (field[0].textContent === 'o' && field[3].textContent === 'o' && field[6].textContent === 'o') {
        setTimeout(function() {
            alert(`${playerTwo} wins!!!`);
            player2point += 1;
            points();
            gameOver = true;
        }, 1000)
        field[0].className += ' win';
        field[3].className += ' win';
        field[6].className += ' win';
    }
    else if (field[1].textContent === 'o' && field[4].textContent === 'o' && field[7].textContent === 'o') {
        setTimeout(function() {
            alert(`${playerTwo} wins!!!`);
            player2point += 1;
            points();
            gameOver = true;
        }, 1000)
        field[1].className += ' win';
        field[4].className += ' win';
        field[7].className += ' win';
    }
    else if (field[2].textContent === 'o' && field[5].textContent === 'o' && field[8].textContent === 'o') {
        setTimeout(function() {
            alert(`${playerTwo} wins!!!`);
            player2point += 1;
            points();
            gameOver = true;
        }, 1000)
        field[2].className += ' win';
        field[5].className += ' win';
        field[8].className += ' win';
    }
    else if (field[0].textContent === 'o' && field[4].textContent === 'o' && field[8].textContent === 'o') {
        setTimeout(function() {
            alert(`${playerTwo} wins!!!`);
            player2point += 1;
            points();
            gameOver = true;
        }, 1000)
        field[0].className += ' win';
        field[4].className += ' win';
        field[8].className += ' win';
    }
    else if (field[2].textContent === 'o' && field[4].textContent === 'o' && field[6].textContent === 'o') {
        setTimeout(function() {
            alert(`${playerTwo} wins!!!`);
            player2point += 1;
            points();
            gameOver = true;
        }, 1000)
        field[2].className += ' win';
        field[4].className += ' win';
        field[6].className += ' win';
    }
    else { //Runs draw if none of the above happen
        draw();
    }
}

for (let i = 0; i < field.length; i++) { //Alternates the sign that needs to be played and runs winner to see if anyone has won
    field[i].addEventListener("click", function() { //Event listener on the whole field
        if (whosTurn(j) === true && this.textContent === '' && gameOver === false) { //If it's player ones turn x will be marked and this makes it so that a sign cannot be replaced if someone clicks on the same block
            this.textContent = 'x';
            j++; //Adds 1 to j to turn it from even to odd or vice-versa
            jDraw++; //Adds 1 to jDraw so that once it reaches 10 a draw will be called
            winner();
        }
        else if (whosTurn(j) === false && this.textContent === '' && gameOver === false) {
            this.textContent = 'o';
            j++;
            jDraw++;
            winner();
        }
    })
}

const draw = () => { //Checks if there has been a draw
        if (jDraw === 10 && gameOver === false) { //When j === 10 it means the board is full and if the game isn't over it means it's a draw
            setTimeout( function() {
                alert('draw') //Alerts draw 1 second later
            }, 1000);
        }
}

const rulesShow = () => { //Either shows or hides rules
    if (rules === 0) { //Initial rules value, therefore rules will show once run
        document.querySelector('.rules').style.display = 'block'; //Changes CSS display to block so that it is visible
       rules= 69420; //Could be any number but as long as it's not 0
    }
    else { 
        document.querySelector('.rules').style.display = 'none'; //Changes CSS display to none so that it is hidden
       rules= 0; //Change back to 0
    }
}

newRound.addEventListener('click', function() { //Cleans the board so that it is ready for a new round
    if (gameOver === true) { //A new round can not be started unless the game is over
        for (let i = 0; i < field.length; i++){
            field[i].textContent = ''; //Removes all marks on the field
            field[i].classList.remove('win'); //Takes away the win class so that the winning blocks don't rulesShow out anymore
        }
        gameOver = false;
        jDraw = 1;
        whoStart++;
        j = whoStart;
        if (j % 2 === 0) { //Highlights the player that is meant to start the new round
            player1.classList.remove('turn');
            player2.className += ' turn';
        }
        else if (j % 2 !== 0) {
            player2.classList.remove('turn');
            player1.className += ' turn';
        }
    }
})

newGame.addEventListener('click', function() { //Resets all variables, cleans the board
    rules = 0; 
    for (let i = 0; i < field.length; i++){
        field[i].textContent = ''; 
        field[i].classList.remove('win'); 
    }
    player1.classList.remove('turn');
    player2.classList.remove('turn');
    rulesShow(); 
    j = 1; 
    jDraw = 1;
    whoStart = 1; //whoStart is an integer that increases until a new game starts and it alternates rounds to see who starts
    gameOver = false;
})

okay.addEventListener('click', function() { //Sets new names
    rulesShow(); //Hides rules
    playerOne = prompt("Player 1");
    playerTwo = prompt("Player 2");
    player1.className += ' turn'; //Gives shadow effect on player1 one to indicate its their turn
    player1point = 0;
    player2point = 0;
    if (playerOne !== '') {//If a player gives a name then the points are just updated
        playerOne = playerOne;
    }
    if (playerOne === '') { //If player leaves name blank 'Player 1' will be their name
        playerOne = 'Player 1';
    }
    if (playerOne === null) { //If player presses cancel then 'Player 1' will be their name 
        playerOne = 'Player 1';
    }
    if (playerOne.length > 13) {
        playerOne = 'READTHERULES1'; //When the player name is longer than 13 characters it doesn't fit in the player name box
    }
    if (playerTwo !== '') {
        playerTwo = playerTwo;
    }
    if (playerTwo === '') {
        playerTwo = 'Player 2';
    }
    if (playerTwo === null) {
        playerTwo = 'Player 2';
    }
    if (playerTwo.length > 13) {
        playerTwo = 'READTHERULES2';
    }
    points(); 
})

// Still have to clean up code

//Done by Lonwabo Mvovo