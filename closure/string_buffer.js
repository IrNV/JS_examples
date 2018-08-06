/*

Задача – реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:

Создание объекта: var buffer = makeBuffer();.
Вызов makeBuffer должен возвращать такую функцию buffer, 
которая при вызове buffer(value) добавляет значение в некоторое внутреннее хранилище, 
а при вызове без аргументов buffer() – возвращает его.

*/
function makeBuffer() {
	var buffer = "";

	return function(text) {
		if (arguments.length == 0) return buffer;

		buffer += text; 
	}
}

var buffer = makeBuffer();


buffer('Пример');
buffer(' Использования');
buffer(' Замыкания');

alert( buffer() );