/*
Aserciones de Tipo en TypeScript

Son una forma de indicarle al compilador 
que conocemos mejor el TIPO de nuestra variable
de lo que el compilador podría inferir.
*/

let message: unknown;

message = 'Hola Mundo!';

// let resultado = message.toUpperCase()  // muestra error porque no reconoce el tipo

// entonces aseguramos que el valor es estring de esta forma

let resultado = (message as String).toUpperCase();

// otra forma de hacer esto es:  let resultado = (<string>message).toUpperCase();

console.log('El resultado es: ', resultado);
