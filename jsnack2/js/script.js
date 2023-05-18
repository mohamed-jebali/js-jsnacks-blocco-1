
let inputUser = prompt("Inserisci il tuo Nome");
let guestList = ["Parmenide","Talete","Platone","Aristotele","Socrate"];
let invitation = false;

for(let i = 0; i < guestList.length;i++){

    if(inputUser === guestList[i]){
        invitation = true;
    }
}

if(invitation){
    console.log("Benvenuto nella nostra Festa")
}
else{
    console.log("Non sei nella lista non puoi entrare")
}