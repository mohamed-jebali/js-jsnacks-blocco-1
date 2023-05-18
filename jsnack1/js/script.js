


let tot = 0;
let number = 0;

for (let i = 0; i < 10; i++) {
    let inputUser = prompt("Inserisci Numero " + i);
    number = parseInt(inputUser);

  }

  if(isNaN(number)){
    console.log("Inserisci un numero valido")
  }
  else{
  console.log("la somma totale dei numeri inseriti è: " + number + tot );
  }