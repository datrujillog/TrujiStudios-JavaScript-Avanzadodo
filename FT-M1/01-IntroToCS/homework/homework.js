'use strict';

function BinarioADecimal(num) {
   let decimal = 0;
   let binario = num.toString(); // '1010' // lo paso a string para poder usar el metodo reverse y poder invertir el string
   let binarioInvertido = binario.split('').reverse().join('');  // '0101' // lo invierto para poder usar el metodo charAt y poder recorrerlo de izquierda a derecha y poder usar el metodo pow para poder elevar el numero a la potencia que corresponda segun la posicion del numero en el string

   for (let i = 0; i < binarioInvertido.length; i++) { // recorro el string de izquierda a derecha
      if (binarioInvertido[i] === '1') {  // si el numero es 1, lo elevo a la potencia que corresponda segun su posicion en el string y lo sumo a la variable decimal
         decimal += Math.pow(2, i); // si el numero es 0, no hago nada y sigo recorriendo el string hasta que termine y me devuelva el numero decimal correspondiente pero en base 10 y no en base 2 como el numero que recibi por parametro (num) pero si el numero es 1, lo elevo a la potencia que corresponda segun su posicion en el string y lo sumo a la variable decimal y sigo recorriendo el string hasta que termine y me devuelva el numero decimal correspondiente pero en base 10 y no en base 2 como el numero que recibi por parametro (num)
      }
   }

   return decimal;
}

function DecimalABinario(num) {
   let binario = '';
   let numero = num;

   while (numero > 0) { // mientras el numero sea mayor a 0, voy a seguir dividiendo el numero por 2 y guardando el resto en la variable binario
      binario = (numero % 2) + binario;  // el resto lo guardo en la variable binario y lo voy concatenando a la izquierda del string
      numero = Math.floor(numero / 2); // divido el numero por 2 y lo redondeo hacia abajo para que me devuelva un numero entero y lo guardo en la variable numero
   }

   return binario;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
