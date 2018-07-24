var userName = prompt("Кто пришел", "");

if (userName == "Админ") {

	var password = prompt("Пароль?", "");

	if (password == "Черный Властелин") {
		alert("Приветствую Вас!");
	} else if (password == null) {
		alert("Вход отменен");
	} else {
		alert("Пароль не верен");
	}

} else if (userName == null) {

	alert("Вход отменен");

} else {

	alert("Я вас не знаю");

}