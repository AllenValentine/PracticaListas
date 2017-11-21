"use strict";

var list = create();
var MAX_ELEM_LIST = 6;

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
        list.push(elem);
    } else {
        throw "La lista esta llena";
    }
    return size(list);
}

function addAt(list, elem, index) {
    elem = parseInt(elem);
    if (isNaN(elem)) {
        throw "El elemento no es un numero";
    }
    if (index > MAX_ELEM_LIST) {
        throw "No se puede añadir fuera de la lista";
    }
    if (!isFull(list)) {
        list.splice(index, 0, elem);

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

function index(list, elem) {
    var aux = -1;
    elem = parseInt(elem);
    if (isNaN(elem)) {
        throw "El elemento no es un numero";
    } else {
        aux = list.indexOf(elem);
    }
    return aux;
}

function lastIndex(list, elem) {
    var aux = -1;
    elem = parseInt(elem);
    if (isNaN(elem)) {
        throw "El elemento no es un numero";
    } else {
        aux = list.lastIndexOf(elem);
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
        last = list[list.length - 1];
    } else {
        throw "La lista esta vacia.";
    }
    return last;
}

function remove(list, index) {
    var aux;
    var long = size(list);
    var cont = index;
    if (index >= long || long <= 0) {
        throw "la posicion indicada es mayor que el tamaño de la matriz o esta vacia";
    } else {
        aux = list[index];
        list.splice(index, 1);
    }

    return aux;

}

function removeElem(list, elem) {
    var eliminado = false;
    elem = parseInt(elem);
    if (isNaN(elem)) {
        throw "El elemento no es un numero";
    } else {
        for (var i = 0; i < size(list); i++) {
            if (list[i] == elem) {
                list.splice(i, 1);
                i = size(list);
                eliminado = true;
            }
        }
    }
    return eliminado;
}

function toString(list) {
    return list.join(" - ");
}

function set(list, elem, index) {
    var aux = 0;
    elem = parseInt(elem);
    if (isNaN(elem) || index >= size(list)) {
        throw "No es un numero o esta fuera de los limites de la lista";
    } else {
        aux = list[index];
        list[index] = elem;
    }
    return aux;
}


function testList() {
    try {
        console.log("Capacidad: " + capacity(list));
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
        console.log("Añadimos un elemento en una posicion");
        console.log(addAt(list, 5, 2));
        console.log(toString(list));
        console.log("Posicion de un elemento(si no esta devuelve -1)");
        console.log("IndexOf: " + index(list, 4));
        console.log("LastindexOf: " + lastIndex(list, 4));
        console.log("The first element list: " + firstElement(list));
        console.log("The last element list: " + lastElement(list));
        console.log("Actualizamos un elemento de la lista");
        console.log(set(list, 5, 2));
        console.log("Eliminamos un numero existente en la lista(si no esta devuelve falso y no se elimina)");
        console.log(removeElem(list, 5));
        console.log("El resultado final seria:");
        console.log(toString(list));
    } catch (err) {
        console.log(err);
    }
}
window.onload = testList;



