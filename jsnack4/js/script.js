let inputUser = parseInt(prompt("Inserisci un Numero con massimo di 4 cifre"));
let tot = 0;

if(isNaN(inputUser)){
    console.log("Inserisci un numero valido");
}

else if(inputUser.toString().length > 4){
    console.log("Errore : hai inserito un numero con piu di 4 cifre")
}
else{
    console.log("la somma dei numeri inseriti e : " + inputUser.length + tot)
}