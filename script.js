"use strict"; // означает, что пишем на стандарте ES6

var leftBorderWidth = 1; // создается с начала запуска проекта
let second = 2; // создается в момент ее использования
const pi = 3.14; // аналогична let, нельзя изменять без доп фишек

// Типы данных

var number = 2; //число(целые, дробные)
var string = "Hello"; //строка
var sym = Symbol(); //символ
var boolean = true; // логическое значение
null; // когда чего-то в коде просто не существует, ошибка, ссылка на несуществующую вещь
undefined; // когда обьект существует, но ничего не содержит
var obj = {}; // комплексный тип данных, коллекция, содержит данные, которые являются его свойством или методом
//типы объектов: массивы, функции, объект Даты, регулярные выражения, ошибки

console.log(4 / 0); //infinity
console.log("string" / 2); // Not a Number

let persone = {
  name: "John",
  age: 25,
  isMarried: false
};

console.log(persone["name"]);

let arr = ["plun.png", "orange.jpg", "apple.bmp"]; // массив

//ВЫВОД ПОЛЬЗОВАТЕЛЮ

//alert("Hellow World!");
// let answer = confirm("Are tou here?"); //результат - булиновое значение

// console.log(answer);

//let answer = prompt("есть ли вам 18?", "Да"); //выводит окошко с заготовленной информацией

//console.log(typeof(answer)); //выводит тип данных в переменной
//console.log(typeof(null));


//ОПЕРАТОРЫ

//конкотенация - когда складываешь строку и число, выходит строка

console.log(4 + " - object");
console.log("2"==2); // сравнение по значению
console.log("2"===2); //сравнение по типу данных

let isChecked = false,
    isClose = true;

console.log(isChecked || isClose);
