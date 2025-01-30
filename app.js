/* let titulo = document.querySelector("h1");
titulo.innerHTML = "Juego del numero secrete";

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Escoje un numero del 1 al 10"; */


let numeroSecreto = 0;
let intentos = 0;
// let maximoIntentos = 3;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



/* //en este caso en vez de usar muchas fuciones para cada elemento HTML usamos una sola funcion
la cual le entregamos los parametros */
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}



function verificarIntento(){
    let numerUsuario = parseInt(document.getElementById("valorUsuario").value);

    console.log(numeroSecreto);
    

    

    //operaciones al usuario ingresar un numero
    if (numerUsuario === numeroSecreto){
        asignarTextoElemento("p",` "Acertaste en el numero en ${intentos} ${intentos === 1 ? "intento" : "intentos"}"`);//reutilizamos la funcion
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if (numerUsuario >  numeroSecreto) {
            asignarTextoElemento("p","El numero es menor")
        }else{
            asignarTextoElemento("p","El numero es mayor")
        }
        intentos ++;
        limpiarCaja();
    }
    

    
    return;


}


//funciones
function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    

    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "YA SE SORTEARON TODOS LOS NUMEROS");
    }else{

    
    

    //si el numero secreto esta en las lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        
    }else
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;

   

}
}


function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";//query selector es un selector generico por eso se hace referencia al aid con el "#"
}

function reiniciarJuego() {
    console.log(numeroSecreto);
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
   document.getElementById("reiniciar").setAttribute("disabled","true");
    
    

    

    

}

function condicionesIniciales() {

    
    asignarTextoElemento("h1", "Bienvenido al juego NUMERO SECRETO");
    asignarTextoElemento("P", `Escoja un numero por favor, del 1 al ${numeroMaximo}`);
     //genrar numero aleatorio
     numeroSecreto = generarNumeroSecreto();
     //inicializar el nuevo juego
    intentos = 1;
}



condicionesIniciales();











