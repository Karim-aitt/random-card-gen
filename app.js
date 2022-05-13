let images = document.getElementsByClassName("naipe");
let number = document.getElementById("number");
let button = document.getElementById("otraCarta");

//--------------------------------------------FUNCION GENERADORA
let generator = () => {

//  RANDOM CARTA
let cartas = ["./images/corazon.png", "./images/diamante.png", "./images/pica.png", "./images/trebol.png"]
let randomNaipe = Math.floor(Math.random()*4);

//  RANDOM NUMBER
let randomNumber = Math.floor(Math.random()*(13 - 2 + 1)) + 2;

//  FUNCIONES
let randomFunction = () => {
    switch(randomNumber){
        case 11: return "J"; break;
        case 12: return "Q"; break;
        case 13: return "K"; break;
        default: return randomNumber; break;
    }
}

let funCarta = () => {
    for(let i in images){
        images[i].src = cartas[randomNaipe]
    }
}
// IMPRESIÓN EN LA WEB
number.innerHTML = randomFunction()
funCarta()
}
//------------------------------------------BOTON DE OTRA CARTA

button.addEventListener("click", function(){
    generator()
})


// --------------------------------------- BUTTON TIMER

let start = document.getElementById("start")
let stop = document.getElementById("stop")

let myTimer;
start.addEventListener("click", function(){
    generator()
    myTimer = setInterval(generator, 1000) //esta puesto a 1 segundo por testing purposes(pon 1 cero más para 10)

    button.classList.toggle("visually-hidden")
    start.classList.toggle("visually-hidden")
    stop.classList.toggle("visually-hidden")
})

// --------------------------------------- BUTTON STOP
stop.addEventListener("click", function(){
    clearInterval(myTimer)

    button.classList.toggle("visually-hidden")
    start.classList.toggle("visually-hidden")
    stop.classList.toggle("visually-hidden")
})