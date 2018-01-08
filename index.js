 const car = require('./Car.js');


console.log("The car is ", car.color);
if (car.convertible) {
	console.log("The car is a convertible")
} else {
	console.log("The car is not a convertible")
};

console.log("the current speed is ", car.speed);

car.accelerate(20);
car.decelerate(10);
