/*
Interface:

Define LA FORMA de un objeto.
Es ideal para describir objetos, clases y funciones.
Es como "un contrato" de cómo debe lucir un objeto.
*/

interface Producto {
  nombre: string;
  precio: number;
  hasStock: boolean;
  color?: string;
}

const miProducto: Producto = {
  nombre: 'Computadora',
  precio: 1000000,
  hasStock: true,
  color: 'Black',
};
