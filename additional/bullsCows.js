"use strict";

startGame();

function startGame() {
    let riddle = getRandomNumberAsArray();
    while (true) {
        let answer = prompt("Угадайте 4-х значное число").split("");
        if (!checkIfArrayIsUnique(answer)) {
            alert(`Число не должно содержать повторяющиеся цифры! \nВы ввели: ${answer.join("")}`);
            continue;
        }
        let result = getBullAndCowsCount(riddle, answer);
        alert(`Ваш ответ: ${answer.join("")}\n  быков: ${result.bullsCount} коров: ${result.cowsCount}\n`);
        if (riddle.join("") === answer.join("")) {
            alert(`Вы победили!\nЗагадка: ${riddle.join("")}`);
            break;
        }
    }
}

function checkIfArrayIsUnique(answer) {
    return answer.length === new Set(answer).size;
}

function getRandomNumberAsArray() {
    let generated = String(Math.random() * 100000000000000);
    let result = [];
    for (const value of generated) {
        if (!result.includes(value)) {
            result.push(value);
        }
        if (result.length === 4) {
            return result;
        }
    }
}

function getBullAndCowsCount(riddle, answer) {
    let bullsCount = getBullsCount(riddle, answer);
    let cowsCount = getCowsCount(riddle, answer);
    return {
        bullsCount: bullsCount,
        cowsCount: cowsCount - bullsCount,
    };
}


function getBullsCount(riddle, answer) {
    let count = 0;
    for (let i = 0; i < riddle.length; i++) {
        if (riddle[i] === answer[i]) {
            count++;
        }
    }
    return count;
}

function getCowsCount(riddle, answer) {
    let count = 0;
    for (let value of riddle) {
        if (answer.includes(value)) {
            count++;
        }
    }
    return count;
}