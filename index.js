
// This points represent the points for each letter of alphabet
const points = [1, 3, 3, 2, 1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10];

//The alphabets as one string which is split to single characters
let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

function fetch(alp) {
    var sum = 0;
    for(const it of alp){
        var index = alphabet.indexOf(it);
        sum+=points[index];
    }
    return sum;
}


function calculateWinner(playerOneWord , playerTwoWord){
        let sum1 = fetch(playerOneWord);
        let sum2 = fetch(playerTwoWord);

        if(sum1>sum2){
            console.log(playerOneWord+" "+sum1);
        }
        else if(sum2>sum1){
            console.log(playerTwoWord+" "+sum2);
        }
        else{
            console.log("draw")
        }
console.log("winner");
}

calculateWinner("computer" , "helloworld")
