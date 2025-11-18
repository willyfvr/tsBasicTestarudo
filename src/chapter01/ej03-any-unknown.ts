// TYPE ANY
/**
 * Es el tipo más permisivo en TypeScript.
 * Básicamente, desactiva la verificación de tipos para la variable a la que se le asigna. Una variable de tipo any
 * puede aceptar cualquier valor y se pueden realizar operaciones sobre ella sin que TypeScript emita errores en
 * tiempo de compilación.
 * Es útil para migrar proyectos JavaScript existentes o cuando la información de tipo no está dispobible. Sin embargo,
 * su uso excesivo puede anular los beneficios de TypeScript.
 */

let lastName1: any;
lastName1 = 'Fattor';
// lastName1 = 10: I can to assign a number
console.log('Last Name is: ' + lastName1.toUpperCase());
console.log('Last Name long: ' + lastName1.length);

// TYPE UNKNOWN
/**
 * Es un tipo más seguro que any. Una variable de tipo unknown también puede aceptar cualquier valor,
 * pero a diferencia de any, no podes realizar directamente operaciones o acceder a propiedades de una variable unknown
 * sin antes verificar su tipo. Esto fuerza al desarrollador a realizar una verificación de tipo (conocida como  "type narrowing" o
 * reducción de tipo) antes de interactuar con el valor, lo que hace que el código sea más seguro y predecible.
 */

let lastName2: unknown;
lastName2 = 'Ríos';
//lastName1 = 10; // I can to assign a number

if (typeof lastName2 === "string") {
  console.log('Last Name is: ' + lastName2.toUpperCase());
  console.log('Last Name long: ' + lastName2.length);
}