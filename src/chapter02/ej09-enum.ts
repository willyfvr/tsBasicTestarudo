/**
 * Definición del ENUM (Enumeración)
 * Es un conjunto de constantes nombradas.
 * Por defecto, los valores numéricos comienzan en 0 y se incrementan en 1.
 */
enum EstadoPedido {
  Inicial,
  EnProceso,
  Enviado,
  Recibido,
}

let estado: EstadoPedido;

estado = EstadoPedido.Enviado;

console.log('Estado: ', estado);

enum EstadoCompra {
  Inicial = 'I',
  Facturado = 'P',
  Devuelto = 'D',
}

let estadoCompra: EstadoCompra;

estadoCompra = EstadoCompra.Facturado;

console.log('Estado Compra: ', estadoCompra);


enum CodigoError {
  OK = 100,
  ErrorRed = 200,
  ErrorBD= 300,
}

let codigo: CodigoError;

codigo = CodigoError.ErrorRed;

console.log('Código de Error: ', codigo);