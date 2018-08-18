/*
Задача: написать функцию delay(f, ms), которая возвращает обёртку вокруг f,
задерживающую вызов на ms миллисекунд.
*/

function printMessage(x) {
  alert( x );
}

function delay(f, ms) {
	return function(text) {
		setTimeout(f, ms, text);
	}
}

var f1000 = delay(printMessage, 5000);
var f1500 = delay(printMessage, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд