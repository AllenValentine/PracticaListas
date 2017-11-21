"use strict";

var LIST = create();
var MAX_ELEM_LIST = 6;

/**
 * Funcionalidades nuevas
 */

function addNumber(num) {
   var listWi = document.getElementById("list");
   var error = document.getElementById("error");
   error.innerHTML = "";
   try {
      add(LIST, num);
      listWi.innerHTML = toString(LIST);
   } catch (err) {
      error.innerHTML = err;
   }
}
function addNumberAt(num, pos) {
   var listWi = document.getElementById("list");
   var error = document.getElementById("error");
   error.innerHTML = "";
   try {
      addAt(LIST, num, pos);
      listWi.innerHTML = toString(LIST);
   } catch (err) {
      error.innerHTML = err;
   }
}
function getNumber(pos) {
   var position = 0;
   var listWi = document.getElementById("list");
   var error = document.getElementById("error");
   error.innerHTML = "";
   try {
      position = get(LIST, pos);
      listWi.innerHTML = position;
   } catch (err) {
      error.innerHTML = err;
   }
}

function toStringNumber() {
   var listWi = document.getElementById("list");
   var error = document.getElementById("error");
   error.innerHTML = "";
   try {
      listWi.innerHTML = toString(LIST);
   } catch (err) {
      error.innerHTML = err;
   }
}

function indexNumber(num){
   var numpos = 0;
   var listWi = document.getElementById("list");
   var error = document.getElementById("error");
   error.innerHTML = "";
   try {
      if(index(LIST, num) === -1){
         listWi.innerHTML = "El numero " + num + " no esta e la lista " +toString(LIST);
      }else{
         listWi.innerHTML = "El numero " + num + " esta en la lista " + toString(LIST);
      }
   } catch (err) {
      error.innerHTML = err;
   }
}
function removeNumber(pos){
   var number = 0;
   var listWi = document.getElementById("list");
   var error = document.getElementById("error");
   error.innerHTML = "";
   try {
      number = remove(LIST, pos);
      listWi.innerHTML = "El elemento eliminado es " + number;
   } catch (err) {
      error.innerHTML = err;
   }
}
function removeElementNumber(num){
   var listWi = document.getElementById("list");
   var error = document.getElementById("error");
   error.innerHTML = "";
   try {
      if(remove(LIST, num)){
         listWi.innerHTML = "El elemento " + num + " ha sido eliminado";
      }else{
         listWi.innerHTML = "El elemento " + num + " no esta en la lista";
      }
   } catch (err) {
      error.innerHTML = err;
   }
}
function setNumber(num, pos){
   var elem = 0;
   var listWi = document.getElementById("list");
   var error = document.getElementById("error");
   error.innerHTML = "";
   try {
      elem = set(LIST, num, pos);
      listWi.innerHTML = "El elemento actualizado es " + elem;
   } catch (err) {
      error.innerHTML = err;
   }
}


/*FUNCIONES*/
function create() {
   var list = [];
   for (var i = 0; i < MAX_ELEM_LIST; i++) {
      list[i] = Number.NaN;
   }
   return list;
}

function isEmpty(list) {
   var isEmpty = false;
   if (isNaN(list[0])) {
      isEmpty = true;
   }
   return isEmpty;
}

function isFull(list) {
   var isFull = false;
   if (!isNaN(list[MAX_ELEM_LIST - 1])) {
      isFull = true;
   }
   return isFull;
}

function size(list) {
   var length = 0;
   while (length < MAX_ELEM_LIST && !isNaN(list[length])) {
      length++;
   }
   return length;
}

