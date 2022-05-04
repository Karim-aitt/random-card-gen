let images = document.getElementsByClassName("naipe");
let number = document.getElementById("number");

// --------------------------------------- RANDOM CARTA
let cartas = ["./images/corazon.png", "./images/diamante.png", "./images/pica.png", "./images/trebol.png"]
let randomNaipe = Math.floor(Math.random()*4);

// --------------------------------------- RANDOM NUMBER
let randomNumber = Math.floor(Math.random()*(13 - 2 + 1)) + 2;

function randomFunction(){
    switch(randomNumber){
        case 11: return "J"; break;
        case 12: return "Q"; break;
        case 13: return "K"; break;
        default: return randomNumber; break;
    }
}

window.onload = function myFunction(){
    for(let i in images){
        images[i].src = cartas[randomNaipe]
    }  
}

number.innerHTML = randomFunction();

// --------------------------------------- BUTTON RELOAD

let button = document.getElementById("otraCarta");

button.addEventListener("click", function(){
    window.location.reload()
})