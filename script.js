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
