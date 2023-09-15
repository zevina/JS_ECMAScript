"use strict";

// 1. Создайте функцию mergeArrays, которая принимает два массива и возвращает новый массив, содержащий все элементы из обоих массивов. 
// Используйте spread оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); 
// Ожидаемый результат: [1,2, 3, 4, 5, 6]

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const resArray = mergeArrays(array1, array2);

console.log(resArray);