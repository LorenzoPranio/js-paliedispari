//Creo un promtp per chiedere all'utente "Pari o Dispari?"

let pari_dispari = prompt('Pari o Dispari?')

//Creo un prompt per chiedere un numero all'utente con il parsInt

let numero_utente = parseInt(prompt('Scegli un numero da 1 a 5!'))

//IF il nuemro che hai scelto è pari e la somma è pari, e se il numero che hai scelto è dispari e la somma è dispari: Hai vinto!

let numero_pari = true

if ((pari_dispari === 'pari' && numero_pari == true) || (pari_dispari === 'dispari' && nuemro_pari == false)){
    alert('Hai vinto!')
}
//ELSE: Hai perso!
else{
    alert('Hai perso!')
}

//Creo una variabile per il numero del pc

let numero_pc = numero_computer()

//Creo una funzione per generare un numero da 1 a 5

function numero_computer(){
    return Math.floor(Math.random() * 5 + 1)
}

//Creo una funzione per comparare i numeri

comparazione_numeri(numero_utente, numero_pc)

function comparazione_numeri(numero_utente, numero_pc){
    //Creo la variabile per sommare i numeri
    let somma = numero_utente + numero_pc
    //IF la somma non è divisibile per 2, non è pari
    if (somma % 2 !== 0){
        numero_pari = false
    }
}



