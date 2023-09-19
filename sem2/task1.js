"use strict";

/*Создайте объект Person, представляющий человека, со следующими свойствами: name, age и gender. 
Добавьте также методы introduce и changeName. 
Метод introduce должен выводить информацию о человеке, включая его имя, возраст и пол. 
Метод changeName должен изменять имя человека на новое заданное значение.

Person.name = "John";
Person.age = 25;
Person.gender = "male";
Person.introduce(); // Ожидаемый результат: My name is John. I'm 25 years old and I identify as male.
Person.changeName("Mike");
Person.introduce();*/

const person = {
    name: "John",
    age: 25,
    gender: "male",

    introduce() {
        console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`);
    },

    changeName(newName) {
        this.name = newName;
    },

}

person.name = "John";
console.log(person.name);
person.age = 25;
console.log(person.age);
person.gender = "male";
console.log(person.gender);

person.introduce();
person.changeName("Mike");
person.introduce();
