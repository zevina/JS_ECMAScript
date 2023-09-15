"use strict";

// 1. Напишите функцию getEvenNumbers, которая принимает массив чисел в качестве аргумента и возвращает новый массив, содержащий только четные числа.
// 2. Задача: Напишите функцию calculateAverage, которая принимает массив чисел в качестве аргумента и возвращает среднее значение этих чисел.
// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в качестве аргумента и возвращает новую строку, в которой первая буква каждого слова является заглавной.


function getEvenNumbers(arr) {
    return arr.filter(item => item % 2 === 0)
}
const myArr = [1, 2, 3, 4, 5, 6];
const evenArr = getEvenNumbers(myArr);

// console.log(evenArr);

function calculateAverage(arr) {
    return arr.reduce((sum, el) => sum + el, 0) / arr.lenght;
}

console.log(calculateAverage(myArr));