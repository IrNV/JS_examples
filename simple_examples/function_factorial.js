/*
	Функция вычисления факториала числа с помощью рекурсии.
*/
function factorial(n) {
	
	if (n) return n * factorial(n-1);

	return 1;
}

n = +prompt("Введите число");

alert(factorial(n));	