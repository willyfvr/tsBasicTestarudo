/*
Imagina que tenemos la respuesta de un API
que me devuelve el código de la respuesta numérico (status)
y el mensaje de la respuesta (message)
y la tupla sería [status, message]
los tipos de datos de la tupla serían: [number, string]
*/

let respuesta: [number, string];
respuesta = [200, "EXITOSO"];

console.log("Status: ", respuesta[0]);
console.log("Message: ", respuesta[1]);

// [id: number, password: string, status: boolean]
let usuario: [number, string, boolean];
usuario = [1, "$Admin1234", true]

console.log("ID: ", usuario[0]);
console.log("PASSWORD: ", usuario[1]);
console.log("STATUS: ", usuario[2]);

console.table(usuario);