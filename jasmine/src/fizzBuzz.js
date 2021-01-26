class FizzBuzz {
  _isDivisibleBy(num, divisor) {
    return (num % divisor === 0)
  }

  play(num) {
    if (this._isDivisibleBy(num, 15)) {
      return "FizzBuzz";
    } else if (this._isDivisibleBy(num, 3)) {
      return "Fizz";
    } else if (this._isDivisibleBy(num, 5)) {
      return "Buzz";
    } else {
      return num;
    };
  };
};