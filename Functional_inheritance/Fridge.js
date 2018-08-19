/*
 Задача: Создайте класс для холодильника Fridge(power), наследующий от Machine, 
 с приватным свойством food и методами addFood(...), getFood(): Приватное свойство food хранит массив еды.

 Публичный метод addFood(item) добавляет в массив food новую еду,
 доступен вызов с несколькими аргументами addFood(item1, item2...) 
 для добавления нескольких элементов сразу.

 Если холодильник выключен, то добавить еду нельзя, будет ошибка.

 Максимальное количество еды ограничено power/100, где power – мощность холодильника, 
 указывается в конструкторе. При попытке добавить больше – будет ошибка
 
 Публичный метод getFood() возвращает еду в виде массива, 
 добавление или удаление элементов из которого не должно влиять на свойство food холодильника.
*/

function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power) {
	Machine.apply(this, arguments);

	var food = [];

	this.addFood = function(item) {
		if (!this._enabled) {
			throw new Error("Холодильник выключен");
		}

		if (this._power / 100 < arguments.length + food.length) {
			throw new Error("Невозможно добавить еду, т.к. не хватает мощности");
		}
		
		for (i = 0; i < arguments.length; i++) {
			food.push(arguments[i]);
		}
	}

	this.getFood = function() {
		return food.slice();
	}

	this.show = function() {
		alert(food);
	}


}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
alert( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

alert( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье