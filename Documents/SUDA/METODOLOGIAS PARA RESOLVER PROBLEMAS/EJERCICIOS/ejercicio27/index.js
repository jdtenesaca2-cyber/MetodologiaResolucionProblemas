'use strict'; 

let num = [0,2,4,8]

for (let i = 0; i<num.length; i++){
    for (let j =i+1; j<num.length; j++){
        alert(num[i]+""+num[j]);
    }
}

// 02 04 08
//24 28
//48