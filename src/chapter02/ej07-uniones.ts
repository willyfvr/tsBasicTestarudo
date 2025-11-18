// Uniones
let idPersona: number | string;

idPersona:"aa1";
idPersona: 23;

/* 
Narrowing o Reducción de tipos
------------------------------
Cuando tenemos una variable con un tipo de únion, TypeScript solo permitirá acceder
a los miembros que son comunes a los tipos de la union.
Para trabajar con las propiedades específicas de cada tipo, necesitamos usar una 
técnica llamada NARROWING (reducción de tipos).
*/

imprimirCodigo(idPersona);

// narrowing
function imprimirCodigo(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}