"use strict";
//Crear una funcion que reciba un string como argumento, y devuelva el indice del espacio separador 
//El string debe tener una frase de dos palabras 

function findSpaceWithFor(frase){
    let indexFound = -1
    for(let i=0; i<frase.length;i++){
        if (frase[i] == " ") {
            indexFound = i;
        }
  
    }
return indexFound;
}
let frase= "Hola Mundo";
let resultado = findSpaceWithFor(frase);

let phrase = "Instituto Sudamericano";
let indice = findSpaceWithFor(phrase);
let primeraPalabra = phrase.substring(0,indice);
let segundaPalabra = phrase.substring(indice+1);
alert(primeraPalabra);
alert(segundaPalabra);

