'use strict'; 


let num = [5,7,4,9,8,10,15]
let aux;

for (let i = 0; i<num.length; i++){
    
    for (let j =(i+1); j<num.length; j++){

        if (num [j]> num[i]){
            aux = num [i];
            num[i] = num [j];
            num [j] = aux;
        }
    }
    alert ("Wait ..."+num);
}

// 02 04 08
//24 28
//48