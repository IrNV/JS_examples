/* Функция для нахождения частных сумм массива */
"use strict";

function getSums(arr) {
	var resultArray = [];

	var resultSum = arr.reduce(function(sum, current) {
		resultArray.push(sum);
		return sum + current;
	})
	resultArray.push(resultSum);

	return resultArray;
}

alert(getSums([-1, 0, 1, 2, 3, 4, 5]));
alert(getSums([3, 4, 5, 0]));

