// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Hola Henry';
console.log('Variable string es: ' + nuevaString);

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 123456;
console.log('Variable numerica es: ' + nuevoNum);

// Crea una variable booleana:
const nuevoBool = true;
console.log('Variable Booleana es: ' + nuevoBool);

// Resuelve el siguiente problema matemático:
   const nuevaResta = 10 - 5 === 5;
//const nuevaResta = 10 - 5;
//console.log('Variable Resta (10 - 5) es: ' + nuevaResta);

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;
//const nuevaMultiplicacion = 10 * 4;
//console.log('Variable Multiplicacion (10 * 4) es: ' + nuevaMultiplicacion);

// Resuelve el siguiente problema matemático:
   const nuevoModulo = 21 % 5 === 1;
// const nuevoModulo = 21 % 5;
//console.log('Variable problema matemático (21 % 5) es: ' + nuevoModulo);

// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(a) {
  // "Return" la string provista: str
  // Tu código:
  return(a);
}
console.log(devolverString('Function1 str: Saludos Cordiales!'));

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var resultadoSuma = x + y;
  return (resultadoSuma);
}
console.log('Function2 + : (4,5) resultado es: ' + suma(4,5));



function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var resultadoResta = x - y;
  return (resultadoResta);
}
console.log('Function3 - : (8,6) resultado es: ' + resta(8,6));

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var resultadoMultip = x * y;
  return (resultadoMultip);    
}
console.log('Function4 * : (14,6) resultado es: ' + multiplica(14,6));

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var resultadoDivide = x / y;
  return (resultadoDivide);
}
console.log('Function5 / : (20,5) resultado es: ' + divide(20,5));

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x==y) {
    return true;
  }
  return false;
}
console.log('Function6 == : (20,20) resultado es: ' + sonIguales(20,20));

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length == str2.length) {
    return true;
  }
  return false;    
}
console.log('Function7 length : (Hola1,Hola2) resultado es: ' + tienenMismaLongitud('Hola1','Hola2'));

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90) {
    return true;
  }
  return false;    
}
console.log('Function8 < : (53) resultado es: ' + menosQueNoventa(53));

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50) {
     return true;
  }
  return false;    
}
console.log('Function9 > : (85) resultado es: ' + mayorQueCincuenta(85));

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var resultado = x % y;
  return resultado;
}
console.log('Function10 % : (10,3) resultado es: ' + obtenerResto(10,3));

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  var resultado = num % 2;    
  if (resultado == 0) {
      return true;
  }
  return false;    
}
console.log('Function11 par : (10) resultado es: ' + esPar(10));

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  var resultado = num % 2;    
  if (resultado != 0) {
      return true;
  }
  return false;    
}
console.log('Function12 impar : (15) resultado es: ' + esImpar(15));    

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var resultado = Math.pow(num,2);
  return resultado;
}
console.log('Function13 elevado 2 : (5) resultado es: ' + elevarAlCuadrado(5));    

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var resultado = Math.pow(num,3);
  return resultado;
}
console.log('Function14 elevado 3 : (5) resultado es: ' + elevarAlCubo(5));       

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var resultado = Math.pow(num,exponent);
  return resultado;
}
console.log('Function15 elevar : (8,2) resultado es: ' + elevar(8,2));

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var resultado = Math.round(num); // ceil = redondea al entero mas proximo.
  return resultado;
}
console.log('Function16 round (20.58):  resultado es: ' + redondearNumero(20.5));

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var resultado = Math.ceil(num);
  return resultado;
}
console.log('Function17 round (188.57):  resultado es: ' + redondearHaciaArriba(188.57));    

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  var resultado = Math.random();
  return resultado;
}
console.log('Function18 Random: resultado es: ' + numeroRandom()); 

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false

  if (numero == 0) {
		resp = false;
  } else if (numero > 0) {
		resp = 'Es positivo';
	} else {
		resp = 'Es negativo';
	}

    return resp;
}
console.log('Function19 9: resultado es: ' + esPositivo(-9)); 

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
	var resp = str +'!';
    return resp;  
  }
console.log('Function20 !: resultado es: ' + agregarSimboloExclamacion('Saludos Henry')); 
  
function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
    var resp = nombre + ' ' + apellido;
    return resp;
}
 
console.log('Function21 combinar: resultado es: ' + combinarNombres('Richard','Seabra'));

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var resp = "Hola" + ' ' + nombre + '!';
  return resp;
}
console.log('Function22 resultado es: ' + obtenerSaludo('Richard')); 

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var area = ancho * alto;
  return(area);
}
console.log('Function23 rectangulo, resultado es: ' + obtenerAreaRectangulo(4,2)); 

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var perimetro = 4 * lado;
  return perimetro;
}    
console.log('Function24 perimetro (4), el valor es ' + retornarPerimetro(4));

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  var area = (base * altura)/2;
  return(area);
}
console.log('Function25 triangulo, resultado es: ' + areaDelTriangulo(4,2));     

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var dolar = 1.20;
	var resp = euro * dolar;
	return resp;
}
console.log('Function26 Euro/Dolar, resultado es 5: ' + deEuroAdolar(5));  

function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //Escribe tu código aquí
  var resp;
 
  if (letra.length > 1) {
     resp = "Dato incorrecto";
  } else {
      if ((letra.toUpperCase() == 'A') || (letra.toUpperCase() == 'E') || (letra.toUpperCase() == 'I') || (letra.toUpperCase() == 'O') || (letra.toUpperCase() == 'U')) {
        resp = "Es vocal";
      } else {
        resp = "No es vocal";
      }	
  } 		
  return resp;
}
console.log('Function27 esVocal, resultado es : ' + esVocal('E')); 


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
