"use strict";

/*Создайте обычную функцию add, которая будет складывать this.a и this.b и возвращать значение, которое получим.
Создать объект, в котором будут свойства `a` и `b`, со значениями в виде чисел (любые значения).
Необходимо вызвать функцию add так, чтобы она правильно отработала с нашим объектом.*/

function add(c, d) {
    return this.a + this.b + c + d;
};

const numbers = {
    a: 5,
    b: 10,
};

const arr = [1, 4];

console.log(add.call(numbers, ...arr));;
console.log(add.apply(numbers, [1, 4]));;

const res = add.bind(numbers);
console.log(res(1, 4));