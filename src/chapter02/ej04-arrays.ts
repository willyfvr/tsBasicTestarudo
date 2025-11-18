let frutas: string[] = ["Manzana", "Naranja", "Pomelo"];
let numeros: number[] = [10, 9, 8, 7];
let calificaciones: Array<number> = [2,1,0]

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);



calificaciones.forEach(el => {
  console.log("La calificación es: " + el);
});
