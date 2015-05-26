describe('rFactorial', function() {
  it('returns 1 if the number entered is zero', function() {
    expect(rFactorial(0)).to.equal(1);
  });

  it('returns the factorial of a number entered', function () {
    expect(rFactorial(5)).to.equal(120)
  })

});
