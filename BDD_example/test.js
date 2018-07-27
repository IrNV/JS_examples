describe("pow", function() {

  it("при возведении 2 в 3-ю степень получаем 8", function() {
    assert.equal(pow(2, 3), 8);
  });

  it("При возведении 10 в 2-ю степень получаем 100", function() {
  	assert.equal(pow(10, 2), 100);
  })

});