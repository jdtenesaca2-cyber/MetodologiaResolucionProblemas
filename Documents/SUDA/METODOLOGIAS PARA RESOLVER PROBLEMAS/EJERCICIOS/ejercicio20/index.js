"use strict";

/* crear una funcion que muestre en un
alert todos los del array enviado como argumento*/

//DECLARAR
//1            2        
function showArray(nums){
    let i = 0;
    while (i < array.length){
        if (nums[i] === 1){
            alert(nums[i]); 
        };
        i++;
    } 
}  

let array = [0,1,0,1,0]
showArray(array);

//permite contar cuantos elementos tengo
array.length