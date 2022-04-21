// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const userChoice = prompt("Pari o dispari?");
const userChoiceLowerCase = userChoice.toLowerCase();
let sum;
const numberPc = randomNumber(5, 1);
let userNumber;
let result;


if ( userChoice === "pari" || userChoice === "dispari" ) 
{
    userNumber = parseInt(prompt("Dimmi un numero da 1 a 5"));
    if (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
        alert("Inserisci un numero da 1 a 5");
    }   else {
        
        sum = userNumber + numberPc;

        console.log("pc",numberPc);
        console.log("somma", sum);
        
        if (sum % 2 === 1) {
            result = "dispari";
        }   else {
            result = "pari";
        }
        console.log("risultato", result);
        
        if (result === userChoice) {
            alert("HAI VINTO!!")
        }   else {
            alert("HAI PERSO!!")
        }
    }
    console.log(userNumber);

}   else {
    alert("inserisci 'pari o 'dispari'.");
}





// FUNCTION

function randomNumber(max, min) {
    
    const pcRandomNumber = Math.floor(Math.random()*max ) + min;

    return pcRandomNumber;

}