// L'esercizio proposto è un insicurissimo password generator

//1 step: chiedere all'utente il suo nome

const nome = prompt("Inserisci il tuo nome:");
console.log(nome);




// 2 step: Chiedere all'utente il suo cognome
const cognome = prompt("Inserisci il tuo cognome: ");
console.log(cognome);




// 3 step: Chiedere all'utente il suo colore preferito
const colore = prompt("Inserisci il tuo colore preferito: ");
console.log(colore);


// 4 step: Chiedere all'utente di inserire un numero a piacere
const number = parseInt(prompt("Inserisci un numero che ti piace:  "));
console.log(number);


// 5 step: Formiamo la password
document.getElementById("result").innerHTML= nome + cognome +  colore + number;
