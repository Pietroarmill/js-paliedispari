// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const userChoice = prompt("Pari o dispari?");
const userChoiceLowerCase = userChoice.toLowerCase();
// console.log(userChoice);
let sum;
let userNumber;

// Function
let numberPc = randomNumber(5, 1);
let evenOrOddCheck = evenOrOdd();

if (userChoice === "pari" || userChoice === "dispari" ) {
    userNumber = parseInt(prompt("Dimmi un numero da 1 a 5"));
    if (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
        alert("Inserisci un numero da 1 a 5");
    }  
    // console.log(userNumber);
    
    
}   else {
    alert("inserisci 'pari o 'dispari'.");
}

if (evenOrOddCheck === userChoice) {
    alert("HAI VINTO!!")
}   else {
    alert("HAI PERSO!!")
}


// FUNCTION

function randomNumber(max, min) {
    
    const pcRandomNumber = Math.floor(Math.random()*max ) + min;

    return pcRandomNumber;

}
// console.log("pc",numberPc);

function evenOrOdd() {

    let result;

    if ( (userNumber + numberPc) % 2 == 1 ) {
        result = "dispari";
    }   else if ( (userNumber + numberPc) % 2 == 0 ) {
        result = "pari";
    }
    console.log(userNumber);

    return result;
}
// console.log("somma",sum);


// console.log("risultato",evenOrOddCheck);

