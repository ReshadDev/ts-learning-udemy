// Type annotation - deyiskenin tipini biz typescripte bildiririk
let apples: number = 5;

// Burada ise typescript artiq bilmir ki bu ne tipdedir ve deyiskene any typeni teyin edir
let applesN;
applesN = 5;

// Type inference - deyiskenin uzerine geldiyimiz an number oldugunu texmin edir
let applesIN = 6;

// Burada error aliriq, cunki biz deyiskeni teyin eden zaman dedik ki,verilen deyer yalniz reqem ola biler, biz burda boolean yazdigimiz ucun error cixir.
// const apples2: number = true;

let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blues'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, false];

// Classes

class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// Ne vaxt annotation istifade edilmelidir
// 1) Function that returns the 'any' type

const json = '{"x:10","y":20"}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x:10,y:20};

// 2) When we declare a variable on one line
let words = ['green', 'red', 'blue'];
let foundWord;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
