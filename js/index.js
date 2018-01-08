/*
In the index.js file, be sure to require the module and console log a message about your car object, including the current speed of the car.
*/

const car = require('./Car.js')


console.log('The color of the car is '+ car.color);

console.log('The speed of the car is currently: '+ car.speed)

car.accelerate();
car.accelerate();
car.decelerate();

console.log('The speed of the car is currently: '+ car.speed);
