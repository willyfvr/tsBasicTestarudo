/*
¿Qué son los tipos literales?

En TypeScript, un tipo literal es un tipo que solo acepta un valor específico.
En otras palabras, no se limita a tipos genéricos como string o number,
sino a valores exactos. Son muy útiles para definir un conjunto fijo y limitado de valores,
lo que mejora la seguridad y la legibilidad del código.
Imagina que en lugar de decir "esto es una cadena de texto", dices
"esto es exactamente la cadena de texto rojo"
*/

type TallaCamisa = 'small' | 'medium' | 'large'; // type es lo que se le dice "un alias"

let miTalla1: TallaCamisa = 'medium';
miTalla1 = 'small';
miTalla1 = 'pepe'; // muestra error porque no esta dentro de los tipos definidos para TallaCamisa
