"use strict";

var LIST = create();
var MAX_ELEM_LIST = 6;

//Funcionalidades nuevas

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
      numpos = index(LIST, num);
      if(numpos === -1){
         listWi.innerHTML = "El numero " + num + " no esta e la lista ";
      }else{
         listWi.innerHTML = "El numero " + num + " esta en la lista " + index(LIST, num);
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
      if(removeElem(LIST, num)){
         listWi.innerHTML = "El elemento " + num + " ha sido eliminado";
      }else{
         listWi.innerHTML = "El elemento " + num + " no esta en la lista";
      }
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
   var long = size(list);
   if (isNaN(elem)) {
      throw "El elemento no es un numero";
   }
   if (!isFull(list)) {
      if (long == 0) {
         list[0] = elem;
      } else {
         if (list[long - 1] < elem) {
            list[long] = elem;
         } else {
            for (var i = 0; i < long; i++) {
               if (elem <= list[i]) {
                  addPos(list, elem, i);
                  i = long;
               }
            }


         }
      }

   } else {
      throw "La lista esta llena";
   }
   return size(list);
}

function addPos(list, elem, pos) {
   var i;
   var longitud = size(list);
   for (i = longitud; i > pos; i--) {
      list[i] = list[i - 1];
   }
   list[i] = elem;

}
function get(list, index) {
   var aux = 0;
   if (index >= size(list) || size(list) <= 0) {
      throw "la posicion indicada es mayor que el tamaño de la matriz o esta vacia";
   } else {
      for (var i = 0; i < size(list); i++) {
         if (i == index) {
            aux = list[i];
         }
      }
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
   var cont = 0;
   var aux = -1;
   var bandera = false;
   num = parseInt(num);
   if (isNaN(num)) {
      throw "El elemento no es un numero";
   } else {
      while (!bandera || cont != size(list)) {
         if (list[cont] == num) {
            aux = cont;
            bandera = true;
         }
         cont++;
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
   var cont = pos;
   if (pos >= long || long <= 0) {
      throw "la posicion indicada es mayor que el tamaño de la matriz o esta vacia";
   } else {
      aux = list[pos];
      for (var j = pos; j < long; j++) {
         cont++;
         list[j] = list[cont];

      }
      list[j] = NaN;
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

// testeo de las funciones
function testList() {
   try {
      var list = [];
      console.log("Capacidad: " + capacity());
      console.log("Es vacía: " + isEmpty(list));
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
      console.log("El elemento de la posicion 2 es: " + get(list, 2));
      console.log("Posicion de un elemento(si no esta devuelve -1)");
      console.log("IndexOf: " + index(list, 4));
      console.log("The first element list: " + firstElement(list));
      console.log("The last element list: " + lastElement(list));
      console.log("Añadimos un elemento a la lista");
      add(list, 6);
      console.log(toString(list));
      console.log("Eliminamos un elemento de la lista(si no existe devuelve false)");
      removeElem(list, 6);
      console.log(toString(list));
      console.log("El resultado final seria: " + toString(list));

   } catch (err) {
      console.log(err);
   }

}
