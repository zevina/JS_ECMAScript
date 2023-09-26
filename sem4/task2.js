"use strict";

/*
У вас есть список задач, которые необходимо выполнить в определенном порядке. 
Каждая задача должна быть выполнена через определенный промежуток времени, заданный в миллисекундах. 
Вам необходимо написать функцию, которая принимает список задач и интервал времени,
а затем выполняет каждую задачу через определенный промежуток времени.

const tasks = [
  { name: 'task1', time: 1000 },
  { name: 'task2', time: 2000 },
  { name: 'task3', time: 3000 },
  { name: 'task4', time: 4000 },
  { name: 'task5', time: 5000 },
]; 
*/

let i = 0;

function execTasks(tasks) {
  const { name, time } = tasks[i]; //деструктуризация
  setTimeout(() => {
    console.log(name);
    i++;
    if (i < tasks.length) {
      execTasks(tasks);
    }
  }, time);
}

const tasks = [
  { name: 'task1', time: 1000 },
  { name: 'task2', time: 2000 },
  { name: 'task3', time: 3000 },
  { name: 'task4', time: 4000 },
  { name: 'task5', time: 5000 },
];

execTasks(tasks);