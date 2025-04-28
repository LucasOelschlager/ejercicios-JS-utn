//PRACTICA 1(CONDICIONALES)

/*Ejercicio 1: Verificación de mayoría de edad
Pedir al usuario su edad mediante prompt y mostrar un mensaje que indique si es mayor o menor
de edad.

let edad = 0;
while (edad === 0) {
  edad = parseInt(prompt("ingrese su edad"));
  if (edad >= 18) {
    alert(" es mayor de edad");
  } else {
    alert("es menor de edad");
  }
}
*/

/*
Ejercicio 2: Clasificador de números
Ingresar un número y clasificarlo como positivo, negativo o cero

let nro = parseInt(prompt("ingrese un numero"));
if (nro < 0) {
  alert("Numero negativo");
} else if (nro === 0) {
  alert("El numero es 0");
} else {
  alert("Numero positivo");
}
  */

/*
Ejercicio 3: Comparar dos números
Pedir dos números al usuario e indicar cuál es mayor, o si son iguales

let nro, nro2;
do {
  nro = parseInt(prompt("Ingrese el primer numero"));
  nro2 = parseInt(prompt("Ingrese el segundo numero"));
} while (nro === 0 && nro2 === 0);

if (nro > nro2) {
  alert(`El numero ${nro} es mayor`);
} else if (nro < nro2) {
  alert(`El numero ${nro2} es mayor`);
} else {
  alert("Son iguales");
}

*/

/*Ejercicio 4: Calculadora de descuentos
Pedir al usuario el precio de un producto. Si cuesta más de $1000, aplicar un 10% de descuento.
Mostrar el precio final.

let product;
do {
  product = parseInt(prompt("Ingrese el precio del producto"));
} while (product <= 0);
if (product > 1000) {
  alert(
    `El producto vale ${product}. Al valer mas de $1000 tiene un descuento del 10%. El total es:  $${
      product - product * 0.1
    }`
  );
} else {
  alert(`El total es: ${product}`);
}
*/

/*Ejercicio 5: Validación de acceso con contraseña
Pedir una contraseña al usuario y validar si coincide con una predefinida. */

//PRACTICA 2 (DO... WHILE)

/* 
let password = "1234";
let intentos = 0;
let input;
do {
  input = prompt("Ingrese la contraseña");
  if (input === password) {
    alert("Ingreso exitoso");
    intentos = 0;
  } else {
    alert("Contraseña incorrecta. Intente nuevamente");
    intentos++;
  }
} while (intentos !== 3 || input === password);

if (intentos === 3) {
  alert("Demasiados intentos fallidos, intente mas tarde");
}
*/

//PRACTICA 2 (DO...WHILE)

/*Ejercicio 1: Ingresar números hasta que sea mayor a 100
Pedir al usuario que ingrese números hasta que ingrese un número mayor a 100. Mostrar
cuántos intentos hizo. 
let nro;
do {
  nro = prompt(
    "Ingrese un numero. Si ingresa un numero mayor a 100 se detendrá la ejecución"
  );
  console.log(`Ingresaste el nro ${nro}`)
} while (nro < 100);
*/

/*
Ejercicio 2: Contraseña correcta
Solicitar una contraseña hasta que el usuario escriba la correcta ("secreta123").
Mostrar un mensaje de éxito.
 

let password = "secreta123";
let input;
do {
  input = prompt("Ingrese la contraseña");
  if (input === password) {
    alert("Inicio de sesión exitoso");
  } else {
    alert("Contraseña incorrecta, intente nuevamente");
  }
} while (input !== password);
*/

/*Ejercicio 3: Ingresar números positivos y mostrar suma
Pedir al usuario números positivos y acumularlos. Finalizar cuando se ingrese un
número negativo y mostrar la suma total. 

let input;
let acc = 0;

do {
  input = parseInt(
    prompt(
      "ingrese un numero para sumar. Para finalizar, ingrese un numero negativo"
    )
  );
  if (input >= 0) {
    acc += input;
  }
} while (input > 0);

alert(`La suma total de los números ingresados es ${acc}`);
*/

/*Ejercicio 4: Menú simple
Mostrar un menú con opciones hasta que el usuario elija salir (opción 3). Mostrar qué
opción eligió. 

let op;

console.log(`Menu de opciones: \n 
    Ingrese el numero correspondiente \n
    Configuracion: 1\n
    Datos: 2\n
    Salir: 3
    `);

do {
  op = parseInt(prompt("Ingrese una opcion"));
  switch (op) {
    case 1:
      console.log("Ingresaste la opcion 1");
      break;
    case 2:
      console.log("Ingresaste la opcion 2");
      break;
    case 3:
      console.log("Saliendo...");
      break;
    default:
      console.log("Ingresaste una opcion no valida, Ingresa una nuevamente");
      break;
  }
} while (op !== 3);
*/

/*Ejercicio 5: Validar número dentro de un rango
Pedir un número entre 1 y 10 hasta que el usuario lo haga correctamente. Mostrar el
número ingresado. 

let nroIngresado;

do {
  nroIngresado = parseInt(prompt("Ingrese un numero entre 1 y 10"));
  if (nroIngresado > 1 && nroIngresado <= 10) {
    alert(`Ingresaste el numero ${nroIngresado}`);
  } else {
    alert("Ingresaste un numero no válido");
  }
} while (nroIngresado < 1 || nroIngresado > 10);

*/

//PRACTICA 3(FOR)
/*Ejercicio 1: Contar del 1 al 10
Mostrar los números del 1 al 10 en consola. 
for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}
  */

/*
Ejercicio 2: Sumar los primeros 10 números naturales
Calcular y mostrar la suma de los números del 1 al 10.
 
let acc = 0;
for (let i = 0; i < 10; i++) {
  acc += i + 1;
}
console.log(`La suma de los primeros 10 numeros naturales es ${acc}`);
*/

/*Ejercicio 3: Mostrar tabla de multiplicar del 5
Pedir al usuario un número y mostrar su tabla de multiplicar del 1 al 10.

for (let i = 0; i < 10; i++) {
  console.log((i + 1) * 5);
}

let acc = 0;

for (let i = 0; i < 20; i++) {
  if ((i + 1) % 2 === 0) {
    acc += i + 1;
  }
}

console.log(`La suma de los numeros pares del 1 al 20 es ${acc}`);
 */

/*Ejercicio 5: Mostrar cuenta regresiva
Mostrar una cuenta regresiva del 10 al 1. 
for (let i = 10; i > 0; i--) {
  console.log(i);
}

*/
