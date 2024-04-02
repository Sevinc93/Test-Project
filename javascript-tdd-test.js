describe('add', () => {
    it('adds the two numbers together', () => {
      expect(add(8, 4)).toEqual(12);
      expect(add(20, 40)).toEqual(60);
    });
  });
  describe('subtract', () => {
    it('subtracts the second number from the first', () => {
      expect(subtract(20, 4)).toEqual(16);
      expect(subtract(34, 40)).toEqual(-6);
    });
  });
  describe('multiply', () => {
    it('multiplies the two numbers together', () => {
      expect(multiply(20, 2)).toEqual(40);
      expect(multiply(-40, 4)).toEqual(-160);
      expect(multiply(-10, -8)).toEqual(80);
    });
  });
  describe('divide', () => {
    it('divides the first number by the second number', () => {
      expect(divide(200, 5)).toEqual(40);
      expect(divide(20, 2)).toEqual(10);
    });
  });

  describe('sumNumbers', () => {
    it('returns the sum of the numbers in the array', () => {
      expect(sumNumbers([2, 8, 10, 9, 6, 5])).toEqual(40);
      expect(sumNumbers([2, 10, 24])).toEqual(36);
    });
  });
  
  describe('findMax', () => {
    it('returns the max of the numbers in the array', () =>{
        expect(MaxNumber([ 10, 20, 30, 40, 50 ])). toBe(50);

    });
});

describe('findMin', () => {
    it('returns the min of the numbers in the array', () => {
        expect(MinNumber([10, 20, 30, 40, 50])). toBe(10);
    });
});

describe('reverseString', () => {
    it('should return the string reversed', () =>{
        expect(reverseString('Hello')).toEqual('olleH');
    });
  });

describe('stringLength', () => {
    it('returns the length of string', () =>{
        expect(stringLength('Hello')). toBe(5);
    });
});

describe('capitalizeArray', () =>{
    it('returns capitalize all strings in array', () =>{
        expect('capitalizeArray'('John', 'Jo', 'Jen')). toEqual(['JOHN', 'JO', 'JEN',])

    })
})

describe('Rectangle', () =>{
    it('calculate the area', () => {
        const rectangle = new Rectangle(10, 20);
        expect(rectangle.area()).toBe(200);
    });
});

describe('Circle', () => {
    it('calculate the circumference', () => {
        const circle = new Circle(5);
        expect(circle.circumference()).toBeCloseTo(31.42);
    });
});