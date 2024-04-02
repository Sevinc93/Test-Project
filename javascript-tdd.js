function addNumbers(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply (a, b){
    return a * b;
}

function divide (a, b){
    return a / b;
}

function sumNumbers (numbers) {
    return numbers.reduce((a, b) => a + b);
    
}

const MaxNumber = [a, b];
     Math.max(...MaxNumber);


const MinNumber = [a, b];
    Math.min(...MinNumber);

function reverseString (str){
    return str;
}

function stringLength(str) {
    return str.length;
  }

  function uppercaseArray(arr) {
    return arr.map(str => str.toUpperCase());
  }
  

  const sum = (number1, number2) => {
   return  number1 + number2
  }
  console.log(sum(number1+number2));

  const product = (number1, number2) => {
   return  number1 * number2}
  console.log(product(number1, number2));

  const squareArray =(arr) => 
    arr.map(number => number1 ** number2)

    const countWords =(string) => {
        return string.length;
    }

    class Rectangle {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
      calculateArea () {
        return this.width * this.height;
      }
      calculatePerimeter () {
        return 2 * (this.width + this.height);
      }
    }


class Circle {
    constructor(radius, area){
        this.radius = radius;
        this.area = area;

    }
    calculateArea() {
        return this.radius * this.radius;
    }

    calculateCircumference () {
        return ((2)) * (Math.PI) * this.radius;

}
}

const person = {
    name: "Joy Human",
    age: 30,
    gender: "female",
    
};

const persons = [
    { name: "Rob bob",
      age: 38,
      gender: "male"
 },
 {
     name: "Mel Robbinson",
     age: 35,
     gender: "female"
 },
 {
     name: "Mike Toronto",
     age: 40,
     gender: "male"
 },
     
]

 function getTotalAge(persons) {
    let totalAge = 0;
    persons.forEach(person => {
        totalAge += person.age;
    });
    return totalAge;
}

function getAllNames(persons) {
    let allNames = persons
    persons.forEach(person => {
        allNames += person.name
    })
    return allNames;
}




