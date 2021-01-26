describe("FizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  describe("multiples of 3 and 5", function() {
    it("fizzbuzz for 15", function() {
      expect(fizzbuzz.play(15)).toEqual("FizzBuzz");
    });

    it("fizzbuzz for 30", function() {
      expect(fizzbuzz.play(30)).toEqual("FizzBuzz");
    });
  });

  describe("multiples of 3", function() {
    it("fizzes for 3", function() {
      expect(fizzbuzz.play(3)).toEqual("Fizz");
    });

    it("fizzes for 6", function() {
      expect(fizzbuzz.play(6)).toEqual("Fizz");
    });
  });

  describe("multiples of 5", function() {
    it("buzzes for 5", function() {
      expect(fizzbuzz.play(5)).toEqual("Buzz");
    });

    it("buzzes for 10", function() {
      expect(fizzbuzz.play(10)).toEqual("Buzz");
    });
  });


  describe("all other numbers", function() {
    it("returns 1 if 1", function() {
      expect(fizzbuzz.play(1)).toEqual(1);
    });

    it("returns 4 if 4", function() {
      expect(fizzbuzz.play(4)).toEqual(4);
    });
  });
});