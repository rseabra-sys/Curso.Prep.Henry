// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];  
}
devolverPrimerElemento(['Lunes', 'Martes', 'Miercoles', 'Jueves']);


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1];
}
devolverUltimoElemento(['Lunes', 'Martes', 'Miercoles', 'Jueves']);


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}
obtenerLargoDelArray(['Lunes', 'Martes', 'Miercoles', 'Jueves']);


function incrementarPorUno(arrayNumerico) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var otroArray = [];
  
  for (var i = 0; i < arrayNumerico.length; i++) {
    console.log('arrayNumerico = ' + arrayNumerico[i]);
	  otroArray[i] = arrayNumerico[i] + 1;
	  console.log('otroArray = ' + otroArray[i]);
  }
  return otroArray;
}
incrementarPorUno([10,20,30,40]);


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
    array.push(elemento);
    return array;
}
agregarItemAlFinalDelArray([10,20,30,40],5);


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}
agregarItemAlComienzoDelArray([10,20,30,40],5);


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

    return palabras.join(' ');
}
dePalabrasAFrase(['Hello','world!!']);

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
    
  for (var i = 0; i < array.length; i++) {

    if (array[i] === elemento) {
        return true;
    }    
  }
  return false;   
}
arrayContiene([10,20,30,40],20);

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var total=0;
  for (var i = 0; i < numeros.length; i++) {

    total = total + numeros[i];
  }
  return total;   
}
agregarNumeros([10,20,30,40]);  


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var total=0;
  for (var i = 0; i < resultadosTest.length; i++) {

    total = total + resultadosTest[i];
  }
  return total/resultadosTest.length;   
}
promedioResultadosTest([10,20,30,40]);  


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var maximo_numero = numeros[0];
  for (var i = 0; i < numeros.length; i++) {

    if (numeros[i] > maximo_numero) {
      maximo_numero = numeros[i];
    }
  }
  return maximo_numero;   
}
numeroMasGrande([10,20,30,40]);  


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  /* Por favor, verificar esta opcion!! 
  var total_multip = 0;
  if (arguments.length === 0) {
      return total_multip;
  } else if (arguments.length > 0) {
      for (var i = 0; i < arguments.length; i++) {
        total_multip = total_multip * arguments[i];
      }
      return total_multip;
  }
  */
  var total_multip = 1;
  if (arguments.length < 1) return 0;

      for (var i = 0; i < arguments.length; i++) {
        total_multip = total_multip * arguments[i];
      }
      return total_multip;
}
multiplicarArgumentos();  


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contador = 0;

  for (var i = 0; i < arreglo.length; i++) {

    if (arreglo[i] > 18) {
      contador = contador + 1;
    }
  }
  return contador;
}
cuentoElementos([10,20,30,40,1,2,3,4,5,6,7,8,9,15,16,17,18,19,20]);  


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  // 1 domingo, 2 lunes, 3 martes, 4 miercoles, jueves 5, viernes 6, 7 sabados

    if (numeroDeDia === 1 || numeroDeDia === 7) {
      return 'Es fin de semana';
    } else {
      return 'Es dia Laboral';
    }
} 
diaDeLaSemana([1,2,3,4,5,6,7]);  

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var xvariable = n.toString();
  if (xvariable.charAt(0) === '9') {
    return true;
  } else {
    return false;
  }
  
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
  for (var i = 0; i < arreglo.length - 1; i++) {

    if (arreglo[i] !== arreglo[i + 1]) {
      return false;
    }
  }
  return true;
}
todosIguales([10,20,30,40,19,20]);  


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var newArray = [];
  for (var i = 0; i < array.length; i++) {

    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      newArray.push(array[i]);
    } 
  }
  if (newArray.length < 3) {
    return "No se encontraron los meses pedidos";
  } else {
    return newArray;
  }
  
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var mayorArray = [];
  
  for (var i = 0; i < array.length; i++) {

    if (array[i] > 100) {
      mayorArray.push(array[i]);
    }
  }
  return mayorArray;
}
mayorACien([70,90,100,200,300,400]);

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var newArray = [];
  
  for (var i = 0; i < 10; i++) {
      numero = numero + 2;
      if (numero === i) {
         break;
      } else {
        newArray.push(numero);
      }
  }

  if (i < 10) {
    return "Se interrumpió la ejecución";
  } else {
    return newArray;
  }

}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var newArray = [];
  
  for (var i = 0; i < 10; i++) {

      if (i === 5) {
         continue;
      } else {
        numero = numero + 2;
        newArray.push(numero);
      }
  }
  
  return newArray;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
