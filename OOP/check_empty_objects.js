/* Пример функции проверки пустой обьект или нет */
function isEmpty(obj) {

  for (var key in obj) {
  	return false;
  }

  return true;
}

var client = {};

alert( isEmpty(client) );

client["age"] = 19;

alert( isEmpty(client) );