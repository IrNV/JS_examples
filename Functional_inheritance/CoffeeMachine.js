/*
  В коде CoffeeMachine сделайте так, чтобы метод run выводил ошибку, если кофеварка выключена.
  Добавить возможность выключать кофеварку. При остановке выключать процесс варки.
*/
function Machine(power) {
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };

}

function CoffeeMachine(power) {
  Machine.apply(this, arguments);

  var timerId = null;
  var waterAmount = 0;

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

  var parentDisable = this.disable;
  this.disable = function() {
    clearTimeout(timerId);
    parentDisable();
  }

  function onReady() {
    alert( 'Кофе готово!' );
  }

  this.run = function() {
    if (this._enabled) {
      timerId = setTimeout(onReady, 1000);
    } else {
      alert("ошибка, кофеварка выключена!");
    }
  };

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет