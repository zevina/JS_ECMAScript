"use strict";

/*Необходимо получить список пользователей с сервера, отсортировать их в алфавитном порядке и вывести в тег ul (
его необходимо создать в html) на странице данный список пользователей.
API: https://jsonplaceholder.typicode.com/users */

const url = 'https://jsonplaceholder.typicode.com/users';

loadUsers(url);

async function loadUsers(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      let users = await response.json();
      users.sort((a, b) => a.name.localeCompare(b.name));  // посимвольное сравнение строк => сортировка массива по текстовым значениям
      console.log(users);
    }
  } catch (error) {
    console.error(error);
  }
}