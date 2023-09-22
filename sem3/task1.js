"use strict";

/*Напишите функцию getPrototypeChain(obj), которая будет возвращать цепочку прототипов для заданного объекта
obj. Функция должна вернуть массив прототипов, начиная от самого объекта и заканчивая глобальным объектом
Object.prototype.*/

function getPrototypeChain(obj) {
    let arr = [];
    let newObj = Object.getPrototypeOf(obj);
    while (newObj !== null) {
        arr.push(newObj);
        newObj = Object.getPrototypeOf(newObj);
    }
    return arr;
}

const object = [];

console.log(getPrototypeChain(object));;