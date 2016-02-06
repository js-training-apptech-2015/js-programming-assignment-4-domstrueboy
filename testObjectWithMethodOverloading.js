describe("ObjectWithMethodOverloading", function(){

  it("1) Test of ObjectWithMethodOverloading function: Test 1 - passed!", function() {

    var o = new ObjectWithMethodOverloading();

    function get() {
        return this._value;
    }

    function set(x) {
        this._value = x;
    }

    o.overload('value', get);
    o.overload('value', set);

    o.value(123);

    assert.equal(o.value(), 123);

  });

  it("2) Test of ObjectWithMethodOverloading function: Test 2 - passed!", function() {

    var o = new ObjectWithMethodOverloading();

    function multSq(n) {
        return n * n;
    }

    o.overload('mult', multSq);

    function multNumbers(n1, n2) {
        return n1 * n2;
    }

    o.overload('mult', multNumbers, [Number, Number]);

    function multStringAndNumber(s, n) {
        return Array(n).fill(s).join(''); // forgive me, IE
    }

    o.overload('mult', multStringAndNumber, [String, Number]);

    assert.equal(o.mult(3), 9);
    assert.equal(o.mult(2,3), 6);
    assert.equal(o.mult('ab',3), 'ababab');

  });

});