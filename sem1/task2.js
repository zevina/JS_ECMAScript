"use strict";

// Создайте функцию removeDuplicates, которая принимает любое количество аргументов и возвращает новый массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); 
// Ожидаемый результат: [1, 2, 3, 4, 5]

// function removeDuplicates(...args) {
//     return args.filter((el, i) => {
//         return args.indexOf(el) === i
//     });;
// }

function removeDuplicates(...args) {
    return [...new Set(args).values()];
}

const myArray = removeDuplicates(1, 2, 3, 2, 4, 1, 5, 65);
console.log(myArray);