// These points represent the points for each letter of alphabet
const points = [1, 3, 3, 2, 1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10];
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
    'p','q','r','s','t','u','v','w', 'x','y','z'];

// calculates score of word in the points scale
function wordScore(word) {
    let total = 0;
    for (let x=0; x<word.length; x++) {
        // position of each letter in the alphabet
        let xAlphabetPosition = alphabet.indexOf(word[x])
        if (xAlphabetPosition === -1) {
            total += 0
        } else {
            // add points value of letter to total word score
            total += points[xAlphabetPosition]
        }
    }
    return total
}

function calculateWinner(playerOneWord, playerTwoWord){
    let playerOne = wordScore(playerOneWord.toLowerCase())
    let playerTwo = wordScore(playerTwoWord.toLowerCase())
    let scoreText = `${playerOneWord} ${playerOne} - ${playerTwoWord} ${playerTwo}`

    if (playerOne === playerTwo) {
        console.log(`Draw: ${scoreText}`)
    } else if (playerOne > playerTwo) {
        console.log(`Player 1 wins: ${scoreText}`)
    } else if (playerOne < playerTwo) {
        console.log(`Player 2 wins: ${scoreText}`)
    } else {
        console.log(`Enter correct data type ${scoreText}`)
    }
}

calculateWinner( 'COMPUTER', 'HELLOWORLD!');
