
// let userWord;
// let palindroma;


// function name(params) {
    
// }

// do {
//     userWord = prompt("Dimmi una parola");
//     console.log(userWord);
//     const userWordLength = userWord.length;
//     console.log(userWordLength);
        
//     if (userWordLength === 3) {
//         palindroma = (userWord[2]+userWord[1]+userWord[0]);
//     }

//     if (userWordLength === 4) {
//         palindroma = (userWord[3]+userWord[2]+userWord[1]+userWord[0]);
//     }

//     if (userWordLength === 5) {
//         palindroma = (userWord[4]+userWord[3]+userWord[2]+userWord[1]+userWord[0]);
//     }

//     if (userWordLength === 6) {
//         palindroma = (userWord[5]+userWord[4]+userWord[3]+userWord[2]+userWord[1]+userWord[0]);
//     }

//     if (userWordLength === 7) {
//         palindroma = (userWord[6]+userWord[5]+userWord[4]+userWord[3]+userWord[2]+userWord[1]+userWord[0]);
//     }

//     if (userWordLength === 8) {
//         palindroma = (userWord[7]+userWord[6]+userWord[5]+userWord[4]+userWord[3]+userWord[2]+userWord[1]+userWord[0]);
//     }

//     if (userWordLength === 9) {
//         palindroma = (userWord[8]+userWord[7]+userWord[6]+userWord[5]+userWord[4]+userWord[3]+userWord[2]+userWord[1]+userWord[0]);
//     }
    
//     if (palindroma === userWord) {
//         console.log(palindroma);
//         alert("La parola da te inserita E' Palindroma")
//     }   else {
//         alert("La parola da te inserita NON E' Palindroma")
//     }

// } while ( userWord !== palindroma );


const userWord = prompt("Dimmi una parola")
let reverseWord;

do {
    userWord = prompt("Dimmi una parola")
    console.log(userWord);

    let userSplitWord = userWord.split("");
    console.log(userSplitWord);

    let userSplitWordReverse = userSplitWord.reverse();
    console.log(userSplitWordReverse);

    reverseWord = userSplitWordReverse.join("");
    console.log(reverseWord);

    if (reverseWord === userWord) {
        alert("La parola da te inserita E' polindroma")
    }   else {
        alert("La parola da te inserita NON E' polindroma")   
    }
    
} while ( userWord !== reverseWord );

function palindromaCheck() {
    
}
