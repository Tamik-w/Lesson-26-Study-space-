"use strict";

const car = {
    type: 'electric',
    wheels: 4,
}

const sportCar = {
    doors: 2,
}

const carInfo = Object.setPrototypeOf(sportCar, car);

const passengerCar = Object.create(car);
passengerCar.doors = 4;
console.log(passengerCar)

const toyCar = Object.create(carInfo);
toyCar.type = 'toy';
console.log(toyCar);