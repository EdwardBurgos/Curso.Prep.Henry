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
  let arrayClave = Object.keys(objeto);
  let arrayValor = Object.values(objeto);
  let arrayFinal = [];
  for (let i = 0; i < arrayClave.length; i++) {
    let elementoArrayFinal = [];
    elementoArrayFinal.push(arrayClave[i]);
    elementoArrayFinal.push(arrayValor[i]);
    arrayFinal.push(elementoArrayFinal);
  }
  return arrayFinal;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let nuevoObjeto = {};
  for (let i = 0; i < string.length; i++) {
    let contador = 0;
    let propiedad = string[i];
    for (let j = 0; j < string.length; j++) {
      if (string[i] === string[j]) {
        contador += 1;
      }
    }
    nuevoObjeto[propiedad] = contador;
  }
  return nuevoObjeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let nuevaPalabra = '';
  let mayusculas = '';
  let minusculas = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      mayusculas += s[i];
    }
    if (s[i] !== s[i].toUpperCase()) {
      minusculas += s[i];
    }
  }
  nuevaPalabra = mayusculas + minusculas;
  return nuevaPalabra;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let stringFinal = '';
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let nuevoString = '';
    for (let j = arr[i].length - 1; j >=0 && j < arr[i].length; j--) {
      nuevoString += arr[i][j];
    }
    arr[i] = nuevoString;
    if (i === arr.length - 1) {
      stringFinal += arr[i];
    } else {
      stringFinal += arr[i] + ' ';
    }
  }
  return stringFinal;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numeroString = numero.toString();
  let nuevoString = '';
  for (let i = numeroString.length - 1; i >= 0 && i < numeroString.length; i--) {
    nuevoString += numeroString[i];
  }
  if (nuevoString === numeroString) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let sina = cadena.replace(/a/gi,'');
  let sinb = sina.replace(/b/gi,'');
  let sinc = sinb.replace(/c/gi,'');
  return sinc;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (i === j) { 
        continue;
      }
      if (arr[i].length > arr[j].length) {
        let menor = arr[j];
        let mayor = arr[i];
        arr[i] = menor;
        arr[j] = mayor;
      }
      if (arr[i].length === arr[j].length) {
        continue;
      }
     
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let interseccion = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        interseccion.push(arreglo1[i]);
      }
    }
  }
  return interseccion;
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

