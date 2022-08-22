// This points represent the points for each letter of alphabet
const points = [1, 3, 3, 2, 1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10];
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w',
    'x','y','z'];

//log either player one win or player two win depending on 
//who scored the highest
function calculateWinner(playerOneWord, playerTwoWord){
    let one = playerOneWord.toLowerCase();
    let two = playerTwoWord.toLowerCase();
    let onePointsValue = 0;
    let twoPointsValue = 0;

    // loop through the first word
    for (let x=0; x<one.length; x++) {
        // position of each letter in the alphabet
        let xAlphabetPosition = alphabet.indexOf(one[x])
        // add value of letter in position scale to total value of word
        onePointsValue += points[xAlphabetPosition]
    }

    // loop through the second word
    for (let x=0; x<two.length; x++) {
        // position of each letter in the alphabet
        let xAlphabetPosition = alphabet.indexOf(two[x])
        // add value of letter in position scale to total value of word
        twoPointsValue += points[xAlphabetPosition]
    }

    // player one wins or player two wins
    if (onePointsValue === twoPointsValue) {
        console.log(`Draw: ${playerOneWord} ${onePointsValue} - ${playerTwoWord} ${twoPointsValue}`)
    } else if (onePointsValue > twoPointsValue) {
        console.log(`Player 1 wins: ${playerOneWord} ${onePointsValue} - ${playerTwoWord} ${twoPointsValue}`)
    } else if (onePointsValue < twoPointsValue) {
        console.log(`Player 2 wins: ${playerOneWord} ${onePointsValue} - ${playerTwoWord} ${twoPointsValue}`)
    } else {
        console.log("Enter correct data type")
    }
}

calculateWinner( 'COMPUTER', 'HELLOWORLD' );
