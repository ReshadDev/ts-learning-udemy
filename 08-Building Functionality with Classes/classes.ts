class Vehicle {
  // public drive(): void {
  //   console.log('Hello world');
  // }
  protected honk(): void {
    console.log('beep');
  }
  // color: string;

  constructor(public color: string) {
    // this.color = color;
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
// vehicle.honk();
// Property 'honk' is protected and only accessible within class 'Vehicle' and its subclasses

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
    // buradaki super parent classindaki constructor methoduna reference edir.
  }
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(20, 'red');
car.startDrivingProcess();

// Bizim 3 method tipimiz var : public, private, protected
// public - bu method istenilen vaxti istenilen yerde cagirila bilir
// private - bu method yalniz classin daxilinde diger methodlar terefinden cagirila biler
// protected - bu method da classin daxilinde diger methodlar terefinden cagirila biler, amma bu method hem de bu classin child classlarinda olan methodlar terefinden de cagirila biler
