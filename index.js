
// This points represent the points for each letter of alphabet.

let points={"a": 1, "b": 3, "c": 3,"d": 2,"e": 1, "f": 4,"g": 2,"h": 4,"i": 1, "j": 8, "k": 5,"l": 1,"m": 3,"n": 1,"o": 1,"p": 3,"q": 10,"r": 1, "s": 1, "t": 1,"u": 1,"v": 4, "w": 4, "y": 4,"x": 8,"z": 10};


function calculatePoints(word){
//initialized score to 0;
let score = 0;

// //convert the capitalized word to lowercase
 word =word.toLowerCase();

//split the word
const splitWordArray = word.split("");

//function calculate pionts in a word
splitWordArray.forEach(function(letter){
    score += points[letter];
});

return score;
}

//who scored the highest
function showWinner(playerOneWord, playerTwoWord){
     // write code here
     //calculate each players points
    const playerOnePoints = calculatePoints(playerOneWord);
    const playerTwoPoints = calculatePoints(playerTwoWord);


    // player one wins or player two wins

    if(playerOnePoints > playerTwoPoints){
        console.log("Player One Wins!");
    }else if(playerTwoPoints > playerOnePoints){
        console.log("Player Two Wins!");
    }else{
        console.log("There is tie!")
    }
}

showWinner( 'COMPUTE', 'computer' );