/* 
Tenemos un objeto persona que tiene las propiedades:
- ID: númerico, no es modificable
- Nombre: string
- Email: string y es opcional
- esAdmin: boolean
*/

type Persona = {
  readonly id: number, // readOnly significa que no se puede modificar.
  nombre: string,
  email?: string, // el signo "?" indica que es OPCIONAL
  esAdmin: boolean
}

const persona1: Persona = {
  id: 1,
  nombre: "Victor",
  email: "victor.fvr@gmail.com",
  esAdmin: false
};

const persona2: Persona = {
  id:2,
  nombre: "Juan",
  esAdmin: true
};

persona2.nombre = "Robertito";

console.table(persona1);
console.table(persona2);