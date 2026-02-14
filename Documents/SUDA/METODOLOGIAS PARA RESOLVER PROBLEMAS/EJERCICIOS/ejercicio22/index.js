"use strict";
/* crear una funcion que reciba como parametro el numero de elementos
del array permita ingresar al usuario uno a uno los elementos. la funcion debe
devolver el array resultante
*/
// declarar la funcion
function elementos(size){
    let nums = [];
    let i = 0;
    

        while (i < size ){
            let num = Number(prompt("Ingrese el elemento: " ));
            nums.push(num)
            i++;
        }
        return nums;
}
//le pide al usuario 
let cantidad = Number(prompt("Ingrese el tamaño de la array: " ));
let result = elementos(cantidad);
alert(result)



 