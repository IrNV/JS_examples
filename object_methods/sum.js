/*
	Задача написать функцию, которая будет работать так:
	sum(1)(2) == 3; // 1 + 2
	sum(1)(2)(3) == 6; // 1 + 2 + 3
	sum(5)(-1)(2) == 6
	sum(6)(-1)(-2)(-3) == 0
	sum(0)(1)(2)(3)(4)(5) == 15
*/

function sum(x) {
	var result = x;

	function add(y) {
		result += y;
		return add;
	}

	add.toString = function() {return result; };

	return add;
}

alert( sum(1)(5)(0)(1) );
alert( sum(5)(-1)(2) );
