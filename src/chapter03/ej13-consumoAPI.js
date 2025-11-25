
// Función asíncrona que obtiene los datos del producto
async function obtenerProducto(idProducto) {
  const url = `https://api.escuelajs.co/api/v1/products/${idProducto}`;
  const response = await fetch(url, { method: "GET" });
  const data = await response.json();
  return data;
}

// La función que se supone que debe obtener el título del producto
async function obtenerTitulo(idProducto) {
  const producto = await obtenerProducto(idProducto);
  return producto.title;
}

// Funcion para probar el código
async function test(idProducto) {
  const tituloProducto = await obtenerTitulo(idProducto);
  console.log("El título del producto es: " + tituloProducto);
}


// ejecución del código
test(198);