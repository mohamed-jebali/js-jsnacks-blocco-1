let list = [];
let number = 0;

for (let i = 0; i < 6; i++) {
    let inputUser = prompt("Inserisci Numero " + i);
    number = parseInt(inputUser);


    if(isNaN(inputUser)){
        console.log("Inserisci un numero valido");
    }
    else if(number % 2 !== 0){
        list.push(inputUser);
    }
  }
  console.log("i numeri dispari sono: " ,list);