/* Функция, которая суммирует 2 значения через передачу параметров в отдельных скобках:  sum(a)(b) = a+b*/
function sum(x) {

	return function(y) {
		return x + y;
	}
}

alert( sum(1)(5) );
alert( sum(5)(-1) );