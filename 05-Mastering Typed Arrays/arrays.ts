// Non typed arrays
const carMakers = ['ford', 'bmw', 'mercedes'];
const dates = [new Date(), new Date()];

const carsByMake = [['f30'], ['corolla'], ['camaro']];
const carsByMake2: string[][] = [];

// Typed arrays

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100) - Argument of type 'number' is not assignable to parameter of type 'string'

// Help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), '2030-10-10'];
importantDates.push('2030-9-10');
importantDates.push(new Date());
// importantDates.push(100) - we cannot pass number to array which containts date or string