function add(list, elem) {
   elem = parseInt(elem);
   if (isNaN(elem)) {
      throw "El elemento no es un numero";
   }
   if (!isFull(list)) {
      list[size(list)] = elem;
   } else {
      throw "La lista esta llena";
   }
   return size(list);
}
function addAt(list, elem, pos) {
   elem = parseInt(elem);
   if (isNaN(elem)) {
      throw "El elemento no es un numero";
   }
   if (pos > MAX_ELEM_LIST) {
      throw "No se puede añadir fuera de la lista";
   }
   if (!isFull(list)) {
      for (var i = pos; i <= size(list); i++) {
         var aux = list[i];
         list[i] = elem;
         elem = aux;
      }

   } else {
      throw "La lista esta llena";
   }
   return size(list);

}
function get(list, index) {
   var aux = 0;
   if (index >= size(list) || size(list) <= 0) {
      throw "la posicion indicada es mayor que el tamaño de la matriz o esta vacia";
   } else {
      aux = list[index];
   }
   return aux;
}
function toString(list) {
   var str = "";
   if (!isEmpty(list)) {
      var length = size(list);
      for (var i = 0; i < length - 1; i++) {
         str = str + list[i] + " - ";
      }
      str = str + list[i];
   }
   return str;
}
function index(list, num) {
   var aux = -1;
   num = parseInt(num);

   if (isNaN(num)) {
      throw "El elemento no es un numero";
   } else {
      for (var i = 0; i < size(list); i++) {
         if (list[i] == num) {
            aux = i;
         }

      }
   }
   return aux;
}
function lastIndex(list, num) {
   var aux = -1;
   num = parseInt(num);
   if (isNaN(num)) {
      throw "El elemento no es un numero";
   } else {
      for (var i = size(list); i > 0; i--) {
         if (list[i] == num) {
            aux = i;
         }
      }
   }
   return aux;
}
function capacity() {
   return MAX_ELEM_LIST;
}
function firstElement(list) {
   var first;
   if (!isEmpty(list)) {
      first = list[0];
   } else {
      throw "La lista esta vacia.";
   }
   return first;
}

function lastElement(list) {
   var last;
   if (!isEmpty(list)) {
      last = list[size(list) - 1];
   } else {
      throw "La lista esta vacia.";
   }
   return last;
}
function remove(list, pos) {
   var aux;
   var long = size(list);
   if (pos >= long || long <= 0) {
      throw "la posicion indicada es mayor que el tamaño de la matriz o esta vacia";
   } else {
      aux = list[pos];
      for (var j = pos; j < long - 1; j++) {
         list[j] = list[j + 1];
      }
      list[j] = undefined;
   }

   return aux;

}
function removeElem(list, num) {
   var eliminado = false;
   num = parseInt(num);
   if (isNaN(num)) {
      throw "El elemento no es un numero";
   } else {
      for (var i = 0; i < size(list); i++) {
         if (list[i] == num) {
            eliminado = true;
            for (var j = i; j < size(list); j++) {
               list[j] = list[j + 1];
            }
         }
      }
      list[j] = NaN;
   }
   return eliminado;
}

function set(list, num, pos) {
   var aux = 0;
   num = parseInt(num);
   if (isNaN(num) || pos >= size(list)) {
      throw "No es un numero o esta fuera de los limites de la lista";
   } else {
      aux = list[pos];
      list[pos] = num;
   }
   return aux;
}

function testList() {
   try {
      var list = [];
      console.log("Capacidad: " + capacity());
      console.log("Esta vacía: " + isEmpty(list));
      console.log("Longitud: " + size(list));
      for (var i = 0; i < MAX_ELEM_LIST; i++) {
         add(list, Math.random() * 10 + 1);
      }
      console.log("Longitud: " + size(list));
      console.log("Esta llena: " + isFull(list));
      console.log(toString(list));
      console.log("Eliminamos un elemento");
      remove(list, 3);
      console.log(toString(list));
      console.log(size(list));
      console.log("Añadimos un elemento en una posicion");
      console.log(addAt(list, 7, 2));
      console.log(size(list))
      console.log("Posicion de un elemento(si no esta devuelve -1)");
      console.log("IndexOf: " + index(list, 4));
      console.log("LastindexOf: " + lastIndex(list, 4));
      console.log("The first element list: " + firstElement(list));
      console.log("The last element list: " + lastElement(list));
      console.log("Actualizamos un elemento de la lista");
      console.log(set(list, 9, 2));
      console.log("Eliminamos un numero existente en la lista(si no esta devuelve falso y no se elimina)");
      console.log(removeElem(list, 5));
      console.log("El resultado final seria:");
      console.log(toString(list));

   } catch (err) {
      console.log(err);
   }
}
window.onload = testList;




