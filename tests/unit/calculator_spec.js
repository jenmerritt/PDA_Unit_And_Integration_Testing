var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('it should add 2 numbers together', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(5, calculator.runningTotal)
  })

  it('it should subtract 2 numbers', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal)
  })

  it('it should multiply 2 numbers', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(15, calculator.runningTotal)
  })

  it('it should divide 2 numbers', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal)
  })

  it('it should concatenate multiple number button clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    assert.equal(123, calculator.runningTotal)
  })

  it('it should chain multiple operations together', function(){
    calculator.previousTotal = 0;
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(10, calculator.previousTotal)
  })

  it('it should clear the running total without affecting the calculation', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.clearClick();
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(15, calculator.previousTotal)
  })

});
