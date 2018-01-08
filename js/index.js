const car = require('./car')

console.log('the car is ', car.color);

console.log('the car is a convertible: ', car.convertible);

console.log('the starting speed is ', car.speed);

car.accelerate(25);

car.decelerate(5);