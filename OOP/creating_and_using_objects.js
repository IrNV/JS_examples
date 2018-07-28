/* Пользователь вводит число людей, а программа случайно расставляет им оценку и показывает сумму */
"use strict";

var userAmount = +prompt("Введите количество людей");

var listOfUsers = {}

for (var i = 0; i < userAmount; i++) {
  listOfUsers[i] = 10 * Math.random();
}


var sum = 0;
for (var key in listOfUsers) {
  sum += listOfUsers[key];
}

alert(sum);