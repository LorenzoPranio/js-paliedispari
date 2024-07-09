//Chiedo all'utente di inserire una parola con un prompt

//let parola = prompt('Inserisci una parola');
//let parola_reverse

//Dichiaro una funzione con parametro "parola"
//Divido l'input in singole lettere e Inverto l'ordine delle lettere
//Unisco in una stringa le lettere per generare una nuova parola

/*function reverse_string(parola){
    parola_reverse = parola.split('').reverse().join('')
    //IF la nuova parola è identica alla vecchia la mostro in console.log
    if(parola === parola_reverse){
        alert('La parola è polidroma')
    }
    //ELSE Mostro in console "parola non polidroma"
    else{
        alert('La parola non è polidroma')
    }
}*/
//reverse_string(parola)


//CON CICLO FOR

let parola = prompt('Inserisci una parola');

let parola_reverse = '';

for (let i = parola.length - 1; i >= 0; i-- ){
    parola_reverse += parola[i];
}

console.log(parola_reverse)

// Verifico se la parola è palindroma
if (parola === parola_reverse) {
    alert('La parola è palindroma');
} else {
    alert('La parola non è palindroma');
}








