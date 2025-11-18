// Functions

function sumar(a:number, b: number) {
  return a + b;
}

let resultadoSuma: number = sumar(5,8);
console.log("El resultado de la suma es: " + resultadoSuma);

// Funcion that does not return a value

function saludar(nombre: string): void {
  console.log("Hola, ", nombre);
}

saludar("Victor");

function saludarConApellido(nombre: string, apellido?: string): string {
  // const hayApellido = apellido ? " " + apellido : '';
  return `Hola ${nombre}${apellido ? " " + apellido : ''}`;
}

console.log(saludarConApellido("Roberto"));
console.log(saludarConApellido("Ozzy", "Osbourne"));
