"use strict";

/*Создайте объект Animal со свойством name и методом eat(), который выводит сообщение о том, что животное ест. 
Создайте объект Dog со свойством name и методом bark(), который выводит сообщение о том, что собака лает. 
Используйте одалживание метода eat() из объекта Animal для объекта Dog, чтобы вывести сообщение о том, что собака ест.

// Одалживание метода eat() из объекта Animal к объекту Dog
Dog.eat = Animal.eat;
Dog.eat(); // Вывод: Rex is eating.*/

const animal = {
    name: "animal",

    eat() {
        console.log(`${this.name} is eating.`);
    },
};

const dog = {
    name: "dog",

    bark() {
        console.log(`${this.name} is barking.`);
    },
}

dog.name = "Rex";
dog.eat = animal.eat;
dog.eat();
dog.bark();

console.log(dog);