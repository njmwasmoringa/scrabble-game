// These points represent the points for each letter of alphabet
const points = [1, 3, 3, 2, 1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10];
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
    'p','q','r','s','t','u','v','w', 'x','y','z'];

//log either player one win or player two win depending on 
//who scored the highest
function wordScore(word) {
    let total = 0;
    for (let x=0; x<word.length; x++) {
        // position of each letter in the alphabet
        let xAlphabetPosition = alphabet.indexOf(word[x])
        // add value of letter in position scale to total value of word
        total += points[xAlphabetPosition]
    }
    return total
}
function calculateWinner(playerOneWord, playerTwoWord){
    let playerOne = wordScore(playerOneWord.toLowerCase())
    let playerTwo = wordScore(playerTwoWord.toLowerCase())

    // player one wins or player two wins
    if (playerOne === playerTwo) {
        console.log(`Draw: ${playerOneWord} ${playerOne} - ${playerTwoWord} ${playerTwo}`)
    } else if (playerOne > playerTwo) {
        console.log(`Player 1 wins: ${playerOneWord} ${playerOne} - ${playerTwoWord} ${playerTwo}`)
    } else if (playerOne < playerTwo) {
        console.log(`Player 2 wins: ${playerOneWord} ${playerOne} - ${playerTwoWord} ${playerTwo}`)
    } else {
        console.log("Enter correct data type")
    }
}

calculateWinner( 'COMPUTER', 'HELLOWORLD' );
