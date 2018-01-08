/*
Partner up with your neighbor - your task is to make a module together (Car.js) and that defines a car – with both properties and functions – and export it as a module to an index.js file.

In the Car.js file:

Properties should include:

color, convertible (boolean), speed (0, at first)
Functions specs:

include accelerate and decelerate
these should take one argument, the speed, and add or substract it the from the current speed
return a string with the old speed and new speed
call these functions at the bottom of the file
In the index.js file, be sure to require the module and console log a message about your car object, including the current speed of the car.
*/

module.exports.color = 'red';
module.exports.convertible = false;
module.exports.speed = 0;

module.exports.accelerate = (speed)=>{
	this.speed = this.speed + 10;
		return "The car is now moving at " + (this.speed + 10) + " miles an hour.";
	};
	
module.exports.decelerate = (speed)=>{
	this.speed = this.speed - 10;
		return "The car is now moving at " + (this.speed - 10) + " miles an hour."; 
	};
