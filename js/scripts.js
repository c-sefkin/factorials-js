var rFactorial = function(num) {
  if (num === 0) {
    return 1;
  }
  else {
    return num * rFactorial(num-1);
  }
}
