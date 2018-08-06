/* Задача - создать массив функций-стрелков shooters. 
Каждый стрелок должен выводить свой номер:
*/

function createShooter(num) {
    return function() { // функция-стрелок
    alert( num ); // выводит свой номер
  };
}

function makeArmy() {

  var shooters = [];  // массив стрелков

  for (var i = 0; i < 10; i++) {
        var shooter = createShooter(i);
        shooters.push(shooter);
      }
    
      return shooters;
}

var army = makeArmy();
    
army[0]();
army[5]();
army[9]();
