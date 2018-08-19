/*
  В коде CoffeeMachine сделайте так, чтобы метод run выводил ошибку, если кофеварка выключена.
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

  var waterAmount = 0;

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

  var parentEnable = this.enable;
  this.enable = function() {
      parentEnable(); // теперь можно вызывать как угодно, this не важен
      this.run();
    }

  function onReady() {
    alert( 'Кофе готово!' );
  }

  this.run = function() {
    if (this._enabled) {
      setTimeout(onReady, 1000);
    } else {
      alert("ошибка, кофеварка выключена!");
    }
  };

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.run(); // ошибка, кофеварка выключена!