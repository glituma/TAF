/*
console.log('Hola Mundo');
console.log('Como estan todos...!');
console.log('Estamos ready');
console.warn('Esto es un robo...');
console.error('Mal muy mal');

//debugger;
//!Variables tipo numerico
var edad: number = 20,
  puntos: number = 15;

var total: number = 0;

total = edad * puntos;

console.log(total);
//!fin de la variable tipo numerico

//! Variables de tipo texto
var nombre: string;
var apellido: string;

nombre = 'Gorki';
apellido = 'Lituma';

console.log('Hola ' + nombre + ' ' + apellido);
//! fin de las variables tipo texto

//! Variales Boolena

var esNuevo: boolean = true;
var esCasiNuevo: boolean = false;
var deseaImprimir: boolean = true;
var aceptaDescuento: boolean = 16 + 18 == 33;

console.log('Este Boleano es:', aceptaDescuento);

var juan: string = 'Juan';
var juan2: string = 'Pepe';
var sonIguales: boolean = juan == juan2;

console.log('Los nombres son iguales:', sonIguales);

var sonAmbosVerdaderos: boolean = sonIguales && aceptaDescuento;

console.log('Es resultado final es:', sonAmbosVerdaderos);

var listaNumero1: number = 99;
var listaNumero2: number = 120;

//? == para comparar operaciones si son iguales
//? != para comparar operaciones distintas
//? && nos devuelve un valor verdadero cuando todas las expresiones son verdaderas
//? || nos devuelve un valor verdadero si cualquier expresión es verdadera

var sonLasListasIguales: boolean = listaNumero1 == listaNumero2;
console.log('Las listas son iguales: ', sonLasListasIguales);

var sonLasListasIguales: boolean = listaNumero1 != listaNumero2;
console.log('Las listas son diferentes: ', sonLasListasIguales);

var sonLasListasIguales: boolean = listaNumero1 >= 100 && listaNumero2 >= 100;
console.log('La lista1 y la lista2 son iguales: ', sonLasListasIguales);

var sonLasListasIguales: boolean = listaNumero1 < 100 || listaNumero2 < 100;
console.log('Algunas de las es menor que 100: ', sonLasListasIguales);

//! Fin de variables booleanas

//! Objetos

var persona = {
  nombre: 'Gorki',
  apellido: 'Lituma',
  edad: 37,
  peso: 257,
};

console.log('El alumno es: ', persona.nombre, ' Apellido: ', persona.apellido);

//! fin de objetos

//! Interfaces

interface Personas {
  nombre: string;
  apellido: string;
  edad: number;
  peso: number;
}

var clientes: Personas = {
  nombre: 'Victor',
  apellido: 'Lituma',
  edad: 52,
  peso: 180,
};

var empleados: Personas = {
  nombre: 'Gorki',
  apellido: 'Lit',
  edad: 37,
  peso: 225,
};

console.log(
  'Nuestro primero cliente es: ',
  clientes.nombre + ' ' + clientes.apellido
);
//!Fin de interfaces

//! Any
//! Muy util para recibir datos de una api que se desconoce el tipo de datos
//! que devuelve.

var canciones: any = 'Música';
console.log(canciones);
canciones = 20;
console.log(canciones);

//! Fin de Any

*/

//! Arreglos
var listaDeNombre: Array<string> = ['Maria', 'Juana', 'Linda', 'Carmen'];
console.log(listaDeNombre[1]);

var listaDeNumeros: Array<number> = [15, 48, 96, 23, 758, 8];
console.log(listaDeNumeros[5]);

//! Fin de los arreglos
