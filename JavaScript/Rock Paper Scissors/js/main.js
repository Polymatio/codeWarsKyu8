// Create a function to create players for rock paper scissors
// Must have player one and player two to play the game
// Need to add comditionals for the outputs of the game for player one and player two
// The game will use the logical AND (&&) to output the a player wins or loss
// It will also need a condition where the game is a draw 

function rps(p1, p2){
    if(p1 === p2) {
        return 'Draw!';
    }

    if(p1 === 'rock' && p2 === 'scissors') {
        return 'Player 1 won!';
    }else if(p1 === 'paper' && p2 === 'rock') {
        return 'Player 1 won!';
    }else if(p1 === 'scissors' && p2 === 'paper') {
        return 'Player 1 won!';
    }else {
        return 'Player 2 won!';
    }
}

rps('rock', 'rock');    
rps('scissors', 'rock');  
rps('paper', 'rock');     
rps('paper', 'paper');    