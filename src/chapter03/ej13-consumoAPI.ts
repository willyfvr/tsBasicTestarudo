// Especificar las propiedades del response
// CONTRATO

interface ProductAPI {
  id: number;
  title: string;
  slug?: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    slug?: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
  images: string[];
  creationAt: string;
  updatedAt: string;
}

// Función asíncrona que obtiene los datos del producto
async function obtenerProducto(idProducto: number): Promise<ProductAPI> {
  const url: string = `https://api.escuelajs.co/api/v1/products/${idProducto}`;
  const response = await fetch(url, { method: 'GET' });
  const data: ProductAPI = await response.json();
  return data; // retorna el objeto del producto
}

// La función que se supone que debe obtener el título del producto
async function obtenerTitulo(idProducto: number): Promise<string> {
  const producto = await obtenerProducto(idProducto);
  return producto.title;
}

// Funcion para probar el código
async function test(idProducto: number) {
  const tituloProducto = await obtenerTitulo(idProducto);
  console.log('El título del producto es: ' + tituloProducto);
}

// ejecución del código
test(198);
