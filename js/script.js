//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const randArray = generateRandomArray(5, 1, 100);
console.log(randArray);
//scrivo l'array con i numeri inseriti randomicamente nel DOM
document.querySelector('#text').innerHTML = randArray

function generateRandomArray(arrayLength, numMin, numMax) {
    // Creo un array vuoto
    const randomNumbersArray = [];

    // finche non ci sono arrayLength numeri nell'array:
    while(randomNumbersArray.length < arrayLength) {
        // genero un numero random e controllo che non sia già stato inserito
        const randNumber = getRndInteger(numMin, numMax);
        if(!randomNumbersArray.includes(randNumber)) {
            randomNumbersArray.push(randNumber);
        }
    }
    
    return randomNumbersArray;
}
//faccio scomparire i numeri dopo 30 secondi
setTimeout(hideNumbers, 30000);
function hideNumbers() {
    document.getElementById('text').style.display = 'none'
}

//funzione che crea numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}