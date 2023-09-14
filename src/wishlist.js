import { Car } from './car.js';


export class WishList {
    constructor() {
      this.list = [];
      this.nextId = 0;
    }
  
    add(make, model, year) {
      const car = new Car(++this.nextId, make, model, year);
      this.list.push(car);
    }

    remove(carId) {
    const index = this.list.findIndex((car) => car.id === carId);

    if (index !== -1) {
      this.list.splice(index, 1);
    }
  }
  }