/* Задача - 1). Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый, 
в который входят только те элементы arr, для которых func возвращает true.
2). Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b», inArray([...]) – "в массиве [...]".
*/

function filter(arr, func) {
	var resultArr = []

	arr.forEach(function(item){
		if (func(item)) resultArr.push(item);
	})

	return resultArr;
}

function inBetween(x, y) {
	return function(item) {
		return (item >= x) && (item <= y);
	}
}

function inArray(arr) {
	return function(item) {
		return arr.indexOf(item) != -1;
	}
}

var arr = [1, 2, 3, 4, 5, 6, 7];

alert(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6

alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

alert( filter(arr, inArray([1, 2, 10])) ); // 1,2