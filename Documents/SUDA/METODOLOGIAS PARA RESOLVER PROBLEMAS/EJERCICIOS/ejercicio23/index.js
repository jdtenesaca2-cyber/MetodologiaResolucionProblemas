"use strict";
/* TIPO DECLARACION DE FUNCIONES
crear una funcion que eleve al cuadrado de un numero ingresado como argumento
*/

function elevado(a){
    return a**2;
} 

// probar
let resul  = elevado(3);
alert("El numero ingresado elevado al cuadrado es: "+ resul)


/* TIPO FUNCIONES DE EXPRESION
crear una funcion que eleve al cuadrado de un numero ingresado como argumento
*/
let elevad = function (a){
    return a**2;
}

let resulta  = elevad(2);
alert("El numero ingresado elevado al cuadrado es: "+ resulta)




/* TIPO FUNCION FLECHA
crear una funcion que eleve al cuadrado de un numero ingresado como argumento
*/
// declarar la funcion
let eleva = (a) => a**2;

let resu  = elevado(5);
alert("El numero ingresado elevado al cuadrado es: "+ resu)




 