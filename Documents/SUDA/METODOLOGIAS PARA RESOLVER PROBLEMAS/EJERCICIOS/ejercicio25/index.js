'use strict'; 
// Modo estricto: evita errores comunes

let phoneText = "0877852635";
// STRING: número telefónico

let phoneArray = phoneText.split('');
// split(): STRING → ARRAY de caracteres

let startDigit = phoneArray.slice(0, 1);
// slice(): obtiene el primer dígito

let restDigits = phoneArray.slice(1);
// slice(): obtiene los demás dígitos

let numberList = restDigits.map(d => Number(d));
// map() + Number(): STRING → NUMBER

let plusOneList = numberList.map(n => n + 1);
// map(): suma 1 a cada número

let fullPhoneArray = startDigit.concat(plusOneList);
// concat(): une arreglos

let newPhoneText = fullPhoneArray.join('');
// join(): ARRAY → STRING

alert("Teléfono final: " + newPhoneText);
// Muestra el resultado
