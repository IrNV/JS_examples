/* Функция суммы аргументов */
function sum() {
	var result = 0;

	for (i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}
	
	return result;
}

alert( sum(1, 2, 3, 4) );
alert( sum(1) );
alert( sum(-1, -3, 2, 0) );