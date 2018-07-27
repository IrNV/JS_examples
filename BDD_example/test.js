describe("pow", function() {

  describe("Проверка возведения корректно числа степень n (n >= 0)", function() {

    function makeTest(x) {
      var expected = x * x * x;
      it("при возведении " + x + " в степень 3 результат: " + expected, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (var x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  describe("Обработка некорректного n", function() {

  	it("При отрицательной степени возвращает NaN", function() {
  		assert(isNaN(pow(2, -3)));
  	});

  	it("При дробной степени возвращает NaN", function() {
  		assert(isNaN(pow(2, 1.5)));
  	});

  });

  it("ноль в нулевой степени возвращает NaN", function() {
    assert(isNaN(pow(0, 0)), "0 в степени 0 не NaN");
  });
  
});