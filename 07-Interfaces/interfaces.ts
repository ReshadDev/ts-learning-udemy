// interface Vehicle {
//   name: string;
//   year: Date;
//   broken: boolean;
//   summary(): string;
// }

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// Burada goruruk ki sade bir obyekti cap ederken name, year, stringin hansi tipe aid oldugunu gosteirik ve bu cox uzun gorunur. Meselen bizde indi 3-4 parametr var, ancaq bize gelen obyektde 100 olsa biz 100 eded parametri bura yazsaq, funksiyanin ne qeder berbad oldugunu gore bilersiz. Bu sebebden bize bir sey lazimdir ki, obyektin deyerlerini orda teyin edek ve bunu oturek. Bunun ucun bize interface lazimdir

/*
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}) => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);
};

*/

// const printVehicle = (vehicle: Vehicle) => {
//   console.log(vehicle.summary());
// };

// printVehicle(oldCivic);

interface Reportable {
  summary(): string;
}
const printSummary = (item: Reportable) => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
