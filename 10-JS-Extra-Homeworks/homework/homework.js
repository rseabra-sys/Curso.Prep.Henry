// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  /*  listo y funciona 
  var nwarray = [];
    for (var clave in objeto) {
       nwarray.push([clave, objeto[clave]]);
    }
    return nwarray;
*/
// Otro methodo
  var obj = Object.entries(objeto);
  return obj;

}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var resultado = {}
  for (var i=0; i<string.length; i++) {
    if (!resultado[string[i]]) {
      resultado[string[i]]=0;
    }
      resultado[string[i]] = resultado[string[i]]+1;
  }
    return resultado;
  }

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var string1 = "";
  var string2 = "";
   for (var i=0; i < s.length; i++) {
      if (s[i] === s[i].toUpperCase()) {
        string1 = string1 + s[i];
      } else {
        string2 = string2 + s[i];
      }
    }
    return string1 + string2;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var strInv = "";
  var array = [];
    for (var i=str.length-1; i>=0; i--) {
      strInv += str[i];
    }
    strInv = strInv.split(" ")  // ["!esolc", si]
    for (var i=strInv.length-1; i>=0; i--) {
        array.push(strInv[i]);
    }
    return array.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroInvertido = "";
  var str = numero.toString();
    for (var i=str.length-1; i>=0; i--) {
      numeroInvertido += str[i];
    }
    numeroInvertido = parseInt(numeroInvertido);
    if (numero === numeroInvertido)  {
      return "Es capicua";
    } else {
      return "No es capicua";
    } 
  }


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var arr = cadena.split("");
  function  removeItem(arr,item) {
     var indice = arr.indexOf(item);
     if (indice !== -1) {
        arr.splice(indice,1);
     }
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "a" || 
        arr[i] === "b" || 
        arr[i] === "c") {
      removeItem(arr,"a");
      removeItem(arr,"b");
      removeItem(arr,"c");
    }
  } 
  return arr.join("");
/*
 arr = arr.filter(function (el) {
  return  el !== "a" && el !== "b" && el !== "c";
  });
  return arr.join("");
*/
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var sort = arr.sort(function (a,b){
    if (a.length > b.length) {
      return 1;
    }
    if (a.length < b.length) {
       return -1;
    }
     return 0;
    });
    return sort;
  }
  
function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var array = [];
  for (var i=0; i < arreglo1.length; i++) {
    for (var j=0; j < arreglo2.length; j++) {
      if(arreglo1[i] === arreglo2[j]) {
         array.push(arreglo1[i]);
      }
    }
  }
  array.sort(function(a, b){
    return a - b;
  });
  return array;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

